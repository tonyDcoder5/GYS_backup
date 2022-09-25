const knex = require("../db/connection");

//----------CRUD FUNCTIONS-------------
function list(){
    return knex("events")
        .select("*")
        .orderBy("events.event_date")
}

module.exports = {
    list
}