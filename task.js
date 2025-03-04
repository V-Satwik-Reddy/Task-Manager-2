require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.mongouri);

const taskSchema = new mongoose.Schema({
    id: Number,
    title: String,
    description: String,
});


module.exports = mongoose.model("Task", taskSchema);
