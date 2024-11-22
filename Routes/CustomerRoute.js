const express = require("express");
const route = express.Router();
const User = require("../models/CustomerModel");
// const path = require("path")
// const multer = require("multer")

/**
 * @method GET
 * @route ~/user
 * @description Get All User
 * @access public
 */
route.get("/", async (req, res) => {
  const user = await User.find();
 return res.send(user);
});

/**
 * @method POST
 * @route ~/user/signin
 * @description Registeration
 * @access public
 */
route.post("/signin", async (req, res) => {
  const { username, email, password } = req.body;
  const user = await User.findOne({ email, username });
  if (!user) {
    const usercreated = await User.create({ username, email, password });
  return res.send(usercreated);
  }
 return res.send("user already exits");
});

/**
 * @method POST
 * @route ~/user/login
 * @description  login User
 * @access public
 */
route.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email, password });
  if (!user) {
  return  res.send("User Not found");
  }
 return res.send(user);
});

/**
 * @method GET
 * @route ~/user/:id
 * @description Get User By ID
 * @access public
 */
route.get("/:id", async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id);
 return res.send(user);
});

module.exports = route;

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, path.join(__dirname, "../images"));
//   },
//   filename: function (req, file, cb) {
//     cb(null, new Date().toISOString().replace(/:/g,"-")+file.originalname);
//   },
// });
// const upload = multer({storage})
// route.post("/",upload.single('img'), (req, res) => {
//     res.status(200).json({message:"Done✅"})
// })
