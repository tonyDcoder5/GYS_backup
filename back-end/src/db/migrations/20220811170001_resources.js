/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable("resources",(table)=>{
    table.increments("resource_id").primary();
    table.string("resource_title").notNullable();
    table.string("resource_subtext").notNullable();
    table.string("resource_description",1000).notNullable();
    table.string("resource_url",500).notNullable();
    table.string("resource_media",500).nullable();
    table.timestamps(true,true)
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable("resources")
};
