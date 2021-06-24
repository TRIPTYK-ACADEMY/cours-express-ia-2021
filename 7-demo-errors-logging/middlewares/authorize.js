module.exports = function authorize(req, res, next) {
  if (req.query.username === "gilles" && req.query.password === "truc") {
    // on passe à la suite
    next();
  } else {
    // on déclenche une erreur
    next("Mauvais nom ou mot de passe");
  }
};
