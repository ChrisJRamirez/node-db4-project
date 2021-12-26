
exports.seed = async function(knex, Promise) {
  await knex('step_ingredients').insert([   
     // Broccoli Pesto Pasta
     { step_id:2, ingredient_id:1, quantity:1},
     { step_id:3, ingredient_id:2, quantity:2},
     { step_id:3, ingredient_id:3, quantity:2},
 
     // Lemon Chicken
     { step_id:5, ingredient_id:4, quantity:1},
     { step_id:5, ingredient_id:5, quantity:2},
 
     // Salmon
     { step_id:7, ingredient_id:6, quantity:1},
     
  ]);
};