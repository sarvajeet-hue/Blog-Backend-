const mongoose = require("mongoose")
require("dotenv").config();

const ConnectWithDB = () => {
    mongoose.connect(process.env.DATABASE_URL , {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("db connection successfully")
    })
    .catch((error)=>{
        console.log("Issue hai connection me")
        console.log(error)
        process.exit(1);
    })


}

module.exports = ConnectWithDB;