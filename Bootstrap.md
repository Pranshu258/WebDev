[Previous: GitHub Pages](Bootstrap.md)

# More on Twitter Bootstrap
Pranshu Gupta

To include Bootstrap in your page, insert the follwing lines in the head element of your HTML page. Because Bootstrap's Javascript requires jQuery, we need to include that before bootstrap.js.

    <link href="path to bootstrap.css file" rel="stylesheet">
    <script src="path to the jQuery file"></script>
    <script src="path to bootstrap.js file"></script>

To download jQuery, visit the page: https://code.jquery.com/jquery-3.2.1.min.js
To download Bootstrap, visit: https://github.com/twbs/bootstrap/releases/download/v3.3.7/bootstrap-3.3.7-dist.zip
Bootstrap will be downloaded as .zip file extract it and put it in the same folder where you have your HTML file.

Your HTML will look something like this:

    <!DOCTYPE html>
        <head>
            <title> My Home Page </title>
            <link href="bootstrap/css/bootstrap.css" rel="stylesheet">
            <script src="scripts/jquery-3.2.1.min.js"></script>
            <script src="bootstrap/js/bootstrap.js"></script>
        </head>
        <body>
            <h1>Hi, My name is Pranshu Gupta</h1>
            <p>This is my homepage</p>
        </body>
    </html>

## Container
The bootstrap container class is a container for the rows in grid layout in the same way the row class is the container for columns. The following code will properly align the heading and the paragraph with suitable padding and margin.

        <body>
            <div class="conatiner">
                <div class="row">
                    <h1>Hi, My name is Pranshu Gupta</h1>
                    <p>This is my homepage</p>
                </div>
            </div>
        </body>

![with container](images/container.png)

![without container](images/nocontainer.png)

## Navigation Bar
We can put the important links on our page at the top for easier navigation in form of a navbar. 

![navbar](images/navbar.png)

Use the following code to add a navbar:

    <nav class="navbar navbar-default">
        <div class="container">
            <div class="navbar-header">
                <a class="navbar-brand" href="#">BRAND</a>
            </div>
            <ul class="nav navbar-nav navbar-right">
                <li><a href="#">Link 1</a></li>
                <li><a href="#">Link 2</a></li>
                <li><a href="#">Link 3</a></li>
            </ul>
        </div>
    </nav>

This will add a navbar with default bootstrap styling. We have addded three links in the navbar to the extreme right. To keep the links in the left remove the class `navbar-right` from the unordered list of the link.

    <ul class="nav navbar-nav">

Bootstrap also provides another styling in the class `navbar-inverse`. If we use `navbar-inverse` instead of `navbar-default` we get the following look:

![inversenavbar](images/inversenavbar.png)

## Dropdown Menus


## Carousel


## Modal

