const mongoose = require('mongoose');
// MongoDB Connection

async function connectMongoDb(url) {
 return  mongoose.connect(url)
    }
    // .then(() => console.log("MongoDB Connected"))
    // .catch((err) => console.log("MongoDB Connection Failed", err));
module.exports = {
    connectMongoDb,
};