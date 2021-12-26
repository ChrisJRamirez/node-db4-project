
exports.seed = function(knex, Promise) {
  return knex('instructions').insert([   
    { recipe_id:1,number_of_steps:2,rBook_id:2,inredient_id:1},
    { recipe_id:2,number_of_steps:3,rBook_id:1,inredient_id:2},
    { recipe_id:3,number_of_steps:3,rBook_id:3,inredient_id:3}
  ]);
};