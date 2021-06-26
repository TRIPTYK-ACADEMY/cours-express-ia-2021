const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    title:String,
    done:Boolean
})

module.exports = mongoose.model("todo",schema);