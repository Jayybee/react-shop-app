const express = require("express");
const router = express.Router();
const { User } = require("../models/User");
const multer = require("multer");
const { auth } = require("../middleware/auth");

//need to import multer 3839
//=================================
//            Product
//=================================

router.get("/uploadImage", auth, (req, res) => {
  //get image file
  //save to backend Node
});

module.exports = router;
