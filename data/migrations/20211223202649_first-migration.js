
exports.up = async function(knex) {
  await knex.schema
  .createTable("recipes", table => {
    tbl.increments("ingredients")
    tbl.string("rBook_name",128).notNullable()
  })
  .createTable("ingredients", table => {
    tbl.increments("ingredients")
    tbl.string("rBook_name",128).notNullable()
  })
  .createTable("steps", table => {
    tbl.increments("ingredients")
    tbl.string("rBook_name",128).notNullable()
  })
  .createTable("step_ingredients", table => {
    tbl.increments("ingredients")
    tbl.string("rBook_name",128).notNullable()
  })
  
};

exports.down = async function(knex) {
  await knex.schema
    .dropTableIfExists("step_ingredients")
    .dropTableIfExists("steps")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("recipes")
  
};
