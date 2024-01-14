/*

<div style={{color: "red"}}>Hello</div>
! why 2 {{}} ?
? The reason is inside jsx when we write js we need to have 1 {} and the other 
{} is bcoz this style takes an object as an value that's why we have {{}}.


Props:-
It is a short form for properties which we can pass to the component.

<MyComponent name={name} place="Bangalore" />
at the end props are just argument to the fn (since component at the end is a js fn)

Config Driven UI (Your UI is driven by the config) :- 
Controlling ur UI that is how ur application gonna look based on data.
Eg - Swiggy might have different offer based on different state and may be no offer in some state so we can't make 
different application for different state.

why we have to add in key while mapping?
so that it can uniquely identifies and doesn't re-render everything.

index as the key (2nd property of map):-
reacts itself say don't use index as a  key


*/
