
exports.seed = function(knex, Promise) {
  return knex('recipeBook').insert([   
    { rbook_name: 'Chris'},
    { rbook_name: 'Greg'},
    { rbook_name: 'Alyssa'}
  ]);
};