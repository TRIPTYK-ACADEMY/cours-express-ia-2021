const express = require("express");

// créer votre application express
const application = express();

// écoute sur la méthode HTTP GET /movies
application.get("/movies", (req, res) => {
  res.send("Bonjour");
});

// on utilise un paramètre d'url
// on peut y accéder grâce à req.params.[le paramètre]
// /movies/1
application.get("/movies/:id", (req, res) => {
  res.send("Bonjour movie : " + req.params.id);
});

// écoute sur toutes les méthodes HTTP
application.all("/", (req, res) => {
  // la méthode http utilisée
  const method = req.method;
  const body = req.body;
  const queryParams = req.query;

  console.log(method);
  console.log(body);
  console.log(queryParams);

  res.send("Bienvenue, vous utilisez la méthode " + req.method);
});

application.listen(8000, () => {
  console.log("Serveur écoute sur le port 8000");
});
