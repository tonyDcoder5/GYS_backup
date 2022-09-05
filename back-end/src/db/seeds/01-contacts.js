const data = require("./01-contacts.json");

exports.seed = function (knex) {
	// Deletes ALL existing entries
	return knex
		.raw("TRUNCATE TABLE contacts RESTART IDENTITY CASCADE")
		.then(() => knex("contacts").insert(data));
};
