const { createUser } = require("../validations/users");

module.exports = async function validate(req, res, next) {
  // j'éxécute chaque validation et attends la fin de leur éxécution
  const result = await Promise.all(
    createUser.map((validation) => validation.run(req))
  );

  // on va stocker toutes les erreurs de notre validation dedans
  const errors = [];

  // j'itère sur le résultat de chaque validation
  for (const validationResult of result) {
    // je vérifie si il y a eu des erreurs
    if (validationResult.errors.length) {
      const firstError = validationResult.errors[0];
      errors.push(
        // on ajoute dans le tableau d'erreurs, la première erreur et son message
        `Le champ ${firstError.param} est invalide : ${firstError.msg}`
      );
    }
  }

  if (errors.length) {
    next(errors);
    return;
  }

  // si il n'y a pas eu d'erreur, on passe à la suite, tranquilou bilou
  return next();
};
