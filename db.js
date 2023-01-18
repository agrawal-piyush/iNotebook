const mongoose = require('mongoose')

const mongoURI ="mongodb://127.0.0.1:27017/iNotebook"

const connectToMongo =()=>{
    mongoose.connect(mongoURI,{
        useNewUrlParser: true,
        useUnifiedTopology: true},() => console.log("Database connected!"))
}

module.exports = connectToMongo