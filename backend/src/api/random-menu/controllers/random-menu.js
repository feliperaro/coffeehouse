const { getRandomItemFromArray } = require("../services/random-menu");

module.exports = {
  index: async (ctx) => {
    try {
      let randomMenu = [];

      const rows = 4;
      for (var row = 0; row < rows; row++) {
        const types = ["drinks", "foods"];
        for (const type of types) {
          let items = [];
          if (type === "drinks") {
            items = await strapi.entityService.findMany("api::drink.drink", {
              fields: ["name"],
            });
          } else if (type === "foods") {
            items = await strapi.entityService.findMany("api::food.food", {
              fields: ["name"],
              populate: ["cover"],
            });
          }

          let randomValue = getRandomItemFromArray(items);
          console.log("randomValue", randomValue);

          randomMenu.push(randomValue);
          console.log("randomMenu", randomMenu);
        }
      }

      ctx.body = {
        randomMenu: randomMenu,
      };

      ctx.status = 200;
    } catch (error) {
      ctx.body = "error: " + error.message;
      ctx.status = 400;
    }
  },
};
