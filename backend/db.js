const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://amarnath:food12345@cluster0.wzjf6kb.mongodb.net/myfood?retryWrites=true&w=majority";
const connectToDb = async() =>{
    await mongoose.connect(mongoURI, {useNewUrlParser: true}).then(async()=>{
        console.log("Connected Successfully");
        const fetch_data = await mongoose.connection.db.collection("food_items");
        const data = await fetch_data.find({"CategoryName":"Pizza"});
        console.log(data);
    }).catch((err)=>{
        console.log(err);
    });
}
module.exports = connectToDb;

