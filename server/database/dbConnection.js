const mongoose = require('mongoose');

const databaseConnection = async() => {
    try {
        const uri = process.env.MONGODB_URI
        await mongoose.connect(uri)
        console.log("Mongo Database connected successfully")
    } catch (error) {
        console.log("Error in Connecting Database", error)
    }
}

module.exports = databaseConnection