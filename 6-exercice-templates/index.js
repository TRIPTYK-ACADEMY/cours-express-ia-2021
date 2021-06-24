const express = require("express");
const users = require("./users.json");

const application = express();

application.set("view engine", "ejs");

application.set("views", `${process.cwd()}/views`); // on défini le dossier où se trouvet les vues

const router = express.Router();

router.get("/users/", (req, res) => {
  res.render("users", {
    users: users.users,
  });
});

router.get("/users/:id", (req, res) => {
  // req.params.id => "1"
  // dans notre JSON c'es un nombre
  // on utilise le == pour ne pas faire une comparaison stricte et  faire en sorte que "1" === 1
  const user = users.users.find((user) => user.id == req.params.id);

  if (user) {
    res.render("user", {
      user,
    });
  } else {
    // on  renvoie 404
    res.sendStatus(404);
  }
});

// utilise le routeur de nos utilisateurs
application.use(router);

application.listen(8080, () => {
  console.log("J'écoute");
});
