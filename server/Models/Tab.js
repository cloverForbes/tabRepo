const mongoose = require("mongoose");

const schema = mongoose.Schema({
    title: {type: String, required: true},
    composer: String,
    pdf: {data: Buffer, contentType: String}
})

module.exports = mongoose.model("Tab", schema)