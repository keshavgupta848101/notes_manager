const mongoose = require('mongoose');

const NotesData = mongoose.Schema({
    heading: String,
    notes: String,
    author:String
});

const notesInfo = mongoose.model('notesInfo', NotesData);

module.exports = notesInfo;