
exports.seed = function(knex, Promise) {
  return knex('recipes').insert([   
    { recipe_name: 'Broccoli Pesto Pasta'},
    { recipe_name: 'Lemon Chicken'},
    { recipe_name: 'Salmon'}
  ]);
};