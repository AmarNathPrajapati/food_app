const express = require('express')
const router = express.Router();
const Category = require('../models/FoodCategory')
//post api call
router.post('/addcategory',
    async(req,res)=>{
        try {
            await Category.create({
                CategoryName : req.body.CategoryName
            })
            res.send({'success':true})
        } catch (err) {
            res.status(500).json({
                "message":"Internal Server Error",
                'error' : err,
            })
        }
    }
)
module.exports = router