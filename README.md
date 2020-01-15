# London activities
<br>
Aim: create a database where users can add activities and view activities 
Tools:
        - Express
        - Knex
        - Postgres

Usere Stories:
    - As a user, when I want to see what to do in London, I want a site that can show me all the activies to do in London
    - As a user, when I think of an activity to do in London, I want to be able to add it to the database 
    MVP ^
    - As a user, when I want to do a specific type of activity, I want to search for all the activities of a specific type

How to run set up:
    - ``` npm install ```
    - download postgres
    - create a local postgres databse called "activities"
    - run the migrate file `knex migrate:latest`
    - run the seed file `knex run seed`
    - `nodemon app.js`

     knex migrate:latest --env test
     knex seed:run --env test