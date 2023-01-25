const mongoose =require("mongoose");
const UserSchema =new mongoose.Schema({
    CouponCode :{
        type :String,
    },
    Created_on :{
        type :String,
    },
    Year :{
        type :String,
    },
});
const collectionName='array'
module.exports = mongoose.model('array', UserSchema,collectionName);




// const filterdata = ArrayNew.filter(user => user.Year.includes("2022"))
// var sampleArray=[];
// const mapingdata =ArrayNew.map(user=>user.Year===2022)
// // res.send({result:filterdata})   
// res.send({result:mapingdata})



