const usersModel = require("../models/users");
const slug = require("slug");

exports.index = async (req, res, next) => {
  const users = await usersModel.find();

  res.render("index", {
    users,
  });
};

exports.profile = async (req, res, next) => {
  const user = await usersModel.findOne({
    slug: req.params.slug,
  });

  res.render("profile", {
    user,
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

    const lastName = req.body.lastName.toLowerCase();
    const firstName = req.body.firstName.toLowerCase();

    const alreadyExists = await usersModel.count({
      lastName,
      firstName,
    });

    const newUser = new usersModel({
      lastName,
      firstName,
      avatar: req.file.filename,
      slug: slug(
        `${req.body.lastName} ${req.body.firstName} ${
          alreadyExists !== 0 ? alreadyExists : ""
        }`
      ),
    });

    await newUser.save();

    // redirige sur la page d'acceuil après avir sauvegardé l'utilisateur !
    res.redirect("/");
  }
};
