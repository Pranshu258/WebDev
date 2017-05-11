[Previous: Contents](README.md)

# Introduction to Web Development
Pranshu Gupta

## The Internet
The Internet is a network of networks of computers all over the world. It is an infrastructure that allows any two computers connected to the internet to communicate and share information with each other under some set of rules or protocols. HTTP, FTP, SMTP, IMAP etc are some of the protocols used on the internet.

[Wikipedia Article: Internet](https://en.wikipedia.org/wiki/Internet)

## The World Wide Web
The World Wide Web is an information sharing model built on top of the internet. It is an information space which houses a huge collection of interlinked documents that can be accessed via the internet under HTTP.
Each document on the internet has an address which is required to locate it on the network, this address is called URL (Uniform Resource Locator).
These documents can also have other associated resources such as videos, images etc. The language used to create these documents is called HTML.

The World Wide Web is not synonymous to the internet, it is a part of the internet - a big part. Internet also contains other things like Email, FTP (File Transfer Protocol), DNS (Domain Name Service), TLS (Transport Layer Security) and other services, 

[Wikipedia Article: WWW](https://en.wikipedia.org/wiki/World_Wide_Web)

## Hyper Text Transfer Protocol
HTTP is a protocol which allows the fetching of resources such as HTML documents over the internet. In a typical scenario, the web browser acts as the user-agent and sends requests for a HTML document hosted by some server. The server is a computer connected to the internet which handles the request and sends a response to the user-agent. The browser then parses this response and generates the view for the user. This may involve further requests to fetch images and other multimedia files embedded in the document.

We can use the Developer Tools provided in browsers to see all the HTTP requests that were made by the browser when we visit some website. To open developer tools in Google Chrome press Ctrl+Shift+J. The following image shows the requests made when fetching the page at https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview

![Chrome Network Tab](images/networktab.png)

+ HTTP is simple, HTTP messages can be read and understood by humans. This allows easier testing and development.
    
    GET www.google.co.in HTTP/1.1

+ HTTP is extensible, new HTTP headers can be easily created to support additional features. HTTP headers allow the client and the server to pass additional information with the request or the response. 

    [MDN Article: HTTP Headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers)

+ HTTP is stateless, i.e. two successive requests on the same connection are completely independent of each other. But there are many applications that need state maintenance across requests, such as adding items to  shopping carts on e-commerce websites. Adding each item sends a new request, but because HTTP is stateless, we can not remember which items have already been added to the cart. Header extensions allow us to store HTTP cookies in the browser, these cookies contain context related data and can be read and modified by the browser to maintain state across requests.

## Hyper Text Markup Language


## Web Development

[Next: Github Pages](GitHub_Pages.md)