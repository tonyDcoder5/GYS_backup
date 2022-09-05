const knex = require("../db/connection");

//----------CRUD FUNCTIONS-------------
function list(){
    return knex("prompts")
        .select("*")
}

module.exports = {
    list
}