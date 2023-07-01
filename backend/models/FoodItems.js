// "CategoryName": "Biryani/Rice",
//         "name": "Chicken Fried Rice",
//         "img": "https://images.unsplash.com/photo-1603133872878-684f208fb84b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2hpY2tlbiUyMGZyaWVkJTIwcmljZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
//         "options": [
//             {
//                 "half": "130",
//                 "full": "220"
//             }
//         ],
//         "description": "Made using Indian masalas and Basmati rice. Barbequed pieces of Paneer/Chicken/Mutton were added."

const mongoose = require('mongoose');
const {Schema} = mongoose
const FoodItemSchema = new Schema({
    CategoryName:{
        type:String,
        required : true
    },
    name:{
        type:String,
        required : true
    },
    img:{
        type:String,
        required : true
    },
    options:[
        {
            half:{
                type:Number,
                default:"null"
                },
            full:{
                type: Number,
                default :"null"
                }
        }
    ],
    description:{
        type: String,
        required:true
    }
})
module.exports = mongoose.model("food_items",FoodItemSchema)