const dotenv = require('dotenv');
const express = require('express');
const mealRouter = require('./routes/meal.route');
const app = express();
dotenv.config();
const PORT = process.env.PORT || 3001;

app.use('/meals', mealRouter);

app.listen(PORT, () => {
  console.log(`Running on port http://localhost:${PORT}`);
});
