const express = require("express");
const router = express.Router();
const Recipe = require("./model")

router.get("/:recipe_id", (req, res, next) => {
  Recipe.getRecipeById(req.params.recipe_id)
  .then(resource => {
    res.status(200).json(resource)
  })
  .catch(next)

})

module.exports = router;