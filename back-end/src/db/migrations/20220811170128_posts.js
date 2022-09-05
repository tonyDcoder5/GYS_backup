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
		table.string("title").notNullable();
		table.string("content",2000).notNullable();
		table.date("post_date").notNullable();
		table.string("image_url",500);
        table.string("video_url",500);
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
