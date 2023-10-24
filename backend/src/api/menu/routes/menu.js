module.exports = {
  routes: [
    {
      method: "GET",
      path: "/menu",
      handler: "menu.find",
      "content-type": "application/json",
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
