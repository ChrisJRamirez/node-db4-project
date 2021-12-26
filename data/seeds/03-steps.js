
exports.seed = function(knex, Promise) {
  return knex('steps').insert([   
    // Broccoli Pesto Pasta
    { step_text:"heat pan", step_number:1, recipe_id:1},
    { step_text:"add broccoli", step_number:2, recipe_id:1},
    { step_text:"add pesto", step_number:3, recipe_id:1},

    // Lemon Chicken
    { step_text:"heat oven", step_number:1, recipe_id:2},
    { step_text:"add chicken", step_number:2, recipe_id:2},
    { step_text:"put in oven", step_number:3, recipe_id:2},

    // Salmon
    { step_text:"catch a salmon", step_number:1, recipe_id:3},
    { step_text:"cook salmon", step_number:2, recipe_id:3},
    
  ]);
};