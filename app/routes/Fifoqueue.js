module.exports = (app) => {
  const fifoqueue = require("../controllers/Fifoqueue");
  var router = require("express").Router();
  router.get("/fifoqueue", fifoqueue.getFifoqueue);
  router.put("/fifoqueue", fifoqueue.updateFifoqueue);
  app.use("/", router);
};
