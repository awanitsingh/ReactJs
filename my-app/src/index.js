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
import reportWebVitals from './reportWebVitals';

import {Add,sub,Mul,Div} from './Calculator';
import HelloWorld from './HelloWorld';
import Card from './card';
import Table from './Table';
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navigation/>
    <Card/>
    <HelloWorld/>
    <App/>
    <Table/>
    {
      <>
    <li>{Add(2,4)}</li>
    <li>{sub(2,4)}</li>
    <li>{Mul(2,4)}</li>
    <li>{Div(2,4)}</li>
      </>
    }
  </React.StrictMode>
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
 
