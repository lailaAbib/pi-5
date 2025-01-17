const express = require("express");
const http = require("http");

require("./src/database/indexDb.js");

const app = express();

app.use(express.json());

const userRoutes = require("./src/api/routes/userRoutes");
const publicationRoutes = require("./src/api/routes/publicationRoutes");

app.use(userRoutes);
app.use(publicationRoutes);

app.set("url", "http://localhost:");
app.set("port", 3000);

http.createServer(app).listen(app.get("port"), function () {
  console.log(
    "Servidor rodando na porta: " + app.get("url") + app.get("port")
  );
});

module.exports = app;
