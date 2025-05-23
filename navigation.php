<?php

return [
    'Plugins' => [
        'url' => 'docs/getting-started',
        'children' => [

            'Cloud Integration' => [
                'children' => [
'nf-amazon' => 'docs/nf-amazon' ,
'nf-azure' => 'docs/nf-azure' ,
'nf-google' => 'docs/nf-google' ,
'nf-tencentcloud' => 'docs/nf-tencentcloud' ,
'nf-snowflake' => 'docs/nf-snowflake' ,
'nf-codecommit' => 'docs/nf-codecommit' ,
'nf-quilt' => 'docs/nf-quilt' ,
'nf-cloudcache' => 'docs/nf-cloudcache' ,

                ],
            ],

            'Executors and Orchestration' => [
                'children' => [
'nf-ignite' => 'docs/nf-ignite' ,
'nf-nomad' => 'docs/nf-nomad' ,
'nf-jarvice' => 'docs/nf-jarvice' ,
'nf-wr' => 'docs/nf-wr' ,
'yellowdog' => 'docs/yellowdog' ,
'nf-float' => 'docs/nf-float' ,

                ],
            ],

            'Optimization and Performance Utilities' => [
                'children' => [
'nf-boost' => 'docs/nf-boost' ,
'nf-cloudcache' => 'docs/nf-cloudcache' ,
'nf-pgcache' => 'docs/nf-pgcache' ,
'nf-parquet' => 'docs/nf-parquet' ,

                ],
            ],

            'Data and Analysis Tools' => [
                'children' => [
'nf-sqldb' => 'docs/nf-sqldb' ,
'nf-ffq' => 'docs/nf-ffq' ,
'nf-schema' => 'docs/nf-schema' ,
'nf-validation' => 'docs/nf-validation' ,
'nf-prov' => 'docs/nf-prov' ,
'nf-ga4gh' => 'docs/nf-ga4gh' ,

                ],
            ],

            'Development and Debugging Support' => [
                'children' => [
'nf-console' => 'docs/nf-console' ,
'nf-dotenv' => 'docs/nf-dotenv' ,
'nf-hello' => 'docs/nf-hello' ,

                ],
            ],

            'Sustainability and Environment' => [
                'children' => [
'nf-co2footprint' => 'docs/nf-co2footprint' ,

                ],
            ],

            'Specialized Integrations' => [
                'children' => [
'nf-tower' => 'docs/nf-tower' ,
'nf-cws' => 'docs/nf-cws' ,
'nf-iridanext' => 'docs/nf-iridanext' ,
'nf-wave' => 'docs/nf-wave' ,
'nf-weblog' => 'docs/nf-weblog' ,
'nf-gpt' => 'docs/nf-gpt' ,

                ],
            ],

            'Others' => [
                'children' => [
'nf-datatrail' => 'docs/nf-datatrail' ,
'nf-fgbio' => 'docs/nf-fgbio' ,
'nf-k8s' => 'docs/nf-k8s' ,
'nf-lamin' => 'docs/nf-lamin' ,
'nf-synapse' => 'docs/nf-synapse' ,
'xpack-amzn' => 'docs/xpack-amzn' ,
'xpack-google' => 'docs/xpack-google' ,

                ],
            ],

        ],
    ],
];
