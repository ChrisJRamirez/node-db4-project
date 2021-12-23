
exports.seed = function(knex, Promise) {
  return knex('recipes').insert([   
    { recipe_name: 'Toast',recipe_instructions_id:1,rBook_id:2},
    { recipe_name: 'Macaroni',recipe_instructions_id:2,rBook_id:1},
    { recipe_name: 'Bread',recipe_instructions_id:3,rBook_id:3}
  ]);
};