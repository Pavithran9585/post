const mongoose = require("mongoose");
const ImageModel = require("../models/imgmodel");

//post method for image
const imgData = (req, res) => {
    // const Name = req.body.Name;
    const Image = req.file;//we use this file in auth upload
    //  console.log(Image); 
    ``
    try {

        if (Image) {
            //   for checking name and image
            const Newimage = new ImageModel({
                //    Name: "sample",
                Image: Image,
            }); 
            console.log(Newimage);

            Newimage.save(function (err, result) {
                if (err) {
                    res.send({ statusCode: 400, message: "Failed", err });
                } else {
                    res.send({ statusCode: 200, message: "Uploaded successfully" });
                }
            })
        }
        else {
            res.send({ statusCode: 400, message: "Please give name and file" });
        }
    } catch (err) {  
        res.send({ statuscode: 400, message: "Failed1", err });
    }
}


// // multi image
// const moreimage = multer({
//     storage: multerStorage,
//     fileFilter: multerFilter
//   });
// const moreimage = upload.file("images", 10); // limit to 10 images

// const moreimage = (req, res, next) => {
//   moreimage(req, res, err => {
//     if (err instanceof multer.MulterError) { // A Multer error occurred when uploading.
//       if (err.code === "LIMIT_UNEXPECTED_FILE") { // Too many images exceeding the allowed limit
//         // ...
//       }
//     } else if (err) {
//       // handle other errors
//     }

//     // Everything is ok. 
//     next();
//   });
// };





// multi imager store in files formatted


// var moreimage = (req, res) => {
//     // const Name = req.body.Name;
//     var images = req.file;//we use this file in auth upload
//     // console.log(req.files);

//     try {
//     // if ( Image) {

//     const addNewArrayImage = new imgmodel({
//         // Name: Name,
//         Image: Image,
//     });
//    // console.log(ImageFile);
// addNewArray.save(function(err,result){
//     console.log(result);
//     // if(err){
//     //     res.send({ statusCode:400,message:"failed",err});
//     // }else{
//     //     res.send({statusCode:200,message:"uploaded successfully"}); nama epdi devloper aga mudium any idea for us
//     // }
// })

// //    else {
// // res.send({ statusCode: 400, message: "Please give name and file" }); 
// // }
// }catch (err) {
// res.send({ statuscode: 400, message: "Failed2", err });
// }
// }


//     try {
//         //if (TypeStatus === 'pic') {
//             // var Image = upload(req.files({(filedname["product_Tmage"],maxcount:"10")}));
//             // // moreimage.findOneAndUpdate({ Type: Type }, {
//             //     $set: {
//             //         Type_Image: Image
//             //     },

//             //  function (err) {
//             //     if (err) {
//             //         res.send({ statusCode: 400, message: "Failed" });
//             //     } else {
//             //         res.send({ statusCode: 200, message: "Updated Successfully" });
//             //     }
//             // };
//         } else {
//             // var Image = upload.upload(req.files['SubType_Image'].path, { width: 640, height: 426, crop: "scale", format: 'webp' });
//             // CakeTypeModel.findOne({ Type: Type }, function (err, result) {
//             if (err) {
//                 res.send({ statusCode: 400, message: "Failed" });
//             } else {
//                 let Array = result.SubType
//                 let Index = Array.findIndex(val => val.Name === SubType);
//                 Array[Index].SubType_Image = Image.url
//                 CakeTypeModel.findOneAndUpdate(
//                     { Type: Type },
//                     {
//                         $set: {
//                             SubType: Array
//                         }
//                     },
//                     function (err) {
//                         if (err) {
//                             res.send({ statusCode: 400, message: "Failed" });
//                         } else {
//                             res.send({ statusCode: 200, message: "Updated Successfully" });
//                         }
//                     }
//                 )
//             }
//             // });
//         }
//     } catch (err) {
//         res.send({ statusCode: 400, message: "Failed" });
//     }
// };


// try {
//  if (Image) {
//   for checking name and image
//  const Newimage = new ImagesModel({
//     //    Name: "sample",
//      Image: Image,
//      });
//      console.log(Newimage);

//     Newimage.save(function (err, result) {
//         if (err) {
//             res.send({ statusCode: 400, message: "Failed",err });
//         } else {
//             res.send({ statusCode: 200, message: "Uploaded successfully" });
//         }
//  })
// }   
// else {
//     res.send({ statusCode: 400, message: "Please give name and file" });
// }
// } catch (err) {
// res.send({ statuscode: 400, message: "Failed2",err });
// }









const moreimage = (req, res) => {
    const Image = req.files;
    //  console.log(Images);
    try {

        const addNewImage = new ImageModel({
            Image: Image,

        });
        console.log(addNewImage)
        addNewImage.save(function (err, result) {
            if (err) {
                res.send({ statusCode: 400, mesage: "Failed" });
            } else {
                res.send({ statusCode: 200, message: "Uploaded Successfully" });
            }
        })
        // }
        // else {
        //     res.send({ statusCode: 400, message: "Please give name and file" });
        // }
    } catch (err) {
        res.send({ statusCode: 400, message: "Failed" });
    };
};

module.exports = {
    imgData,
    moreimage
}














