const usersModel = require("../models/users");

exports.index = async (req, res, next) => {
  const users = await usersModel.find();

  res.render("index", {
    users,
  });
};

exports.create = async (req, res, next) => {
  const newUser = new usersModel({
    lastName: "Jacquy",
    firstName: "Ajax",
  });

  await newUser.save();

  res.send("Utilisateur créé avec succès !");
};

exports.changeAvatar = async (req, res, next) => {
  const id = req.params.id;

  const user = await usersModel.findById(id);
  const uploadedFile = req.file;

  user.avatar = uploadedFile.filename;

  await user.save();

  res.send("Vous avez un nouvel avatar !");
};
