const { Router } = require("express");
const { index, create, changeAvatar } = require("./controllers/users");
const file = require("./middlewares/file");

const router = Router();

router.get("/", index);

router.post("/users", create);

router.post("/avatar/:id", file.single("document"), changeAvatar);

module.exports = router;
