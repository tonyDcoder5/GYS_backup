/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
	return knex.schema.createTable("contacts", (table) => {
		table.increments("contact_id").primary();
		table.string("first_name").notNullable();
		table.string("last_name").notNullable();
		table.string("contact_title");
		table.string("contact_url");
		table.string("contact_img");
		table.string("contact_org_name");
		table.string("contact_desc", 1000);
		table.string("mobile_number").notNullable();
		table.string("email_address").notNullable();
		table.string("contact_level");
		table.timestamps(true, true);
	});
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
	return knex.schema.dropTable("contacts");
};
