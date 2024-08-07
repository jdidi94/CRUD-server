const mongoose = require("mongoose");
const User = require('./user'); // Adjust the path as needed
const Blog = require('./blog'); // Adjust the path as needed
mongoose.connect(process.env.database)
  .then(() => console.log("db is  connected"))
  .catch((err) => console.log(err));


module.exports ={User,Blog}