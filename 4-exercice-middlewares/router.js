const express = require("express");
const authorize = require("./middlewares/authorize");
const logger = require("./middlewares/logger");

const router = express.Router();

// on peut décider d'utiliser un middleware sur chaque route du routeur
router.use(logger);

router.get("/dashboard/", authorize, (req, res) => {
  res.send("Bienvenue, admin");
});

router.get("/members/", (req, res) => {
  res.send("Bienvenue, member");
});

module.exports = router;
