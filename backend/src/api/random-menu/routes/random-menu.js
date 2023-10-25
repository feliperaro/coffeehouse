module.exports = {
  routes: [
    {
      method: "GET",
      path: "/random-menu",
      handler: "random-menu.index",
      "content-type": "application/json",
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
