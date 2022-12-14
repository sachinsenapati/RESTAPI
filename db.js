require("dotenv").config()
const mongoose = require("mongoose");
module.exports = () => {
  const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };
  try {
    mongoose.connect(
      process.env.DB,connectionParams
    );
    console.log("sucesssfully connected to databse");
  } catch (error) {
    console.log(error);
  }
};
