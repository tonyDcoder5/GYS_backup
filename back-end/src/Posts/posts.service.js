const knex = require("../db/connection");

//----------CRUD FUNCTIONS-------------
function list(){
    return knex("posts")
        .select("*")
        .orderBy("posts.post_date","desc")
}

function readUser(user_id){
    return knex("users")
        .select("*")
        .where({user_id})
        .first()
}


module.exports = {
    list,
    readUser
}