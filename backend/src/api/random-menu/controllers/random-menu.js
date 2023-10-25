module.exports = {
  index: async (ctx) => {
    try {
      ctx.body = {
        message: "hello random-menu",
      };
      ctx.status = 200;
    } catch (error) {
      ctx.body = "error: " + error.message;
      ctx.status = 400;
    }
  },
};
