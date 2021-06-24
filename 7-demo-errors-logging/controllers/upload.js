exports.upload = (req, res, next) => {
  // multer crée un req.file dans votre requête et vous pouvez ensuite accéder aux informatons du fichier
  console.log("fichier uploadé ! ", req.file);
  res.send("Document uplaodé ! ");
};
