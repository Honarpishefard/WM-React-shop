const express = require("express");
const server = express();
const mongoose = require("mongoose");
const appRootPath = require("app-root-path");
const cors = require("cors");

require("dotenv").config({
  path: appRootPath + "/config/env/.env",
});

const PORT = process.env.PORT;
server.listen(PORT, () => console.log(`server is running on port: ${PORT}`));
mongoose.connect(process.env.MONGODB_ADDRESS).then(console.log("DB connected"));

server.use(cors());
server.use(express.json({ extended: false }));
server.use(express.urlencoded({ extended: true }));
server.use("/api", require("./routes").router);
server.use("/statics", express.static(appRootPath + "/public"));
server.use("/api/cardDetails", require("./middlewares/authenticator").authenticator);