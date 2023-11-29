const mongoose = require('mongoose')

const ConnectDatabase = async (url) => {
    console.log("called");
    return await mongoose.connect(url)
}

module.exports = ConnectDatabase