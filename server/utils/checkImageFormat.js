const checkImageFormat = (data) =>
  data?.mimetype === "image/jpeg" ||
  data?.mimetype === "image/png" ||
  data?.mimetype === "image/jpg";

module.exports = { checkImageFormat };
