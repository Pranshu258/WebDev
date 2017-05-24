var mongoose = require('mongoose')

var schema = mongoose.Schema
var studentSchema = new schema({
    name: String,
    age: Number
})

var Student = mongoose.model('Student', studentSchema);

module.exports = Student

// String, Number, Date, Buffer, Boolean, Mixed, ObjectId, Array

// mongoose.connect('mongodb://localhost:27017');
// var std = new Student({
//     name: "John",
//     age: 25
// })

// std.save(function (err) {
//     if (err) {
//         console.log("An error occured: " + err)
//     } else {
//         console.log("The document was saved!")
//     }
// })