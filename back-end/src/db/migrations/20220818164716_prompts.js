/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function (knex) {
	return knex.schema.createTable("prompts", (table) => {
		table.increments("prompt_id").primary();
        table.integer("user_id").unsigned();
        table.foreign("user_id")
            .references("user_id")
            .inTable("users")
            .onDelete("cascade");
		table.string("section_name").notNullable();
		table.string("section_title",1000).notNullable();
		table.string("section_subtitle",1000).nullable();
		table.string("section_text",5000).notNullable();
		table.string("section_subtext", 5000).nullable();
		table.string("section_image", 500).nullable();
		table.string("section_video", 500).nullable();
		table.string("section_link", 500).nullable();
		table.timestamps(true, true);
	});
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
	return knex.schema.dropTable("prompts");
};
