const express = require("express");
const router = require("./router");

const application = express();

/// on dit à l'application d'utiliser notre routeur
application.use("/api/", router);

// ici on met un middleware pour une route non trouvée
application.use(() => {
  console.log("404 not found");
});

application.listen(8000, () => {
  console.log("J'écoute sur le port 8000");
});
