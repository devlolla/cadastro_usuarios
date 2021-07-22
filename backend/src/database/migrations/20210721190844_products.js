
exports.up = function (knex) {
  return knex.schema.createTable('products', function (table) {
    table.increments();

    table.string('productName').notNullable();
    table.decimal('price').notNullable();
    table.string('description').notNullable();
    table.boolean('status').notNullable();

    table.string('user_id').notNullable();

    table.foreign('user_id').references('id').inTable('users');
  })
};

exports.down = function (knex) {
  return knex.schema.dropTable('products')
};
