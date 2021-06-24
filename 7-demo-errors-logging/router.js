const express = require("express");
const { index, users } = require("./controllers");
const logger = require("./middlewares/logger");
const file = require("./middlewares/file"); // on importe notre multer
const { upload } = require("./controllers/upload");

const router = express.Router();

// on peut décider d'utiliser un middleware sur chaque route du routeur
router.use(logger);

router.get("/", index);
router.get("/users", users);
// on dit à multer de gérer un fichier uploadé sur cette route et qui a comme nom "document"
router.post("/document", file.single("document"), upload);

module.exports = router;
