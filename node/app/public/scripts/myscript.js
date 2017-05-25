$(document).ready(function () {
    var settings = {
        "url": "http://127.0.0.1:8000/getStudents",
        "method": "GET"
    }

    $.ajax(settings).done(function (response) {
        console.log(response)
        html = "<table class='table table-hover'>"
        html+= "<tr class='active'><th>Name</th><th>Age</th><th>ID</th></tr>"
        for (var i = 0; i < response.length; i++) {
            html += "<tr>"
            html += "<td>" + response[i].name + "</td>"
            html += "<td>" + response[i].age + "</td>"
            html += "<td>" + response[i]._id + "</td>"
            html += "</tr>"
        }
        html += "</table>"
        $("#stdlist").html(html)
    })

    $("form[name='createstd']").validate({
        rules: {
            name: "required",
            age: "required"
        },
        messages: {
            name: "Please enter the name",
            age: "Please enter the age"
        },
        submitHandler: function(form) {
            form.submit()
        }
    })

})