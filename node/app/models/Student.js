var mongoose = require('mongoose')

var schema = mongoose.Schema
var studentSchema = new schema({
    name: String,
    age: Number
})

var Student = mongoose.model('Student', studentSchema);

module.exports = Student

// String, Number, Date, Buffer, Boolean, Mixed, ObjectId, Array