const express = require('express');
const multer = require('multer');


const db = require("./Config/Db");

const app = express();

const authRoute = require("./routes/auth");
app.use('/api', authRoute);
app.listen(3005, () => {

    console.log("server connected");
});
