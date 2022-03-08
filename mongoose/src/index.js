const routes = require("./routes");
const express = require("express");
const mongoose = require("mongoose"); // new
const { dbUrl } = require("./config");

// Conexion con la Base de Datos de Mongo
mongoose.connect(dbUrl).then(() => {
  const app = express();
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use("/tiendaMangas", routes);

  app.listen(3000, () => {
    console.log("Server has started!");
  });
});
