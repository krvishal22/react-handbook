import React from "react";
import ReactDOM from "react-dom/client";

// below written is not html inside js -> it's jsx -> html/xml like syntax not html to be precise
const heading = <h1> Hello World </h1>;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

// let's say data is coming from some api
const data = api.getData();

const MyFnComponent = () => {
  return (
    <>
      {data} {/* here we are just injecting what we getting from the api */}
      <p>hello</p>
    </>
  );
};

/*

what if in place of data some script will come js will to simply run it and that can be 
a case of Cross Site Scripting.

what is Cross Site Scripting ?
Cross Site Scripting (XSS) :- an attack in which an attacker injects malicious 
executable scripts into the code of a trusted application or website 


so can we write such thing in react?
It's not react it's JSX who took care of this injection attack
todo :- read in details how it is doing that.....

what all ways u can call a component 


return (
   ! <Component/>
   ? <Component> <Component/>
   ! {Component()}  wonder why? bcoz at the end it's just a js function
  )

*/
