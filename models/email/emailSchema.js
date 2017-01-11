var mongoose = require('mongoose');
var Email = new mongoose.Schema({
    content: mongoose.Schema.Types.Mixed,
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Email', Email);
