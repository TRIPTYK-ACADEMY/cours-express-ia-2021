const { body } = require("express-validator");

/**
 * La validation pour la création de l'utilisateur, on renvoie un tableau avec plusieurs "chaînes" de validation
 *  withMessage permet d'indiquer le message d'erreur
 */
exports.createUser = [
  body("lastName")
    .notEmpty()
    .withMessage("Le prénom ne peut être vide")
    .isLength({ min: 5 })
    .withMessage("Le prénom est trop court")
    .isString()
    .withMessage("Le prénom doit être une chaine de caractères"),
  body("firstName").notEmpty().isLength({ min: 4 }).isString(),
];

exports.registerUser = [
  body("login")
  .notEmpty()
  .withMessage("Le login ne peut être vide")
  .isLength({ min: 5 })
  .withMessage("Le login est trop court")
  .isString()
  .withMessage("Le login doit être une chaine de caractères"),
  body("password")
  .notEmpty()
  .withMessage("Le login ne peut être vide"),
  body("repassword").custom((value, {req})=>{
    if (value !== req.body.password){
      throw new Error('Les mots de passe ne sont pas identiques !!')
    }
    return true;
  })
]
