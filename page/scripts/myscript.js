$(document).ready(
    function () {

        $(".row").click(
            function () {
                $("img").hide()
            }
        )

        $.getJSON(
            "http://en.wikipedia.org/w/api.php?action=parse&format=json&callback=?", 
            {
                page:"india", 
                prop:"text"
            }, 
            function (data) {
                console.log(data)
                $("#p1").html(data.parse.text["*"])
            }
        )

        $("p").hover(
            function () {
                console.log("entered p")
            },
            function(){
                console.log("out of p")
            }
        )

        $("h1").on({
            mouseenter: function(){
                $(this).css("background-color", "lightgray")
            }, 
            mouseleave: function(){
                $(this).css("background-color", "lightblue")
            }, 
            click: function(){
                $(this).css("background-color", "yellow")
            } 
        })


    }
)

//dblclick, mouseenter, mouseleave, mousedown, mouseup, hover, on
// fadeIn()
// fadeOut()
// fadeToggle()
// fadeTo()
// slideDown()
// slideUp()
// slideToggle()
//.text(), .html(), .val(), .attr()
// append(), prepend(), after(), before()