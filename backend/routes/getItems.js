const express=require("express");
const router = express.Router()
const Items = require('../models/FoodItems')

router.get('/getitems',async(req,res)=>{
    try {
        //fetch data from database
        const data = await Items.find();
        res.send({
            status:true,
            message:'successfull fetch all categories.',
            itemsData   : data,
        })
    } catch (error) {
        res.status(500).json({
            "message":"Internal Server Error",
            'error' : err,
        })
    }
})
module.exports = router