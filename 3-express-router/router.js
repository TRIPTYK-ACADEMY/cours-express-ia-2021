const express = require("express");

const router = express.Router();

function logging(req, res, next) {
  console.log(`L'utilisateur appelle la route `, req.url);
  next();
}

router.get("/", logging, (req, res) => {
  console.log("Etape d'après !");
  res.send("La chaine est finie ! ");
});

module.exports = router;
