const express = require("express");
const router = require("./router");
const notFound = require("./middlewares/404");
const ejsLayouts = require("express-ejs-layouts");
const errorMiddleware = require("./middlewares/500");

const application = express();

application.set("view engine", "ejs"); // on vient définir le moteur de rendu, dans ce cas-ci EJS.
application.set("views", `${process.cwd()}/views`); // on défini le dossier où se trouve les vues
application.use(ejsLayouts); // on dit à express d'utiliser le module de layouts EJS

// on dit à notre application de servir les fichiers dans le dossier public via l'URL /public
application.use("/public", express.static(`${process.cwd()}/public`));

/// on dit à l'application d'utiliser notre routeur
application.use(router);

// ici on met un middleware pour une route non trouvée
// si il arrive dans ce middleware, c'est qu'aucune route n'a été trouvée avant
application.use(notFound);

// un middleware d'erreurs pour customiser le comportement lors d'une erreur
application.use(errorMiddleware);

application.listen(3000, () => {
  console.log("J'écoute sur le port 3000");
});
