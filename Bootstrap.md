[Previous: GitHub Pages](GitHub_Pages.md)

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

If we had not used the container, we would get something like this:

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

To make the navbar responsive, we add a button to the navbar-header which will appear when the screen size is small. We add classes to the list of the links in navbar so that they collapse when there is not enough space and are visible only when the user clicks on the menu button.

    <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#mynavlinks" aria-expanded="false">
            <span class="sr-only">Toggle navigation</span>
            Menu
        </button>
        <a class="navbar-brand" href="#">Pranshu</a>
    </div>

We need to put the unordered list of links of the navabr in a div element and add the classes `navbar-collapse` and `collapse` to that div. The code should look like this:

    <div class="collapse navbar-collapse" id="mynavlinks">
        <ul class="nav navbar-nav navbar-right">
            <li><a href="#">Link 1</a></li>
            <li><a href="#">Link 2</a></li>
            <li><a href="#">Link 3</a></li>
        </ul>
    </div>

So, the complete code for the navbar will be:

    <nav class="navbar navbar-default">
        <div class="container">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#mynavlinks" aria-expanded="false">
                    <span class="sr-only">Toggle navigation</span>
                    Menu
                </button>
                <a class="navbar-brand" href="#">Pranshu</a>
            </div>
            <div class="collapse navbar-collapse" id="mynavlinks">
                <ul class="nav navbar-nav navbar-right">
                    <li><a href="#">Link 1</a></li>
                    <li><a href="#">Link 2</a></li>
                    <li><a href="#">Link 3</a></li>
                </ul>
            </div>
        </div>
    </nav>

## Carousel
A Carousel is a slideshow of images. To create a carousel using Bootstrap, we create a div with carousel class. We add another class 'slide' to this div. Bootstrap defines the sliding animation in this class. The carousel has three componenets - the indicators, the images and the left-right controls. The indicators are ordered list of elements that point to one of the images in the carousel. This is done by the 'data-slide-to' attribute. The data-target attribute of the indicators points to the id of the carousel's outermost div, this tells the indicators which carousel to operate on (suppose we had two carousels on the same page).

The content of the carousel are enclosed in a div with class 'carousel-inner'. In this div, for each slide we have a div with class 'item' which contains the HTML for the image and other content like captions etc. 

    <div id="myCarousel" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            <li data-target="#myCarousel" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
            <div class="item active">
                <img class="img-responsive" src="images/img1.jpg">
                <!-- You can add more content here (captions etc), to do so, create a div here and add the class 'carousel-caption' to it -->
            </div>
            <div class="item">
                <img class="img-responsive" src="images/img2.jpg">
                <!-- You can add more content here (captions etc), to do so, create a div here and add the class 'carousel-caption' to it -->
            </div>
            <div class="item">
                <img class="img-responsive" src="images/img3.jpg">
                <!-- You can add more content here (captions etc), to do so, create a div here and add the class 'carousel-caption' to it -->
            </div>
        </div>
        <a class="left carousel-control" href="#myCarousel" data-slide="prev">
            <span class="glyphicon glyphicon-chevron-left"></span>
        </a>
        <a class="right carousel-control" href="#myCarousel" data-slide="next">
            <span class="glyphicon glyphicon-chevron-right"></span>
        </a>
    </div>

An example for a carousel item with caption will be:

    <div class="item">
        <img src="chicago.jpg" alt="Chicago">
        <div class="carousel-caption">
            <h3>Chicago</h3>
            <p>Thank you, Chicago!</p>
        </div>
    </div>

The left right controls are hyperlinks with class 'carousel-control' and refer to the id of the carousel's outermost div.

<!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
<!-- Latest compiled and minified JavaScript -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>

<div id="myCarousel" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
        <li data-target="#myCarousel" data-slide-to="1"></li>
        <li data-target="#myCarousel" data-slide-to="2"></li>
    </ol>
    <div class="carousel-inner">
        <div class="item active">
            <img class="img-responsive" src="page/images/img1.jpg">
        </div>
        <div class="item">
            <img class="img-responsive" src="page/images/img2.jpg">
        </div>
        <div class="item">
            <img class="img-responsive" src="page/images/img3.jpg">
        </div>
    </div>
    <a class="left carousel-control" href="#myCarousel" data-slide="prev">
        <span class="glyphicon glyphicon-chevron-left"></span>
    </a>
    <a class="right carousel-control" href="#myCarousel" data-slide="next">
        <span class="glyphicon glyphicon-chevron-right"></span>
    </a>
</div>