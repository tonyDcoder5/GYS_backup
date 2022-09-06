const data = require("./05-events.json");

exports.seed = function (knex) {
	// Deletes ALL existing entries
	return knex
		.raw("TRUNCATE TABLE events RESTART IDENTITY CASCADE")
		.then(() => knex("events").insert(data));
};
