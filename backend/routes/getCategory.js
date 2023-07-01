const express = require("express");
const router  = express.Router()
const Category = require('../models/FoodCategory')
//basically we will send data to the frontend.
router.get('/getcategory',async(req,res)=>{
    try {
        //fetch data from database
        const data = await Category.find();
        res.send({
            status:true,
            message:'successfull fetch all categories.',
            CategoryData   : data,
        })
    } catch (error) {
        res.status(500).json({
            "message":"Internal Server Error",
            'error' : err,
        })
    }
})
module.exports=router;