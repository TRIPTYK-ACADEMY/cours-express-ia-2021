const express = require("express");
const { index, users } = require("./controllers");
const logger = require("./middlewares/logger");

const router = express.Router();

// on peut décider d'utiliser un middleware sur chaque route du routeur
router.use(logger);

router.get("/", index);
router.get("/users", users);

module.exports = router;
