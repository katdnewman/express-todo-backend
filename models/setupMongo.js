const mongoose = require("mongoose");

//const uri = "mongodb+srv://admin:HaTrlOuUrnrmZ1rQ@cluster0.qeg4a.mongodb.net/blogAppInClass?retryWrites=true&w=majority";
const uri = process.env.DB_URI;

function connect() {
  const options = { useNewUrlParser:true };
  mongoose.connect(uri, options).then(
    () => { console.log("Database connection established!"); },
    err => { console.log("Error connecting Database instance due to: ", err); }
  )}

module.exports = connect
