const appExpress = require("express")();
const { connect } = require("mongoose");
require("dotenv").config();

const connectDB = () => {
  connect(process.env.MONGO_URL)
    .then(() =>
      appExpress.listen(process.env.PORT || 3001, () =>
        console.log(
          `Server Connect to DataBase Seccessfully, Server Listen On Port ${
            process.env.PORT || 3001
          }`
        )
      )
    )
    .catch(() => console.log("Sorry, Failed To Connect To The DB"));
};

module.exports = { connectDB, appExpress };
