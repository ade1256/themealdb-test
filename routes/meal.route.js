const express = require('express');
const mealController = require('../controller/meal.controller');

const router = express.Router();

router.get('/search', mealController.getMealsBySearchTerm);

module.exports = router;
