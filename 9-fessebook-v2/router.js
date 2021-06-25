const { Router } = require("express");
const { index, create, profile, edit } = require("./controllers/users");
const file = require("./middlewares/file");
const validate = require("./middlewares/validate");

const router = Router();

router.get("/", index);

router
  .route("/users")
  .get(create)
  .post(file.single("document"), validate, create);

router.route("/users/:slug").get(profile);
router.route("/users/edit/").post(file.single("document"),validate,edit);
router.route("/users/edit/:slug").get(edit);

module.exports = router;
