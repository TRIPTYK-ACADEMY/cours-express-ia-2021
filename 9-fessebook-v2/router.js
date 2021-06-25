const { Router } = require("express");
const { index, create } = require("./controllers/users");
const file = require("./middlewares/file");

const router = Router();

router.get("/", index);

router.route("/users").get(create).post(file.single("document"), create);

module.exports = router;
