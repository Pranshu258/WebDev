var settings = {
    "url": "http://127.0.0.1:8000/getStudents",
    "method": "GET"
}

$.ajax(settings).done(function (response) {
    console.log(response)
    html = "<ul>"
    for (var i = 0; i < response.length; i++) {
        html += "<li>" + response[i]._id + "</li>" 
    }
    html += "</ul>"
    $("#stdlist").html(html)
})