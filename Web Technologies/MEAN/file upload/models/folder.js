const mongoose = require('mongoose');
const { Schema } = mongoose;

const folderSchema = new Schema({
    powers: [],
    name: String,
    versionKey: false
});

mongoose.model('folders', folderSchema);