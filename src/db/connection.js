const mongoose = require('mongoose');

module.exports = async() => {
    console.log("Process.env.Db_url is ",process.env.DB_URL);
    try{
        await mongoose.connect(process.env.DB_URL,{
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
            useUnifiedTopology: true
        });
        console.log("Connected to db");
    }catch(error){
       console.log("Database Connectivity Error ",error);
       throw new Error(error);
    }
}