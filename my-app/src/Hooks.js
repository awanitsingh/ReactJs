// import { useState,useEffect } from "react";
// import ReactDOM from "react-dom/client";
// export default function Timer(){
//     const [count,setCount] = useState(0);

//     useEffect(() => {
//         setTimeout(() => {

//         setCount((count) => count + 1);
//         }, 1000);
//     }, []);
//     return <h1>I have rendered {count} times!</h1>;
// }

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Timer/>);






// import React, { useState, useEffect } from "react";

// const UE  = () => {
//     const [message , setMessage] = useState('Hi there, How are you');
//     useEffect(() => {
//         console.log('useEffect triggered');
//         const timer = setTimeout(() => {
//             setMessage("I'm fine, thanks for asking");
//         },1000);

//         //Cleanup Function
//         return () => clearTimeout(timer);
//         },[]);
//         return <h1>{message}</h1>;
//     };
//     export default UE;






// import React, { useState, useEffect } from "react";

// const DataFetchingComponent = () => {
//     const [data,setData] = useState(null);
//     const [loading,setLoading] = useState(true);

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await fetch('https://api.agify.io?name=brijesh');
//                 const result = await response.json();
//                 setData(result);
//                 setLoading(false);
//                 } catch (error) {
//                     console.error("Error fetching data",error);
//                     setLoading(false);

//                 }

//         };  

//         fetchData();
//     },[]);
//     if (loading) {
//         return <p>Loading...</p>;
//     }

//     return (
//         <div>
//             <h1>Fetched Data: </h1>
//             <ul>
//             <li>Name: {data.name}</li>
//             <li>Age: {data.age}</li>
//             <li>Gender: {data.gender}</li>
//             </ul>
//         </div>
//     );
//     };

//     export default DataFetchingComponent;
    





//Zoom in and Zoom out effect from an api

// import React, { useState, useEffect } from "react";

// const ZoomEffectComponent = () => {
//     const [zoomLevel, setZoomLevel] = useState(1);
//     const [image, setImage] = useState(null);

//     useEffect(() => {
//         const fetchImage = async () => {
//             try {
//                 const response = await fetch('https://picsum.photos/200/300');
//                 setImage(response.url);
//             } catch (error) {
//                 console.error("Error fetching image", error);
//             }
//         };

//         fetchImage();
//     }, []);

//     const handleZoomIn = () => {
//         setZoomLevel(zoomLevel + 0.1);
//     };

//     const handleZoomOut = () => {
//         setZoomLevel(zoomLevel - 0.1);
//     };

//     return (
//         <div>
//             {image && (
//                 <img
//                     src={image}
//                     alt="Zoomable Image"
//                     style={{
//                         transform: `scale(${zoomLevel})`,
//                         transition: "transform 0.2s ease-in-out",
//                     }}
//                 />
//             )}
//             <button onClick={handleZoomIn}>Zoom In</button>
//             <button onClick={handleZoomOut}>Zoom Out</button>
//         </div>
//     );
// };

// export default ZoomEffectComponent;






//UseContext example

// import React, { createContext, useContext, useState } from "react";

// const ThemeContext = createContext();

// function TC() {
//     const [theme, setTheme] = useState('Light');

//     const toggleTheme = () => {
//         setTheme((prevTheme) => (prevTheme === 'Light' ? 'Dark' : 'Light'));
//     };

//     return (
//         <ThemeContext.Provider value={{ theme, toggleTheme }}>
//             <Toolbar />
//         </ThemeContext.Provider>
//     );
// }

// function Toolbar() {
//     return (
//         <div>
//             <ThemedButton />
//         </div>
//     );
// }

// function ThemedButton() {
//     const { theme, toggleTheme } = useContext(ThemeContext);

//     return (
//         <button 
//             onClick={toggleTheme}
//             style={{
//                 background: theme === 'Light' ? '#fff' : '#333',
//                 color: theme === 'Light' ? '#000' : '#fff'
//             }}
//         >
//             Toggle Theme
//         </button>
//     );
// }

// export default TC;





// import { createContext, useContext, useState } from "react";

// const ThemeContext = createContext(null);
// const CurrentUserContext = createContext(null);

// export default function MyApp() {
//     const [theme, setTheme] = useState('light');
//     const [currentUser, setCurrentUser] = useState(null);

//     return (
//         <ThemeContext.Provider value={theme}>
//             <CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
//                 <WelcomePanel1 />
//                 <label>
//                     <input
//                         type="checkbox"
//                         checked={theme === 'dark'}
//                         onChange={(e) => {
//                             setTheme(e.target.checked ? 'dark' : 'light');
//                         }}
//                     />
//                     Use Dark Mode
//                 </label>
//             </CurrentUserContext.Provider>
//         </ThemeContext.Provider>
//     );
// }

// function WelcomePanel1() {
//     const { currentUser } = useContext(CurrentUserContext);
//     return (
//         <Panel title="Welcome">
//             {currentUser !== null ? <Greeting /> : <LoginForm />}
//         </Panel>
//     );
// }

// function LoginForm() {
//     const { setCurrentUser } = useContext(CurrentUserContext);
//     const [firstName, setFirstName] = useState('');
//     const [lastName, setLastName] = useState('');
//     const canLogin = firstName.trim() !== '' && lastName.trim() !== '';

//     return (
//         <>
//             <label>
//                 First name{': '}
//                 <input
//                     required
//                     value={firstName}
//                     onChange={(e) => setFirstName(e.target.value)}
//                 />
//             </label>
//             <label>
//                 Last name{': '}
//                 <input
//                     required
//                     value={lastName}
//                     onChange={(e) => setLastName(e.target.value)}
//                 />
//             </label>
//             <button
//                 disabled={!canLogin}
//                 onClick={() => {
//                     setCurrentUser({
//                         name: `${firstName} ${lastName}`,
//                     });
//                 }}
//             >
//                 Log in
//             </button>
//             {!canLogin && <i>Please enter both first and last name.</i>}
//         </>
//     );
// }

// function Panel({ title, children }) {
//     return (
//         <div>
//             <h1>{title}</h1>
//             {children}
//         </div>
//     );
// }

// function Greeting() {
//     const { currentUser } = useContext(CurrentUserContext);
//     return <p>Welcome back, {currentUser.name}!</p>;
// }


     

// import react, { useReducer } from "react";
// const initialState = { count: 0 };

// function reducer(state,action) {
//     switch(action.type) {
//     case 'increment':
//         return { count: state.count+1};
//         case 'decrement':
//             return { count: state.count-1};
//             default:
//                 throw new Error();
// }
// }

// function Counter() {
//     const [state, dispatch] = useReducer(reducer, initialState);

//     return (
//         <div>
//             <p>Count: {state.count}</p>
//             <button onClick={() => dispatch({type: 'decrement'})}>-</button>
//             <button onClick={() => dispatch({type: 'increment'})}>+</button>
//             </div>
//     );
// }

// export default Counter;



import React,{useReducer} from 'react';
const initialState=[];

function reducer(state, action){
    switch(action.type){
        case 'add':
            return [...state,{id:Date.now(),text:action.text}];
        case 'remove':
            return state.filter(todo=>todo.id!==action.id);
        default:
            throw new Error();
            
    }
}

    function TodoApp(){
        const [state, dispatch]=useReducer(reducer,initialState);
        const [text,setText]=React.useState('');
        return(
            <div>
                <form onSubmit={e=>{
                    e.preventDefault();
                    dispatch({type:'add',text});
                    setText('');
                }}>
                <input value= {text} onChange={e=>setText(e.target.value)}/>
                <button type='submit'>Add Todo</button>
                </form>
            <ul>
                {state.map(todo=>(
                    <li key={todo.id}>
                        {todo.text}
                        <button onClick={()=> dispatch({type:'remove', id:todo.id})}>Remove</button>
                    </li>
                ))}
            </ul>
            </div>
        );
    }
export default TodoApp;
