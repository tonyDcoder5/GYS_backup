/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("events", (table) => {
		table.increments("event_id").primary();
        table.integer("user_id").unsigned();
        table.foreign("user_id")
            .references("user_id")
            .inTable("users")
            .onDelete("cascade");
		table.string("event_name").notNullable();
		table.date("event_date").notNullable();
		table.string("event_title",1000).notNullable();
		table.string("event_text",5000).notNullable();
		table.string("event_subtext", 5000).nullable();
		table.string("event_image", 500).nullable();
		table.string("event_video", 500).nullable();
		table.string("event_link", 500).nullable();
		table.timestamps(true, true);
	});
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
   return knex.schema.dropTable("events");

};
