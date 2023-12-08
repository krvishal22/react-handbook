/*

const heading = React.createElement("h1", {}, "Hello from React");
this is core of react, it's not easy to write like this for creating react element so to ease that we have JSX

JSX :- JS Syntax which is easier to create react element and help u merge html and js
( that's why it's not part of react it's independent of it )
it's html like syntax

const heading = <h1> Hello World </h1>;
the above is not pure js and browser will not understand this and will throw syntax error 
if we try to run this code in browser

so who is converting this piece of code?
before this code goes to the browser it is transpilled  

Transpiled is managed by Parcel and the package which does the transpiled is Babel (JS Compiler or Transpiller)

JSX -> transpiled (means code understand by js engine) -> JS Engine

React.createElement => React Element => Object => after Render -> HTML Element
JSX -> React.createElement => React Element => Object => after Render -> HTML Element

if u have to give attribute to jsx u have to use camelCase
if there is more than one line wrap it inside () so that babel understand where jsx start and end

React Functional Component :- normal js function which return some jsx or js fn that return react element

for rendering:-

react element -> root.render(react element)
react component -> root.render(<ComponentName/>)

component composition :- putting component inside component





*/

