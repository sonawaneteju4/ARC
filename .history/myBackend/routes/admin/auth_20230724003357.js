const express = require("express");
const router = express.Router();
const Admin = require("../../Models/admin/Admin");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");
var fetchAdmin = require("../../middleware/admin/fetchAdmin");

const JWT_SECRET = process.env.PWD_JWT;

req