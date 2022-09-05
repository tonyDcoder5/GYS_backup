/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable("resources",(table)=>{
    table.increments("resource_id").primary();
    table.string("name").notNullable();
    table.string("description",1000).notNullable();
    table.string("url",500).notNullable();
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
