import groovy.json.JsonSlurper
import groovy.text.StreamingTemplateEngine

groups = [
        "Cloud Integration"                     : [
                "nf-amazon",
                "nf-azure",
                "nf-google",
                "nf-tencentcloud",
                "nf-snowflake",
                "nf-codecommit",
                "nf-quilt",
                "nf-cloudcache"
        ],
        "Executors and Orchestration"           : [
                "nf-ignite",
                "nf-nomad",
                "nf-jarvice",
                "nf-wr",
                "yellowdog"
        ],
        "Optimization and Performance Utilities": [
                "nf-boost",
                "nf-cloudcache",
                "nf-pgcache",
                "nf-parquet"
        ],
        "Data and Analysis Tools"               : [
                "nf-ffq",
                "nf-schema",
                "nf-validation",
                "nf-prov",
                "nf-ga4gh"
        ],
        "Development and Debugging Support"     : [
                "nf-console",
                "nf-dotenv",
                "nf-hello"
        ],
        "Sustainability and Environment"        : [
                "nf-co2footprint"
        ],
        "Specialized Integrations"              : [
                "nf-cws",
                "nf-iridanext",
                "nf-wave",
                "nf-weblog"
        ]

]

stats = new JsonSlurper().parse(new File("groovy/last.json"))

template = new StreamingTemplateEngine().createTemplate(new File("groovy/template.md").text)
jstemplate = new StreamingTemplateEngine().createTemplate(new File("groovy/template.js").text)
stats.each{ plugin->
    def md = new File("source/docs/${plugin.id}.md")
    md.parentFile.mkdirs()
    def binding = [
            plugin: plugin
    ]
    md.text = template.make(binding)

    def js = new File("source/docs/${plugin.id}/${plugin.id}.js")
    js.parentFile.mkdirs()
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
groups.each{ group ->
    navigation << """
            '${group.key}' => [
                'children' => [
"""
    group.value.each{ id ->
        plugin = stats.find{ it.id == id }
        navigation << "'$plugin.id' => 'docs/$plugin.id' ,\n"
    }
    navigation << """
                ],
            ],
"""
}
navigation << """
        ],
    ],
];
"""