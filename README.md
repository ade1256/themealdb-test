
# MealDB API Client

This project is a simple Node.js application that acts as a client for the [MealDB API](https://www.themealdb.com/api/json/v1/1/). It allows you to search for meals based on a search term.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ade1256/themealdb-test.git
2. Install dependencies:
    ```bash
    npm install 
## Usage
1. Start server
    `` node index.js``
    
2. Access the API Endpoint
 `http://localhost:3001/meals/search?s=chicken`
## API Endpoints

-   `/meals/search?s=<searchTerm>`: Search for meals based on the provided search term.

## Example Response

```json
{
  "meals": [
    {
      "id_meal": "52771",
      "str_meal": "Chicken & mushroom hotpot",
      "str_meal_thumb": "https://www.themealdb.com/images/media/meals/uyqypv1511812997.jpg",
      "str_instructions": "Preheat oven to 350 degrees F (175 degrees C). Grease a 9x13 inch baking dish.\nIn a large bowl, combine the chicken, mushrooms, onions, celery, carrots, garlic, salt, pepper, and thyme. Pour the chicken broth over the mixture and stir to combine.\nPour the chicken mixture into the prepared baking dish. Cover with foil and bake for 30 minutes. Uncover and bake for an additional 15 minutes, or until the chicken is cooked through and the vegetables are tender.\nServe hot.",
      "str_meal_category": "Chicken",
      "str_meal_area": "British"
    },
    // ... more meals
  ]
}

```

## Contributing
Contributions are welcome! Please open an issue or submit a pull request.
