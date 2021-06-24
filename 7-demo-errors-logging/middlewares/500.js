// middleware d'erreur

module.exports = function errorMiddleware(err, req, res, next) {
  res.status(500);
  res.render("error", {
    error: err,
  });
};
