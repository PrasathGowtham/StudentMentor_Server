const mongosse = require("mongoose");

db = async () => {

    try {
        await mongosse.connect(process.env.MONGO_URL)
        console.log("connection has created")
    }
    catch (err) {
        console.log('DB error', err)
    }
}

module.exports=db;