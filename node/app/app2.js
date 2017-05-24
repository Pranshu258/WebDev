var express = require('express')
var mongoose = require('mongoose')
var path = require('path')
var Student = require('./models/Student')

var app = express()
mongoose.connect('mongodb://127.0.0.1:27017');

app.use(express.static('public'))

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/public/index.html'))
})

app.get('/createStudent', function (req, res) {
    var std = new Student({
        name: "John",
        age: Math.round(20*Math.random() + 3)
    })
    std.save(function (err) {
        if (err) {
            throw err
            res.end(err)
        } else {
            console.log("student saved successfully!! ID: " + std.id)
            res.end("student saved successfully!! ID: " + std.id)
        }
    })
})

app.get('/getStudents', function (req, res) {
    res.setHeader('Content-Type', 'application/json')
    Student.find({}, function (err, students) {
        if (err) {
            throw err
            res.end(err)
        } else {
            console.log(students)
            res.end(JSON.stringify(students))
        }
    })
})

app.get('/searchStudent', function (req, res) {
    res.setHeader('Content-Type', 'application/json')
    var sname = req.query.name
    Student.find({name: sname}, function (err, students) {
        if (err) {
            throw err
            res.end(err)
        } else {
            console.log(students)
            res.end(JSON.stringify(students))
        }
    })    
})

app.get('/updateStudent', function (req, res) {
    var id = req.query.id
    var newname = req.query.newname
    Student.find({_id: id}, function (err, students) {
        if (err) {
            throw err
            res.end(err)
        } else {
            if (students.length === 1) {
                res.write("Found Student: " + JSON.stringify(students))
                students[0].name = newname
                students[0].save(function (err) {
                    if (err) {
                        throw err
                        console.log("Could not update student! ID: " + id)
                        res.end("Could not update student! ID: " + id)
                    } else {
                        console.log("updated student! ID: " + id)
                        res.end("\nUpdated Student: " + JSON.stringify(students))
                    }
                })
            } else {
                res.end("No Such Student")
            }
        }
    }) 
})

app.get('/deleteStudent', function (req, res) {
    var id = req.query.id
    Student.find({_id:id}, function (err, students) {
        if (err) {
            throw err
            console.log(err)
            res.end(err)
        } else {
            console.log(students)
            res.write("Removing Students: " + JSON.stringify(students))
            if (students.length === 1) {
                students[0].remove(function (err) {
                    if (err) {
                        throw err
                        console.log(err)
                        res.end("An error occured" + err)
                    } else {
                        res.end("\nRemoved!!!")
                    }
                })
            }
        }
    })
})

app.listen(8000, function () {
    console.log('App listening on port 8000!')
})