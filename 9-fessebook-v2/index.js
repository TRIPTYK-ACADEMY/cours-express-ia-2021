const mongoose = require("mongoose");
require("./models/users");
const express = require("express");
const router = require("./router");
const ejsLayouts = require("express-ejs-layouts");
const errorMiddleware = require("./middlewares/500");

async function init() {
  try {
    await mongoose.connect("mongodb://localhost:27017/fessebook", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Connecté à la base de données !");

    const thefessebookApp = express();

    // middleware permettant à express de parser correctement les données que vous envoyez au formulaire
    thefessebookApp.use(express.urlencoded({ extended: true }));

    thefessebookApp.use("/public", express.static(`${process.cwd()}/public`));

    thefessebookApp.set("view engine", "ejs");
    thefessebookApp.set("views", `${process.cwd()}/views`); // on défini le dossier où se trouvet les vues

    thefessebookApp.use(ejsLayouts);

    thefessebookApp.use(router);
    thefessebookApp.use(errorMiddleware);

    thefessebookApp.listen(6969, () => {
      console.log("Fessebook est en marche !");
    });
  } catch (e) {
    console.log("Une erreur est survenue : ", e);
  }
}

init();
