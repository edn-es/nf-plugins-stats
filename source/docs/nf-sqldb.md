---
title: nf-sqldb
description: nf-sqldb
extends: _layouts.documentation
section: content
---

# Activity

<div style="position: relative; height:40vh; width:80vw">
    <canvas id="releases"></canvas>
</div>
<script type="module" src="nf-sqldb.js"></script>

# SQL DB plugin for Nextflow

This plugin provides support for interacting with SQL databases in Nextflow scripts.

The following databases are currently supported:

* [AWS Athena](https://aws.amazon.com/athena/) (Setup guide [here](docs/aws-athena.md))
* [DuckDB](https://duckdb.org/)
* [Google BigQuery](https://cloud.google.com/bigquery) (Setup guide [here](docs/google-bigquery.md))
* [H2](https://www.h2database.com)
* [MySQL](https://www.mysql.com/)
* [MariaDB](https://mariadb.org/)
* [PostgreSQL](https://www.postgresql.org/)
* [SQLite](https://www.sqlite.org/index.html)

NOTE: THIS IS A PREVIEW TECHNOLOGY, FEATURES AND CONFIGURATION SETTINGS CAN CHANGE IN FUTURE RELEASES.

## Getting started

This plugin requires Nextflow `22.08.1-edge` or later. You can enable the plugin by adding the following snippet to your `nextflow.config` file:

```groovy
plugins {
    id 'nf-sqldb'
}
```

Support for BigQuery is provided in a separate plugin:

```groovy
plugins {
    id 'nf-bigquery'
}
```

## Configuration

You can configure any number of databases under the `sql.db` configuration scope. For example:

```groovy
sql {
    db {
        foo {
            url = 'jdbc:mysql://localhost:3306/demo'
            user = 'my-user'
            password = 'my-password'
        }
    }
}
```

The above example defines a database named `foo` that connects to a MySQL server running locally at port 3306 and
using the `demo` schema, with `my-name` and `my-password` as credentials.

The following options are available:

`sql.db.'<DB-NAME>'.url`
: The database connection URL based on the [JDBC standard](https://docs.oracle.com/javase/tutorial/jdbc/basics/connecting.html#db_connection_url).

`sql.db.'<DB-NAME>'.driver`
: The database driver class name (optional).

`sql.db.'<DB-NAME>'.user`
: The database connection user name.

`sql.db.'<DB-NAME>'.password`
: The database connection password.

## Dataflow Operators

This plugin provides the following dataflow operators for querying from and inserting into database tables.

### fromQuery

The `fromQuery` factory method queries a SQL database and creates a channel that emits a tuple for each row in the corresponding result set. For example:

```nextflow
include { fromQuery } from 'plugin/nf-sqldb'

channel.fromQuery('select alpha, delta, omega from SAMPLE', db: 'foo').view()
```

The following options are available:

`db`
: The database handle. It must be defined under `sql.db` in the Nextflow configuration.

`batchSize`
: Query the data in batches of the given size. This option is recommended for queries that may return large a large result set, so that the entire result set is not loaded into memory at once.
: *NOTE:* this feature requires that the underlying SQL database supports `LIMIT` and `OFFSET`.

`emitColumns`
: When `true`, the column names in the `SELECT` statement are emitted as the first tuple in the resulting channel.

### sqlInsert

The `sqlInsert` operator collects the items in a source channel and inserts them into a SQL database. For example:

```nextflow
include { sqlInsert } from 'plugin/nf-sqldb'

channel
    .of('Hello','world!')
    .map( it -> tuple(it, it.length) )
    .sqlInsert( into: 'SAMPLE', columns: 'NAME, LEN', db: 'foo' )
```

The above example executes the following SQL statements into the database `foo` (as defined in the Nextflow configuration).

```sql
INSERT INTO SAMPLE (NAME, LEN) VALUES ('HELLO', 5);
INSERT INTO SAMPLE (NAME, LEN) VALUES ('WORLD!', 6);
```

*NOTE:* the target table (e.g. `SAMPLE` in the above example) must be created beforehand.

The following options are available:

`db`
: The database handle. It must be defined under `sql.db` in the Nextflow configuration.

`into`
: The target table for inserting the data.

`columns`
: The database table column names to be filled with the channel data. The column names order and cardinality must match the tuple values emitted by the channel. The columns can be specified as a list or as a string of comma-separated values.

`statement`
: The SQL `INSERT` statement to execute, using `?` as a placeholder for the actual values, for example: `insert into SAMPLE(X,Y) values (?,?)`. The `into` and `columns` options are ignored when this option is provided.

`batchSize`
: Insert the data in batches of the given size (default: `10`).

`setup`
: A SQL statement that is executed before inserting the data, e.g. to create the target table.
: *NOTE:* the underlying database should support the *create table if not exist* idiom, as the plugin will execute this statement every time the script is run.

## Querying CSV files

This plugin supports the [H2](https://www.h2database.com/html/main.html) database engine, which can query CSV files like database tables using SQL statements.

For example, create a CSV file using the snippet below:

```bash
cat <<EOF > test.csv
foo,bar
1,hello
2,ciao
3,hola
4,bonjour
EOF
```

Then query it in a Nextflow script:

```nextflow
include { fromQuery } from 'plugin/nf-sqldb'

channel
    .fromQuery("SELECT * FROM CSVREAD('test.csv') where foo>=2;")
    .view()
```

The `CSVREAD` function provided by the H2 database engine allows you to query any CSV file in your filesystem. As shown in the example, you can use standard SQL clauses like `SELECT` and `WHERE` to define your query.

## Caveats

Like all dataflow operators in Nextflow, the operators provided by this plugin are executed asynchronously.

In particular, data inserted using the `sqlInsert` operator is *not* guaranteed to be available to any subsequent queries using the `fromQuery` operator, as it is not possible to make a channel factory operation dependent on some upstream operation.


## Releases Detail


### Version 0.1.0

Published: 2021-09-01T15:36:29Z

Downloads: 406

Author: ![avatar](https://avatars.githubusercontent.com/u/816968?v=4 "pditommaso"){width=50 height=50}


### Version 0.2.0

Published: 2021-10-10T16:52:13Z

Downloads: 308

Author: ![avatar](https://avatars.githubusercontent.com/u/816968?v=4 "pditommaso"){width=50 height=50}


### Version 0.3.0

Published: 2022-02-07T11:17:23Z

Downloads: 182

Author: ![avatar](https://avatars.githubusercontent.com/u/816968?v=4 "pditommaso"){width=50 height=50}


### Version 0.4.0

Published: 2022-04-11T19:10:41Z

Downloads: 269

Author: ![avatar](https://avatars.githubusercontent.com/u/816968?v=4 "pditommaso"){width=50 height=50}


### Version 0.4.1

Published: 2022-05-25T17:57:10Z

Downloads: 704

Author: ![avatar](https://avatars.githubusercontent.com/u/816968?v=4 "pditommaso"){width=50 height=50}


### Version 0.5.0

Published: 2022-08-30T19:40:03Z

Downloads: 1857

Author: ![avatar](https://avatars.githubusercontent.com/u/816968?v=4 "pditommaso"){width=50 height=50}
