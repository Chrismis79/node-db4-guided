# Data Modeling Notes

## Requirements

A client has hired you to build an API for managing `zoos` and the `animals` kept at each `zoo`. The API will be used for `zoos` in the _United States of America_, no need to worry about addresses in other countries.

For the `zoos` the client wants to record:

- name.
- address.

For the `animals` the client wants to record:

- name.
- species.
- list of all the zoos where they have resided.

Determine the database tables necessary to track this information.
Label any relationships between table.

> Software development is a game of abstraction
  How can I take something that exists and make it to software.
  Abstraction is sculpting.
## A good Data model (opinion)
- captures ALL data needed by the system.
- captures ONLY the data needed by the system.
- reflects reality from the point of view of the system
- is flexible (can evolve with the needs of the system)
- guarantee data integrity (with sacrificing too much performance)
- design data model based on how we are going to access the data.

## Components

- nouns = resources are called entities --> things we want to manage. Map to tables.
- properties (column, fields, attributes) map to columns.
- relationships between entities --> mostly done with express anf foreign keys.
- Take time to plan the data model. Blueprint.

## Workflow
- Identify entities (resources) --> nous --> tables
- indentify relationships
- identify properties (column)

## Relationships

- one to one: rare
- one to many: most common type
- many to many: smoke and mirrors? a trick? lol

## Mantras

- Every table MUST have a primary key (id)!
- work on 2 or 3 entities at a time.
- _one to many_ relationship requires a 'foreign key'
- the foreign key goes on the 'many' side of the relationship (users in our ex)
- many to many requires a third table (transaction table)
- the third table can have other columns