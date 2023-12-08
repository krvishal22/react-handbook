/*

1) What is Emmet?
Emmet is a plugin for many popular text editors which greatly improves HTML & CSS workflow.

Emmet uses different abbreviations and short expressions depending on what's passed, and then 
dynamically converts the abbreviations into the full code. Emmet is mostly used for HTML, XML, 
and CSS, but it can also be used with programming languages.


2) Framework vs Library?
A framework is a set of pre-written code that provides a structure for developing software 
applications. A library, on the other hand, is a collection of pre-written code that can be 
used to perform specific tasks.

A framework inverts the control of the program. It tells the developer what they need. 
A library doesn’t. The programmer calls the library where and when they need it.


3) What is CDN? Why do we use it?



4) Why React is known as React?
It "reacts" quickly to changes without reloading the whole page. It uses the virtual DOM to 
efficiently update parts of a webpage. It's built around components that "react" and update.

Good question! React got its name because it's all about "reacting" to changes in your 
application's state. Instead of manually updating the user interface when something changes, 
React automatically updates and re-renders the components for you. It's all about being 
responsive and reactive to the state of your app!


5) What is cross-origin in script tag?
CORS is a mechanism that allows servers to specify which origins are permitted to access their resources.

?OVERVIEW 

When you include a script tag in an HTML document to load a JavaScript file, the browser may enforce the 
? same-origin policy (security measure that restricts a web page from making requests to a different domain than the one that served the web page)
! This policy is in place to prevent potential security vulnerabilities, like Cross-Site Request Forgery (CSRF) and others.

If you try to load a script from a different domain (different origin), the browser may block the request due to the same-origin policy. 
However, there are ways to work around this restriction, and one common method is to use Cross-Origin Resource Sharing (CORS).

If the server hosting the script doesn't include the necessary CORS (Cross-Origin Resource Sharing) headers in its HTTP responses, 
the browser may prevent the script from being loaded. 

In summary, the absence of proper CORS headers on the server can lead to the browser blocking the loading of the script to ensure 
the security of cross-origin requests.


6) Difference between React and React DOM?
React is the core library for building user interfaces in a declarative and component-based way, 
while React DOM is a specific package that enables React to interact with the DOM in a web environment. 

If you were to use React in a different environment (like React Native for mobile apps), you'd use a different implementation specific to that platform.


7) Difference between react.dev.js and react.prod.js files via cdn?

When you include React via a CDN (Content Delivery Network), you might encounter two different files: react.dev.js and react.prod.js. These files serve 
different purposes, primarily related to development and production environment

react.dev.js:
    This file is intended for development purposes.
    It includes additional warnings, error messages, and debugging features to aid developers in identifying and fixing issues during development.
    It is larger in size compared to the production version because of the additional development-related code.

react.prod.js:
    This file is optimized for production use.
    It does not include the extra development warnings, debugging tools, and other features present in the development version.
    It is smaller in size, making it more suitable for production deployments where minimizing file size is essential for faster loading times.

When deploying a React application to production, it's recommended to use the react.prod.js file for better performance. During development, 
the react.dev.js file provides helpful tools for debugging and identifying issues. It's common practice to switch between these files based on the 
development or production environment.


8) What are async and defer?
async and defer are attributes used in HTML script tags, and they both affect how the browser loads and executes external JavaScript files.

async:
    When you include the async attribute in a script tag (<script async src="example.js"></script>), it tells the browser to download the script 
    asynchronously while continuing to parse the HTML.

    The script will be executed as soon as it is downloaded, even if the HTML parsing is not complete.

    Use async when the script does not depend on the order of execution or other scripts.

defer:
    When you include the defer attribute (<script defer src="example.js"></script>), it also allows the browser to download the script asynchronously, 
    but it defers the execution until the HTML parsing is complete.

    Multiple scripts with defer will be executed in the order they appear in the HTML.

    Use defer when the script order is important, and you want them to execute in the order they are specified in the HTML.

In summary, both async and defer allow scripts to be downloaded without blocking HTML parsing, but async executes the script as soon as it's downloaded, 
while defer waits until the HTML parsing is complete before executing the script, maintaining the order of multiple deferred scripts.


*/