import groovy.json.*
import groovy.text.StreamingTemplateEngine

import java.net.http.*
import static java.net.http.HttpResponse.BodyHandlers

def token = args[0]
def jsonSlurper = new JsonSlurper()
def plugins = jsonSlurper.parse("https://raw.githubusercontent.com/nextflow-io/plugins/main/plugins.json".toURL())

stats = plugins.collect { plugin ->
    println plugin.id
    def parts = plugin.releases.first().url.split("/")
    def org = parts[3]
    def repo = parts[4]
    def ret = [id: plugin.id, url: "https://github.com/$org/$repo", releases: []]

    try{
        ret.readme = "https://raw.githubusercontent.com/$org/$repo/refs/heads/master/README.md".toURL().text
    }catch(e1){
        try{
            ret.readme = "https://raw.githubusercontent.com/$org/$repo/refs/heads/master/readme.md".toURL().text
        }catch(e2) {
            println "$plugin.id without readme"
            ret.readme = """# $plugin.id
            """
        }
    }

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

    json.each { details ->
        def count = details.assets?.find { it.browser_download_url.endsWith("${plugin.id}-${details.tag_name}.zip") }?.download_count ?: 0
        ret.releases << [
                name        : details.name,
                count       : count,
                author      : details.author?.login,
                avatar      : details.author?.avatar_url,
                published_at: details.published_at
        ]
    }
    ret.releases = ret.releases.sort{ it.published_at }
    ret
}.sort{ it.id }

new File("groovy/last.json").text = JsonOutput.prettyPrint(JsonOutput.toJson(stats))
