// @ts-nocheck

module.exports = {
  find: async (ctx) => {
    try {
      let menu = {
        drinks: {},
        foods: {},
      };

      const types = ["drinks", "foods"];
      for (const type of types) {
        const categories = await strapi.entityService.findMany(
          "api::category.category",
          {
            fields: ["name"],
            filters: {
              type: {
                $eq: type,
              },
            },
            populate: ["sub_categories"],
          }
        );

        console.log("categories:", categories);
        const sub_categories = categories.sub_categories;
        console.log("sub_categories: " + sub_categories);

        if (categories.length == 0) {
          continue;
        }

        for (const category in categories) {
          let categoryObj = categories[category];
          const subCategories = await strapi.entityService.findMany(
            "api::sub-category.sub-category",
            {
              filters: {
                category: {
                  name: {
                    $eq: categoryObj.name,
                  },
                },
              },
              fields: ["name"],
            }
          );

          categoryObj = { ...categoryObj, subCategories };
          if (subCategories.length == 0) {
            categories[category] = categoryObj;
            continue;
          }

          for (const subCategory in subCategories) {
            let subCategoryObj = subCategories[subCategory];
            let filters = {
              sub_category: {
                name: {
                  $eq: subCategoryObj.name,
                },
              },
            };

            let items = [];
            if (type === "drinks") {
              items = await strapi.entityService.findMany("api::drink.drink", {
                fields: ["name"],
                filters: filters,
              });
            } else if (type === "foods") {
              items = await strapi.entityService.findMany("api::food.food", {
                fields: ["name"],
                filters: filters,
              });
            }

            subCategoryObj = { ...subCategoryObj, items };
            subCategories[subCategory] = subCategoryObj;
          }
          categories[category] = categoryObj;
        }

        let objType = { categories };
        menu[type] = objType;
      }

      ctx.body = menu;
      ctx.status = 200;
    } catch (error) {
      console.error(error);
      ctx.body = error.message;
      ctx.status = 400;
    }
  },
};
