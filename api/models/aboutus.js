const mongoose = require('mongoose');

const aboutusSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    aboutusheader: { type: String },
    aboutuspic: { type: String },
    aboutustext: { type: String }
});

module.exports = mongoose.model('Aboutus', aboutusSchema);