const data = require("./00-resources.json");

exports.seed = function (knex) {
	// Deletes ALL existing entries
	return knex
		.raw("TRUNCATE TABLE resources RESTART IDENTITY CASCADE")
		.then(() => knex("resources").insert(data));
};
