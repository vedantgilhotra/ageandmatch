const maincontroller = require("../controllers/Maincontroller");
const logincontroller = require("../controllers/LoginController");
const express = require("express");
const app = express();
const router = express.Router();

router.route("/").get(maincontroller.home);

router. route("/signup").get(maincontroller.signup);

router.route("/profile").get(maincontroller.profile);

router.route("/signup").post(logincontroller.enterandmatch);

module.exports  = {
    router: router
};