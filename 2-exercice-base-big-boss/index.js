const express = require("express");

const application = express();

application.all("/members/:username", (req, res) => {
  const role = req.query.role; // on va lire les paramètres de l'URL

  // on va lire les paramètres de la route (:username) et on envoie la réponse au client avec res.send
  res.send(`Hello ${req.params.username} your role is ${role}`);
});

application.listen(8000, () => {
  console.log("J'écoute sur le port 8000");
});
