const mongoose = require('mongoose');

const menuSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    menuheader: { type: String },
    menupic1: { type: String },
    menupic2: { type: String },
    menupic3: { type: String },
    menupic4: { type: String }
});

module.exports = mongoose.model('Menu', menuSchema);