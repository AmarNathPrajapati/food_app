const mongoose  = require('mongoose');
const {Schema} = mongoose;
const foodCategorySchema= new Schema({
    CategoryName:{
        type:String,
        required:[true,'Category name is Required']
    }
})
module.exports = mongoose.model("food_category",foodCategorySchema)