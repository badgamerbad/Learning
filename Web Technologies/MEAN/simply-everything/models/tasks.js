const mongoose = require('mongoose');
const { Schema } = mongoose;

const tasksSchema = new Schema({
    name: String,
    type: Number,
    versionKey: false
})

mongoose.model('tasks', tasksSchema)