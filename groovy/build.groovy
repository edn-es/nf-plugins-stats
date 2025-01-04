import groovy.json.*
import groovy.text.StreamingTemplateEngine

import java.net.http.*
import static java.net.http.HttpResponse.BodyHandlers

def jsonSlurper = new JsonSlurper()
def plugins = jsonSlurper.parse("https://raw.githubusercontent.com/nextflow-io/plugins/main/plugins.json".toURL())

stats = new JsonSlurper().parse(new File("groovy/last.json"))

template = new StreamingTemplateEngine().createTemplate(new File("groovy/template.md").text)
jstemplate = new StreamingTemplateEngine().createTemplate(new File("groovy/template.js").text)
stats.each{ plugin->
    def md = new File("source/docs/${plugin.id}.md")
    def binding = [
            plugin: plugin
    ]
    md.text = template.make(binding)

    def js = new File("source/docs/${plugin.id}.js")
    def jsbinding = [
            plugin: plugin
    ]
    js.text = jstemplate.make(jsbinding)
}

navigation = new File("navigation.php")
navigation.text = """<?php

return [
    'Plugins' => [
        'url' => 'docs/getting-started',
        'children' => [
"""
stats.each{ plugin->
    navigation << "'$plugin.id' => 'docs/$plugin.id' ,"
}
navigation << """
        ],
    ],    
];
"""