# Table Schema Design 

Migrations is like Git for DataBase Schemas. 

Migrations keep your DataBase design in sync with the application code.

> Every change to the DataBase schema must be recorded in a migration file. 

## Migrations 

Install the `knex cli` : npm i -g knex `or` yarn global add knex
Run `knex` to see if it worked

Create a knex configuration file (knexfile.js)
Type: `knex init`.

Update to teach Knex how to connect to the database.

To create a migration type: `knex migrate:make migrationName`

> I need to make a change to the database structure 
> &mdash; A developer 
 >Make a new migration!
 > &mdash; The developers inner voice

* To run a migration type: knex migrate:latest

# Seeds
- To make seed folder > knex seed:make (name/veggies)
- To run the seeds: knex seed:run
