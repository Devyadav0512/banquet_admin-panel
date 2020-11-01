const mongoose = require('mongoose');

const homeSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    homepic: { type: String },
    hometext: { type: String },
    homebutton: { type: String }
});

module.exports = mongoose.model('Home', homeSchema);