const data = {
  Categories: {
    Breakfast: {
      Eggs: {
        ID: 1,
        Dishes: {
          'Blue Egg': {
            Ingredients: 'egg, blue dye',
            Price: 500
          },
          'Green Egg': {
            Ingredients: 'egg, green dye',
            Price: 400
          }
        }
      },
      Waffles: {
        ID: 2,
        Dishes: {
          'Sweet Waffle': {
            Ingredients: 'waffle, maple syrup',
            Price: 3000
          },
          'Savory Waffle': {
            Ingredients: 'waffle, balsamic vinegar',
            Price: 5000
          }
        }
      }
    },
    Lunch: {
      Soups: {
        ID: 3,
        Dishes: {
          'Stone Soup': {
            Ingredients: 'broth, granite',
            Price: 100
          },
          'Carrot Stew': {
            Ingredients: 'broth, 3 carrots',
            Price: 20
          }
        }
      }
    },
    Dinner: {
      Burgers: {
        ID: 5,
        Dishes: {
          'Bleu Burger': {
            Ingredients: 'burger, blue chese',
            Price: 300
          },
          'Mushroom Burger': {
            Ingredients: 'burger, sauteed shitake mushrooms',
            Price: 550
          }
        }
      }
    }
  },
  Specials: {
    blurb: 'test blurb',
  }
};

export default data;