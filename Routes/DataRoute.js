const express = require("express");
const route = express.Router();

const data = require("../models/DataModel");

/**
 * @method GET
 * @route ~/data
 * @description Get All Data
 * @access public
 */
route.get("/", async (req, res) => {
  const Data = await data.find().populate('userid');
  return res.send(Data);
});

/**
 * @method GET
 * @route ~/data/:id
 * @description Get Data By ID
 * @access public
 */
route.get("/:id", async (req, res) => {
  const { id } = req.params;
  const Data = await data.findById(id);
  return res.send(Data);
});

/**
 * @method POST
 * @route ~/data
 * @description Create Data
 * @access public
 */
route.post("/", async (req, res) => {
  const { firstname, lastname, telephone, age, country, gender, email,userid } =
    req.body;
  const datacreated = await data.create({
    firstname,
    lastname,
    telephone,
    age,
    country,
    gender,
    email,
    userid
  });
  
  return res.send(datacreated);
});

/**
 * @method Put
 * @route ~/data/:id
 * @description Update Data
 * @access public
 */
route.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { ...dat } = req.body;
  await data.findByIdAndUpdate(id, dat);
  return res.send("Data Updated,Sir 😼");
});

module.exports = route;
