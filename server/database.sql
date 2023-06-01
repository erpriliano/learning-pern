/**
* It's better to run this on postgres / pgAdmin 
* rather than using the terminal, because it's easier to see the table
**/

CREATE DATABASE pern_todo;

CREATE TABLE todo(
    todo_id SERIAL PRIMARY KEY,
    description VARCHAR(255) NOT NULL
);