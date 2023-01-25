const multer = require("multer");
const path = require("path");

const fileStorage = multer.diskStorage({
    destination: "image_files", //image_files is the folder name in local where the images are stored
    filename: (req, file, callback) => {
        callback(null, file.fieldname + '_' + Date.now() + path.extname(file.originalname));
    }
});

module.exports = multer({

    storage: fileStorage,
    limits: {
        fileSize: 1000000
    },
    fileFilter: (req, file, callback) => {
        let ext = path.extname(file.originalname);

        if (ext !== ".jpeg" && ext !== ".jpg" && ext !== ".png" && ext !== ".webp" && ext !== ".svg" && ext !== ".jfif") {
            callback(new Error("Unsupported file format"), false);
            return;
        }
        callback(null, true);
    },


});