// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();



// using javascript method

// var h1=document.createElement("h1");
// h1.innerHTML="Lovely Professional University";
// document.getElementById('root').appendChild(h1);


//using jsx method

//ReactDOM.render(<h1>Lovely Professional University</h1>,document.getElementById("root"));

import Navigation from './Navigation';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import reportWebVitals from './reportWebVitals';

import {Add,sub,Mul,Div} from './Calculator';
import HelloWorld from './HelloWorld';
import Card from './card';
import Table from './Table';
import Color from './Color';
import Hooks from './Hooks';
import Athletes from './Athletes';
// import Counter from './useRef';
import Stopwatch from './useRef';
import Refheight from './useRef';
import FocusInput from './useRef';
import VideoPlayer from './useRef';
import Counter from './Hooks';
import TodoApp from './Hooks';
import Addform from './Hooks';
import FetchDataComponent from './Hooks';
import PostDataComponent from './Hooks';
import PutDataComponent from './Hooks';
import DeleteDataComponent from './Hooks';
import Axios from './Hooks';



//import UseCotext from './UseCotext';
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {
    // <Navigation/>
    //<Card/>
    //<HelloWorld/>
    //<App/>
    //<Table/>
    //<Color/> 
    //<Hooks/> 
    //<UseCotext/> 
    //<Athletes/>
    //<Counter/>
    //<Stopwatch/>
    //<Refheight/>
    //<FocusInput/>
    //<VideoPlayer/>
   //<Counter/>
   //<Addform/>
   //<FetchDataComponent/>
   //<PostDataComponent/>
   //<PutDataComponent/>
   //<DeleteDataComponent/>
   <Axios/>
    
   
    
    }
  
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();



// JSX attributes

// const name = "Lovely Professional University";
// const img1 = "https://dummyimage.com/640x480"
// ReactDOM.render(
//   <>
//   <h1 ContentEditable = "true">  {name} </h1>
//   <img src = {img1}/>
//   </>,
//   document.getElementById("root")
// )
 





