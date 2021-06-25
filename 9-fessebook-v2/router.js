const { Router } = require("express");
const { index, create, profile } = require("./controllers/users");
const file = require("./middlewares/file");

const router = Router();

router.get("/", index);

router.route("/users").get(create).post(file.single("document"), create);

router.route("/users/:slug").get(profile);

module.exports = router;
