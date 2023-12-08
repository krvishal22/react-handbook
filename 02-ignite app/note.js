/*

npm :- it's a package manager but it doesn't stand for node package manager
package.json :- configuration for npm, keep track of what version of package is install in our application
package-lock.json :- keeps the track of exact versions of the dependency
node modules :- contains all the code that we fetch from npm

bundler :- bundles ur app so that it can be push to production
for bundling we can use Parcel, Webpack 

npm i -D parcel
"parcel" : "^2.8.3" to < 3.0.0 -> update u to all future minor/patch versions, w/o incrementing the major version
"parcel" : "~2.8.3" to < 2.9.0 -> update u to all future patch versions, w/o incrementing the minor version

^ (caret) :- Approximately equivalent to version
~ (tilde) :- Compatible with version

while installing parcel many other package can also be seen in node modules
that's trasitive dependency as parcel also need some package to complete the task and so on....


there are 2 types of dependency 
    dev dependency :- required while development
    dependency :- used everywhere not just while development but also in prod

npx parcel index.html :- building our app using parcel
where index.html -> source file 

npx means executing a package ( npx package-name ........ )
but if its a script then u can write npm [run] script_name (run is optional here but while building u have to put run also)

now instead of cdn if we install react and react-dom package and add import statement still we gonna get error stating
@parcel/transformer-js: Browser scripts cannot have imports or exports :- add type="module"

Parcel ( read parcel official documentation once and one line for each )
    -> created local server for u
    -> created dev build for u
    -> HMR (Hot Module Refreshment) :- on saving it automatically refreshes ur page
       it done with the help of File Watching Algorithm written in c++
    -> faster build with the help of caching ( .parcel-cache )
    -> Image Optimisation
    -> Minification
    -> Bundling
    -> Compress
    -> Consistent Hashing
    -> Diagnostics
    -> Tree Shaking Algorithm :- remove unsed code for u
    -> Differential Bundling :- to support older browsers
    -> Different dev and prod bundle  ( to make our life easy we write script that handle which build needs to be made )
    
Now how to support older version
for that we already have browserList (accepts an array) in our node modules

we need to add in package.json 
"browserList": [
    "last 2 Chrome version",
    "last 2 Firefox version"
  ]
  this means it will definately works in this 2 version as mentioned and may 
  or may not work on edge older version since not mentioned




*/