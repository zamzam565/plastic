const { model } = require("mongoose");
const itemsSchema = require("./schema");

//  create model
const ItemsModel = model("plasticItems", itemsSchema);

// module exports
module.exports = ItemsModel;
