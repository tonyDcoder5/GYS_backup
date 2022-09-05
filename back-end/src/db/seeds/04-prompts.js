const data = require("./04-prompts.json");

exports.seed = function (knex) {
	// Deletes ALL existing entries
	return knex
		.raw("TRUNCATE TABLE prompts RESTART IDENTITY CASCADE")
		.then(() => knex("prompts").insert(data));
};
