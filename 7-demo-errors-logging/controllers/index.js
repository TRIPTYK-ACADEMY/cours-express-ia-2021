exports.index = (req, res, _next) => {
  // process.cwd() fait référence au chemin complet jusqu'a votre application
  // res.sendFile(`${process.cwd()}/views/index.html`);
  res.render("index", {
    title: "Bienvenue dans l'index",
  });
};

exports.users = (req, res) => {
  // "users" correspond au template et  { users : [...] } correspond aux variables disponibles dans le template
  res.render("users", {
    users: [
      {
        name: "Amaury",
      },
      {
        name: "Gilles",
      },
      {
        name: "Sébastien",
      },
    ],
  });
};
