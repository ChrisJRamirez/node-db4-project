const db = require("../data/db-config");

const getRecipeById = (recipe_id) => {
  return Promise.resolve(`Awesome recipe with ID:${recipe_id}`)

}

module.exports = {
  getRecipeById
};