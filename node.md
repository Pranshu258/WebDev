[Previous: JavaScript](JavaScript.md)

# Introduction to NodeJS
Pranshu Gupta

NodeJS is a platform built upon Google Chrome's JavaScript engine V8. It can be used to build scalable network applications. It uses an event-driven, asynchronous, non-blocking, I/O based model which makes it suitable to create real time applications. NodeJS comes with NPM, the Node Package Manager, which is the largest ecosystem of open source libraries in the world.

To install NodeJS, go to the following link: https://nodejs.org/en/

To install from command line in linux simply type: `sudo apt install nodejs`

## Creating Your First NodeJS App
NodeJS comes with in-build HTTP module which can be used to create a server that can accept HTTP requests and send appropriate responses to the client. The following code is a simple example for creating a nodejs server:

    // include the http module of node
    const http = require('http')

    // declare the hostname and port for the server to run
    const hostname = '127.0.0.1'
    const port = 8000

    // create the server here, createServer function takes a function, that will send responses to the client
    const server = http.createServer(
        function (req, res) {
            // req object contains info about the request that the client made
            // res object is the response that is sent to the client by the server
            res.statusCode = 200        // set status code
            res.setHeader('Content-Type', 'text/plain')         // set a header
            res.write('Hello World\n')             // write the content for the response
            res.end()                             // end the response
        }
    )

    // start the server
    server.listen(port, hostname, function () {
        console.log("Server running at http://" + hostname + ":" + port)
    })

In the previous example, the server we created can be accessed at the address "http://127.0.0.1:8000" from the browser as well as command line. We might want to show different content at different URLs on our server. For example: we might want to show "Hello World" at "http://127.0.0.1:8000" and "Node is Fun" at "http://127.0.0.1:8000/node". For that we can look at the URL that the user wants to access in the request object. See the following code:

    const server = http.createServer(
        function (req, res) {
            if (req.url == "/") {
                res.statusCode = 200        // set status code
                res.setHeader('Content-Type', 'text/plain')         // set a header
                res.write('Hello World\n')             // write the content for the response
                res.end()         
            } else if (req.url == "/node") {
                res.statusCode = 200        // set status code
                res.setHeader('Content-Type', 'text/plain')         // set a header
                res.write('Node is Fun\n')             // write the content for the response
                res.end()         
            }
        }
    )

We can also send other kind of responses e.g. "404 - PAGE NOT FOUND". To do so:

    res.statusCode = 404        // set status code
    res.setHeader('Content-Type', 'text/plain')         // set a header
    res.write('Page Not Found\n')             // write the content for the response
    res.end()

This is all good, if we just want to serve text content to the client. What if we want to serve HTML content. In that case, we can do the following:

    res.statusCode = 200        // set status code
    res.setHeader('Content-Type', 'text/html')         // set a header for content-type
    res.write('<h1>Hello World</h1>')             // write the html content for the response
    res.end() 

## ExpressJS
Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. In the previous examples we explicitly checked for the URLs requested by the client and created the responses accordingly using IF-ELSE blocks. In the previous example, if there was an "img" element in the HTML content, the browser will make another request for the image. We must handle that request as well in the IF-ELSE block as per the URL of that image (which will be the location of the image file on our server). This becomes very ugly as soon as we start including script files, images, css files etc in our HTML. 

Express helps us to automatically serve these static files, without us explicitly writing code for them. We just need to specify where these static files are kept and Express will automatically serve them to the client. We can then send HTML in our responses. But to be able to use express, we must first install it. To install any node package we use NPM. NPM allows us to maintain the list of all the packages that our application uses along with other information like the name, description, author and other info in file (package.json). We can either write this file ourselves or we can generate it using the command `npm init` (use this command in the folder in which you will be creating the app). NPM will ask you to enter some details like the name of your app, the main server script file etc. Here is a simple package.json file:

    {
      "name": "app",
      "version": "1.0.0",
      "description": "nodeapp",
      "main": "app.js",
      "author": "pranshug",
      "license": "ISC"
    }

Now, to install express in your app use the following command:

    npm install express --save

The `--save` ensures that the dependency of our app on express package is recorded in the package.json file.

    {
      "name": "app",
      "version": "1.0.0",
      "description": "nodeapp",
      "main": "app.js",
      "author": "pranshug258",
      "license": "ISC",
      "dependencies": {
        "express": "^4.15.3"
      }
    }

Now, if we ever loose the package file, or we are running the app on a different machine we simply use the command `npm install` which will install all the dependencies of our app. Now in the same folder we did `npm init`, we create the main server script file "app.js". We also create a folder there and put all the static files we want to use in it. The directory structure should like this:

    App_Folder/
        node_modules/
        public/
            bootstrap/
            images/
            scripts/
            stylesheets/
            index.html
            second_page.html
            third_page.html
        app.js
        package.json

Creating a web app using express is very simple. See the following example:

    // import the express module
    var express = require('express')
    // import the path module
    var path = require('path')
    // create an express app (server)
    var app = express()
    // specify the folder in which the static files are kept
    app.use(express.static('public'));

    // serve static HTML files for different URLs
    app.get('/', function (req, res) {
        // express needs us to provide absolute paths for the static files
        // __dirname variable tells the directory in which the app was created
        res.sendFile(path.join(__dirname + '/public/index.html'));
    })
    app.get('/anotherpage', function(req, res) {
        // the file second_page.html will be served when the user types "http://127.0.0.1/anotherpage" in the browser
        res.sendFile(path.join(__dirname + '/public/second_page.html'));
    });
    app.get('/onemore', function(req, res) {
        // the file third_page.html will be served when the user types "http://127.0.0.1/onemore" in the browser
        res.sendFile(path.join(__dirname + '/public/third_page.html'));
    });

    // start the server
    app.listen(8000, function () {
        console.log('App listening on port 8000!')
    })

