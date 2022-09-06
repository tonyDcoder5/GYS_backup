/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
	return knex.schema.createTable("posts", (table) => {
		table.increments("post_id").primary();
        table.integer("user_id").unsigned();
        table.foreign("user_id")
            .references("user_id")
            .inTable("users")
            .onDelete("cascade");
		table.string("post_title").notNullable();
		table.string("post_author");
		table.string("post_subtitle").notNullable();
		table.string("post_text",2000).notNullable();
		table.string("post_subtext").notNullable();
		table.date("post_date");
		table.string("post_url");
		table.string("post_image");
        table.string("post_video");
		table.boolean("top");
		table.timestamps(true, true);
		//**TODO password if implementation of verification is completed **//
	});
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
	return knex.schema.dropTable("posts");
};
