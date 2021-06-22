const fs = require("fs/promises");

module.exports = async function loggerMiddleware(req, res, next) {
  await fs.appendFile(
    "logs.txt",
    `[${new Date().toISOString()}] ${req.method} ${req.url}\n`
  );
  // on appelle le middleware suivant
  next();
};
