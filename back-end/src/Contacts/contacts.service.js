const knex = require("../db/connection");

//----------CRUD FUNCTIONS-------------
function list(){
    return knex("contacts")
        .select("*")
        .orderBy("contacts.contact_id")
}

module.exports = {
    list
}