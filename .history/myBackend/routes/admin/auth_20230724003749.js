const express = require("express");
const router = express.Router();
const Admin = require("../../Models/admin/Admin");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");
var fetchAdmin = require("../../middleware/admin/fetchAdmin");

const JWT_SECRET = process.env.PWD_JWT;


router.post("/createAdmin", [
    body("email", "Enter Valid Email").isEmail(),
    body("name", "Enter Your Name").isLength({ min: 3 }),
    body("phone", "Enter Your Phone").isLength({ min:  10 }),
    body("password", "PassWord Must be 5 Lenght").isLength({ min: 5 }),
  ])



module.exports = router;