const axiosInstance = require('../utils/axiosIntance');

const getMealsBySearchTerm = async (req, res) => {
  try {
     const searchTerm = req.query.s;
    if (!searchTerm) {
      return res.status(400).json({ error: 'Missing search term' });
    }

    const response = await axiosInstance.get(`search.php?s=${searchTerm}`);
    const data = response.data;

    if (data.meals) {
      data.meals = data.meals.map(meal => {
        return Object.entries(meal).reduce((acc, [key, value]) => {
          const snakeCaseKey = key.replace(/([A-Z])/g, '_$1').toLowerCase();
          acc[snakeCaseKey] = value;
          return acc;
        }, {});
      });
    }

    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch data' });
  }
}

module.exports = {
  getMealsBySearchTerm,
};
