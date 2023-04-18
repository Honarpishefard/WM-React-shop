const getPath = (url) =>
  require("path").join(__dirname, "..", ...url.split("/"));

module.exports = { getPath };
