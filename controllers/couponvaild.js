
const mongoose = require("mongoose");
const ArrayImageModel = require("../models/arraymodel")
const moment = require("moment");
const { arrayString } = require("./arrayimage");
const { validate } = require("../models/arraymodel");

const couponvaild = (req, res) => {
  //const date_and_year = req.params.couponcode

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
  ]
  // console.log(coupon)
  // const date = require('date_and-year')
  // const static date,invaild(now,currentdate)
  try {
    ArrayNew.map((check) => {
      console.log(check.CouponCode,check.Created_On)   
    
    
    // var date1 = new Date("01-10-2022");
    // var date2 = new Date("24-01-2023");
    // var diffDays = parseInt((date2 - date1) - (1000 * 60 * 60 * 24)); //gives day difference
    const current_date = new Date();
    const today_date = moment(current_date).format("DD-MM-YYYY");//get current date
    // const c_date = current_date.getDate();
     console.log(today_date)
     const Created_On =new Date();
     const coupon_date = moment(Created_On).format("DD-MM-YYYY");
     console.log(coupon_date); 
      

    })

    //  const testCases = [ 
    //  new Date().toLocaleDateString('en-US', {year: 'numeric', month: '2-digit', day: '2-digit'}),
    // ]

    // for (const testData of testCases) {   
    //   console.log(testData)
      
    // }
    
    
  } catch (err) {
    res.send({ statusCode: 400, message: "Failed" });
  }
};


module.exports = {
  couponvaild
}


