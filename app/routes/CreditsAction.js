module.exports = (app) => {
  const creditsAction = require("../controllers/CreditsAction");
  var router = require("express").Router();
  router.get("/credits", creditsAction.getCredits);
  router.put("/credits", creditsAction.updateCredits);
  app.use("/", router);
};
