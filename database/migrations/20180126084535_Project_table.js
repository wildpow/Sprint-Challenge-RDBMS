
exports.up = function(knex, Promise) {
  return knex.schema.createTable('projects', function(table) {
    table.increments('id');
    table.string('name', 128).notNullable();
    table.string('desctiption', 128).notNullable();
    table.boolean('completed').notNullable().defaultTo(false);
  })
};

exports.down = function(knex, Promise) {
  knex.schema.dropTableIfExists('projects')
};
