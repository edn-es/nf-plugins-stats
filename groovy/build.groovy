import groovy.json.JsonSlurper
import groovy.text.StreamingTemplateEngine

basePath = args.length > 0 ? args[0] : ''

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
                "nf-k8s",
                "nf-nomad",
                "nf-jarvice",
                "nf-wr",
                "yellowdog",
                "nf-float"
        ],
        "Optimization and Performance Utilities": [
                "nf-boost",
                "nf-cloudcache",
                "nf-pgcache",
                "nf-parquet"
        ],
        "Data and Analysis Tools"               : [
                "nf-sqldb",
                "nf-ffq",
                "nf-schema",
                "nf-validation",
                "nf-prov",
                "nf-ga4gh"
        ],
        "Development and Debugging Support"     : [
                "nf-cachebrowser",
                "nf-console",
                "nf-dotenv",
                "nf-datatrail",
                "nf-hello"
        ],
        "Sustainability and Environment"        : [
                "nf-co2footprint"
        ],
        "Specialized Integrations"              : [
                "nf-tower",
                "nf-cws",
                "nf-iridanext",
                "nf-wave",
                "nf-weblog",
                "nf-gpt",
        ],
        "Others"                                : [
        ]
]

stats = new JsonSlurper().parse(new File("groovy/last.json"))

template = new StreamingTemplateEngine().createTemplate(new File("groovy/template.md").text)
stats.each{ plugin->
    def md = new File("source/docs/${plugin.id}.md")
    md.parentFile.mkdirs()
    def binding = [
            plugin: plugin,
            baseUrl: basePath
    ]
    md.text = template.make(binding)

    def founded = groups.find { it.value.contains(plugin.id) }
    if( !founded ){
        println "Plugin ${plugin.id} not found in any group"
        groups."Others".add(plugin.id)
    }
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