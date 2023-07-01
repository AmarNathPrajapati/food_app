const mongoose = require('mongoose');
const mongoURI = "mongodb://127.0.0.1:27017/food_app";
const connectToDb = async() =>{
    await mongoose.connect(mongoURI, {useNewUrlParser: true}).then(async()=>{
        console.log("Connected Successfully");
    }).catch((err)=>{
        console.log(err);
    });
}
module.exports = connectToDb;

