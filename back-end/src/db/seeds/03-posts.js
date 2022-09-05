const data = require("./03-posts.json");

exports.seed = function (knex) {
	// Deletes ALL existing entries
	return knex
		.raw("TRUNCATE TABLE posts RESTART IDENTITY CASCADE")
		.then(() => knex("posts").insert(data));
};
