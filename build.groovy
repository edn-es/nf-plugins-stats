import groovy.json.*
import static groovy.json.JsonOutput.*
import java.net.http.*
import static java.net.http.HttpResponse.BodyHandlers

def token = args[0]

def jsonSlurper = new JsonSlurper()
def plugins = jsonSlurper.parse("https://raw.githubusercontent.com/nextflow-io/plugins/main/plugins.json".toURL())

def stats = plugins.collect{ plugin ->
	println plugin.id

	def ret = [id: plugin.id, releases:[]]
	
	def parts = plugin.releases.first().url.split("/")
	def org = parts[3]
	def repo= parts[4]

	def request = HttpRequest.newBuilder()
		.uri(new URI("https://api.github.com/repos/$org/$repo/releases".toString()))
		.headers("Authorization", "Bearer $token")
		.GET()
		.build()
	
	def response = HttpClient.newBuilder()
		.followRedirects(HttpClient.Redirect.ALWAYS)
		.build()
		.send(request, BodyHandlers.ofString())

	def json = jsonSlurper.parseText(response.body())
	json.each{ details->
		def count = details.assets?.find{ it.browser_download_url.endsWith(".zip") }?.download_count ?: 0
		ret.releases << [ name: details.name, count: count]
	}
	ret
}

txt = prettyPrint(toJson(stats))
new File(args[1]).text = txt
