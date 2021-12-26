
exports.seed = function(knex, Promise) {
  return knex('ingredients').insert([   
    { ingredient_name: 'Broccoli',ingredient_units:"lbs"},
    { ingredient_name: 'Pesto',ingredient_units:"lbs"},
    { ingredient_name: 'Pasta',ingredient_units:"lbs"},
    { ingredient_name: 'Lemon',ingredient_units:"slices"},
    { ingredient_name: 'Chicken',ingredient_units:"kilos"},
    { ingredient_name: 'Salmon',ingredient_units:"grams"}
  ]);
};