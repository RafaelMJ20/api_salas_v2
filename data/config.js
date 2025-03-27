const mongoose = require("mongoose");
const connectDB = async ()=>{
    const URL = "mongodb://admin:password@localhost:27017/";
    try {
        await mongoose.connect(URL);
        console.log("Database Running");
    } catch (error) {
        console.error("Cant connect to database");
        console.error(error)        
    }
}
module.exports = {connectDB};