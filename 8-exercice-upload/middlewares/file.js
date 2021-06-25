const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // la destination où le fichier sera stocké
    cb(null, "public/uploads");
  },
  filename: (req, file, cb) => {
    // le nom du fichier stocké
    cb(null, `${Date.now()}_${file.originalname}`);
  },
});

// on retourne une instance de multer qui va sauvegarder les fichiers uploadés sur le disque dur
module.exports = multer({ storage });
