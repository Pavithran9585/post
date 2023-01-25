const mongoose = require("mongoose");
const arraymodel = require("../models/arraymodel");
const filter = require("../models/arraymodel");
const usermodel = require("../models/usermodel");

const Array = (req, res) => {
    const Name = req.body.Name;
    const Array = req.file;



    // let newArray = [];//for assigning the result in this array
    // arrayfile.filter(val => { //val returns the array elements individually(i.e like if(i=o;i<=5,i++) where i returns iteration value everytime )
    //     //console.log(val.filename);
    //     if (val.filename !== File_Name) {
    //         newArray.push(val);
    // }..............



    const ArrayNew = [
        {
            CouponCode: 'LlOzfN',
            Created_On: '01-01-2022',
            Year: '2022'
        },
        {
            CouponCode: 'x8trBl',
            Created_On: '24-06-2022',
            Year: '2022'
        },
        {
            CouponCode: 'eiwVXo',
            Created_On: '12-07-2022',
            Year: '2022'
        },
        {
            CouponCode: 'uTWpzz',
            Created_On: '27-07-2022',
            Year: '2022'
        },
        {
            CouponCode: 'XTjY6k',
            Created_On: '30-08-2022',
            Year: '2022'
        },
        // {
        //     CouponCode: 'PAvi1D',
        //     Created_On: '19-01-2023',
        //     Year:'2023'
        // },
        {
            CouponCode: 'pVeeNz',
            Created_On: '18-09-2022',
            Year: '2022'
        },
        {
            CouponCode: 'PofnPr',
            Created_On: '15-10-2022',
            Year: '2022'
        },
        {
            CouponCode: 'gcxoCp',
            Created_On: '03-11-2022',
            Year: '2022'
        },
        {
            CouponCode: 'Cu6ThZ',
            Created_On: '19-12-2022',
            Year: '2022'
        },
        {
            CouponCode: 'buaP9D',
            Created_On: '05-01-2023',
            Year: '2023'
        },
        {
            CouponCode: 'buaP3V',
            Created_On: '07-01-2023',
            Year: '2023'
        },
        {
            CouponCode: 'Gu6ThA',
            Created_On: '010-01-2023',
            Year: '2023'
        },
        // expirationTime: {}
        //     type: String,
        //     required: true,
        // },
    ]
    const filterdata = ArrayNew.filter(user => user.Year.includes("2022"))
    var sampleArray = [];
    const mapingdata = ArrayNew.map(user => user.Year === 2022)
    // res.send({result:filterdata})
    res.send({ result: mapingdata })
}


// coupon validation by the date in 6 months

const CouponCodeArray = (req, res) => {
    const Name = req.body.Name;
    const Array = req.params.CouponCode
    console.log(Array)
    try {
        usermodel.findOne({ CouponCode: CouponCode }, function (err, result) {
            if (err) {
                res.send({ statusCode: 400, message: "failed 1 " });
            } else if (result === null) {
                res.send({ statusCode: 204, message: 'No Records invaild the coupon in the current month' });
            } else {
                res.send({ statusCode: 200, message: result });
            }
        })
    } catch (err) {
        res.send({ statusCode: 400, message: "failed 2 " });
    }
};






// const filterdata = ArrayNew.filter(user => user.Year.includes("2022"))
// var sample1Array = [];
// const mapingdata = ArrayNew.map(user => user.Year === 2022)
// //  res.send({result:filterdata})
// res.send({ result: mapingdata })

// const result = (marks >= 40) ?'pass' : 'fail';

// const marks = res.send({'Enter your marks :'});

// console.log(`You ${result} the exam.`);


function gfg() { 
        //  array.com 
const PMarks = 40
   const result = (PMarks > 39)?
       "Pass":"Fail";
// console.log(PMarks.round(38.5));
   console.log(result);
   } 
   gfg(); 







module.exports = {
    Array,
    CouponCodeArray
}