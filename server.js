const express = require("express");
const { connectDB, appExpress } = require("./database");
const ItemModel = require("./database/model");
const cors = require("cors");
// start server
connectDB();

// Middleware
appExpress.use(express.static("./public/"));
appExpress.use(cors({ origin: "*" }));
appExpress.use(express.json({ limit: "50mb" }));

// routes //
// get router
appExpress.get("/getItems", async (req, res) => {
  try {
    // get all data
    const result = await ItemModel.find({});
    // requests respond
    res.status(200).send(result);
  } catch {
    // requests respond
    res.status(300).send([]);
  }
});

// get router
appExpress.get("/getItems/:_id", async (req, res) => {
  const params = req.params;
  try {
    // get all data
    const result = await ItemModel.findById({ _id: params["_id"] });
    // requests respond
    res.status(200).send(result);
  } catch {
    // requests respond
    res.status(300).send([]);
  }
});

// post router
appExpress.post("/addItems", async (req, res) => {
  // get requests data
  var data = req.body;

  // create new data
  const newData = new ItemModel(data);

  // data is save
  newData.save((err, doc) => {
    if (!err) {
      res.status(201).send({
        msg: "New Item Is Save Successfully",
        data_is_save: true,
        docResult: doc,
      });
    } else {
      res.status(201).send({
        msg: "Sorry, Failed To Save The New Data",
        data_is_save: false,
      });
    }
  });
});

// put router
appExpress.put("/updateItem", async (req, res) => {
  // get req data
  const data = req.body;

  ItemModel.findByIdAndUpdate({ _id: data["_id"] }, data, (err, doc) => {
    if (!err) {
      res.status(201).send({
        msg: "Data Update Seccessfully",
        data_is_save: true,
      });
    } else {
      res.status(201).send({
        msg: "Sorry, Failed To Update Item Data",
        data_is_save: false,
      });
    }
  });
});

// delete route
appExpress.delete("/itemDelete/:id", (req, res) => {
  // get id from the params
  const id = req.params.id;

  // remove the data
  ItemModel.findByIdAndDelete(id, (err, doc) => {
    if (!err) {
      res.status(200).send({
        msg: "item Delete Seccessfully",
        data_is_save: true,
      });
    } else {
      res.status(200).send({
        msg: "Sorry, Failed To Update Item Data",
        data_is_save: false,
      });
    }
  });
});
