const { Schema } = require("mongoose");

const itemsSchema = new Schema({
  item_num: { type: String, Default: "" },
  item_name: { type: String, Default: "" },
  item_size: { type: String, Default: "" },
  item_price: { type: String, Default: "" },
  item_stock_qty: { type: String, Default: "" },
  item_stock_price: { type: String, Default: "" },
  item_cat: { type: Schema.Types.Mixed, Default: [] },
  item_images: { type: Schema.Types.Mixed, Default: [] },
});

// module exports
module.exports = itemsSchema;
