

// arrayt of image

const mongoose = require("mongoose");
const ImageModel = require("../models/imgmodel");
const ArrayImageModel = require("../models/arrayimagemodel")

const imge = (req, res) => {
    // const Name = req.body?.Name;

    const ImageFile = req.files;
    console.log(ImageFile)
     try {
        if (ImageFile) {
            let tempdat = ImageFile.map(el => {
                return {     
                    filename: el.filename,
                    size: el.size,
                    mimetype: el.mimetype
                }
            })
            console.log(req.files)
            const addNewArrayImage = new ArrayImageModel({
                Image: tempdat,
            });

            addNewArrayImage.save(function (err, result) {
                if (err) {
                    res.send({ statusCode: 400, mesage: "2" });
                } else {
                }
            })
        }
        else {
            res.send({ statusCode: 400, message: "Please give name and file" });
        }
    } catch (err) {
        res.send({ statusCode: 400, message: "1" });
    };
};  // console.log(Name);  
// console.log(ImageFile); 
//  Create,update and delete array of string elements





const arrayString = (req, res) => {
    const Name = req.body.Name;
    // console.log(Name)

    try {

        const addNewArrayString = new ArrayImageModel({
            code: code,
        });

        addNewArrayString.save(function (err, result) {
            if (err) {
                res.send({ statusCode: 400, message: "Failed 1" });
            } else {
                res.send({ statusCode: 200, message: "Added Successfully" });
            }
        });

    } catch (err) {
        res.send({ statusCode: 400, message: "Failed 2" });
    };
};



module.exports = {
    imge,
     arrayString
}





