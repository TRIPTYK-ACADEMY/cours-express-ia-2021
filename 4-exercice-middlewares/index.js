const express = require("express");
const router = require("./router");
const notFound = require("./middlewares/404");

const application = express();

/// on dit à l'application d'utiliser notre routeur
application.use(router);

// ici on met un middleware pour une route non trouvée
application.use(notFound);

application.listen(3000, () => {
  console.log("J'écoute sur le port 3000");
});
