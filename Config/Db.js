const mongoose = require("mongoose");

const URL = 'mongodb+srv://admin:9585702391@cluster0.6zo5oja.mongodb.net/postdatabase?retryWrites=true&w=majority'
mongoose.set('strictQuery', true);

mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error"));

db.once("open", function () {
  console.log(" DB Connected successfully");
});

