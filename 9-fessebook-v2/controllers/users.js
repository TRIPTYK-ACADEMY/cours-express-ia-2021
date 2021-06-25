const usersModel = require("../models/users");

exports.index = async (req, res, next) => {
  const users = await usersModel.find();

  res.render("index", {
    users,
  });
};

exports.create = async (req, res, next) => {
  if (req.method === "GET") {
    res.render("create-user");
  } else {
    // ... création de l'utilisateur
    console.log("Le fichier : ", req.file);
    // le body est le contenu envoyé par le formulaire
    console.log("Le contenu : ", req.body);
    const newUser = new usersModel({
      lastName: req.body.lastName,
      firstName: req.body.firstName,
      avatar: req.file.filename,
    });

    await newUser.save();

    // redirige sur la page d'acceuil après avir sauvegardé l'utilisateur !
    res.redirect("/");
  }
};
