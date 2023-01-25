const express = require("express");
// const cors = require('cors');


const app = express();

// app.use(express.static(__dirname));
// app.use(express.static('public'));

const router = express.Router();
app.use(router);
router.use(express.json());
const upload = require("../multer/multer");
// app.use(cors());
const { createusers } = require("../controllers/usercontoller");
const { Getusers } = require("../controllers/usercontoller");
const { UpdateUser } = require("../controllers/usercontoller");
const { DeleteUser } = require("../controllers/usercontoller");
const { imgData } = require("../controllers/upload");
const { moreimage } = require("../controllers/upload");
const { Array } = require("../controllers/array");
const { imge } = require("../controllers/arrayimage");
const { arrayString } = require("../controllers/arrayimage");
const {couponvaild} = require("../controllers/couponvaild");


router.post("/user/create", createusers);
router.get("/list/:email", Getusers);
router.put("/Update/:id", UpdateUser);
router.delete("/Delete/:id", DeleteUser);
router.post('/img', upload.single('coffee'), imgData);
router.post('/new', upload.array('Image'), moreimage);
router.get("/get/:number", Array);
router.post("/hello", upload.array('Image'), imge);
router.post("/well", arrayString);
router.get("/code",couponvaild);
module.exports = router;
