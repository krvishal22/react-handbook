/* 

BASIC OVERVIEW:-

? CDNs (provide us the react feature by accessing the url where this library has been hosted)
? CDNs are distributed networks of servers strategically placed around the world to deliver web content efficiently.

? using cdn is not a good practice (costly operation, it will do a network call )
? as version update it's not easy to handle in case of cdn

! The most expensive operation that the browser hit is the DOM Manipulation (change in the dom tree)

const heading = React.createElement("h1", {}, "Hello from React");


what {} refers to?
that's the attribute tag like { id: "heading", xyz: "abc"}

React.createElement(type, attribute, children) -> 
when we use React.createElement -> it create a react object
React.createElement => React Element => Object => after Render -> HTML Element

root.render(heading);
render method is taking the js object and converting it in html 


create this 
<div id="parent">
  <div id="child">
    <h1>Hello</h1>
  </div>
</div>

React.createElement(
    "div",
    {id:"parent"},
    React.createElement(
        "div",
        {id:"child"},
        React.createElement(
            "h1",{},"Hello"
        )
    )
)
if there is siblings then in that case third parameter will be an array.
React.createElement(
    "h1", {}, [
        React.createElement("h1",{},"Hello"),
        React.createElement("h1",{},"Hello")
        ]
    );


! the more nested it go it will be complicated to write that's why we have JSX
JSX :- ()

*/

