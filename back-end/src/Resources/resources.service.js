const knex = require("../db/connection");

//----------CRUD FUNCTIONS-------------
function list(){
    return knex("resources")
        .select("*")
        .orderBy("resources.resource_id")
}

module.exports = {
    list
}