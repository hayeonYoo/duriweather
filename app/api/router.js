const express = require("express");
const apiRouter = express.Router();

apiRouter.use("/pm", require("./resources/pm"));

module.exports = apiRouter;