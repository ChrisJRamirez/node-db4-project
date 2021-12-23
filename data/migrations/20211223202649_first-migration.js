
exports.up = function(knex) {
  return knex.schema
  .createTable("recipeBook", tbl => {
    tbl.increments("rBook_id")
    tbl.string("rBook_name",128).notNullable()
  })
  
};

exports.down = function(knex) {
  
};
