const knex = require("../db/connection");

//----------CRUD FUNCTIONS-------------
function list(){
    return knex("users")
        .select("*")
        .orderBy("users.user_id")
}

module.exports = {
    list
}