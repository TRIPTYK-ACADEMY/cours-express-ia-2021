const { Router } = require("express");
const { index, create, profile, edit , login, register } = require("./controllers/users");
const {isLoggedIn} = require("./controllers/auth")
const file = require("./middlewares/file");
const validate = require("./middlewares/validate");
const validateRegister = require('./middlewares/validate_register');

const router = Router();

router.get("/", isLoggedIn,index);

router
  .route("/users")
  .get(create)
  .post(file.single("document"), validate, create);

router.route("/users/:slug").get(profile);
router.route("/users/edit/").post(file.single("document"),validate,edit);
router.route("/users/edit/:slug").get(isLoggedIn,edit);
router.route("/login").get(login);
router.route("/login").post(login);
router.route("/register").get(register);
router.route("/register").post(validateRegister,register);

module.exports = router;
