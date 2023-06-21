const express = require("express");
const router = express.Router();

const { register, login, update, deleteUser, getUsers } = require("../controllers/auth.controller.js");
const { getStripeCustomers } = require("../controllers/payment.controller.js");
const { admin } = require("../middleware/auth");

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/deleteUser").delete(deleteUser);
router.route("/getUsers").get(getUsers);

module.exports = router;
