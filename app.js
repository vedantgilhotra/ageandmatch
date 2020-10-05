const express = require("express");
const router = express.Router();
const app = express();
const cors = require("cors");
const compression = require("compression");
const bodyParser = require("body-parser");
const logger = require("morgan");
const path = require("path");
const mainRoutes = require("./backend/routes/MainRoutes");

app.use(cors());
app.use(compression()); //Line2
app.use(bodyParser.urlencoded({ extended: true })); //Line3
app.use(bodyParser.json());

app.set("views", __dirname + "/client/views");

app.engine("html", require("ejs").renderFile);

app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "client/images/")));

app.use(logger("dev"));

app.use("/", mainRoutes.router);

app.set("port", process.env.PORT || 4000);

app.listen(app.get("port"), () => {
      //Line10
      console.log("Application running in port: " + app.get("port"));
    });
    
    module.exports = app;