module.exports = function notFoundMiddleware(req, res, next) {
  res.status(404); // on indique le code HTTP de la réponse
  res.send("NOT FOUND");
};
