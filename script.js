//In javascript we import library through CDN Link import..
//In React we use React-CDN -->https://legacy.reactjs.org/docs/cdn-links.html

//This is the library we use from laptop to browser calling...They have minified version also for production mode...
//<script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
//<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
///react and //reactDOM both can be used heavily -->createElement and createRoot in Console

//React.createElement  -->This is react Element
//ƒ createElementWithValidation(type, props, children) {
   // var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
    // succeed and there …

//we can pass type ,props means attribute also children means element whatever we write down like text.,div,etc 


//WE CAN MAKE MObile application using react-native
//document.createElement  //By default for javascript
// ƒ createElement() { [native code] } -->for javascript...Bydefault javscript code..




                             //type , props ,children
//const h2 = React.createElement('h2',{className: 'subheading'}, 'Hello React ')

//By using react-DOM we can show our page in browser

//console.dir(document.body)-->it give any element object body..class ki property className hai..
// document.body.className = "Hello" -->It is vanilla javascript create class on the body tag..
//h2 element on react are very simple on react...

// {$$typeof: Symbol(react.element), type: 'h2', key: null, ref: null, props: {…}, …}
// $$typeof : Symbol(react.element)
// key : null

// props  : children
// "Hello React "
// className :  "subheading"

// [[Prototype]]
// : 
// Object
// ref
// : 
// null
// type
// : 
// "h2"
// _owner
// : 
// null
// _store
// : 
// {validated: false}
// _self
// : 
// null
// _source
// : 
// null
// [[Prototype]]
// : 
// Object

import axios from 'axios'

axios.get('https://jsonplaceholder.typicode.com/todos/1')
.then((response) => {
    console.log(response.data);
})

//fetch('https://jsonplaceholder.typicode.com/todos/1').then(response => response.json()).then(json => console.log(json))

//We can make any terminal as node terminal by using node ...and contrl + c to came out from it

//setTimeout(() => {console.log('Hello-World')}, 2000)




