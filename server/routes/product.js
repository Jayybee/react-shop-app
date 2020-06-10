const express = require("express");
const router = express.Router();
const { Product } = require("../models/Product");
const multer = require("multer");
const { auth } = require("../middleware/auth");

//MULTER 404 image not uploading
//saves file name and filter to uploads folder
var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}_${file.originalname}`);
  },
  fileFilter: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    if (ext !== ".jpg" || ext !== ".png") {
      return cb(res.status(400).end("only jpg, png are allowed"), false);
    }
    cb(null, true);
  },
});

var upload = multer({ storage: storage }).single("file");
//=================================
//            Product
//=================================

router.post("/uploadImage", auth, (req, res) => {
  //get image file
  //save to backend Node

  //Multer library status
  upload(req, res, (err) => {
    if (err) return res.json({ success: false, err });
    return res.json({
      success: true,
      image: res.req.file.path,
      fileName: res.req.file.filename,
    }); //send image && fileName to frontend
  });
});

router.post("/uploadProduct", auth, (req, res) => {
  //save product upload data from client-side into database

  const product = new Product(req.body);

  product.save((err, product) => {
    if (err) return res.status(400).json({ success: false, err });
    return res.status(200).json({ success: true });
  });
});

router.post("/getProducts", (req, res) => {
  //gets all avail product data

  let order = req.body.order ? req.body.order : "desc";
  let sortBy = req.body.sortBy ? req.body.sortBy : "_id";
  let limit = req.body.limit ? parseInt(req.body.limit) : 100;
  let skip = parseInt(req.body.skip);

  //adding the filiter conditions
  let findArgs = {};

  //Current setup for the size and price filter. console log to check later
  for (let key in req.body.filters) {
    if (req.body.filters[key].length > 0) {
      if (key === "price") {
      } else {
        findArgs[key] = req.body.filters[key];
      }
    }
  }

  Product.find(findArgs)
    .populate("writer")
    .sort([[sortBy, order]])
    .skip(skip)
    .limit(limit)
    .exec((err, products) => {
      if (err) return res.status(400).json({ success: false, err });
      res
        .status(200)
        .json({ success: true, products, postSize: products.length });
    });
});

module.exports = router;
