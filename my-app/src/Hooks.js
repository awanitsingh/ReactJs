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





// import React,{useReducer} from 'react';
// const initialState=[];

// function reducer(state, action){
//     switch(action.type){
//         case 'add':
//             return [...state,{id:Date.now(),text:action.text}];
//         case 'remove':
//             return state.filter(todo=>todo.id!==action.id);
//         default:
//             throw new Error();
            
//     }
// }

//     function TodoApp(){
//         const [state, dispatch]=useReducer(reducer,initialState);
//         const [text,setText]=React.useState('');
//         return(
//             <div>
//                 <form onSubmit={e=>{
//                     e.preventDefault();
//                     dispatch({type:'add',text});
//                     setText('');
//                 }}>
//                 <input value= {text} onChange={e=>setText(e.target.value)}/>
//                 <button type='submit'>Add Todo</button>
//                 </form>
//             <ul>
//                 {state.map(todo=>(
//                     <li key={todo.id}>
//                         {todo.text}
//                         <button onClick={()=> dispatch({type:'remove', id:todo.id})}>Remove</button>
//                     </li>
//                 ))}
//             </ul>
//             </div>
//         );
//     }
// export default TodoApp;




//  import {useState, useref } from 'react';
//  export default function Addform() {
//     const [name,setName] = useState("")
//     const handleSubmit = (event) => {
//         event.preventDefault();
//         alert(`The entered name is ${name}`)
//     }
//     return (
//         <form onSubmit={handleSubmit}>
//             <label>
//                Enter Your Name:
//                 <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
//                 </label>
//                 <input type='submit'></input>
//                 </form>
//     )
//  }





// import { useState } from "react";

// export default function Addform() {
//   const [inputs, setInputs] = useState({});

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setInputs((values) => ({ ...values, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert(JSON.stringify(inputs));
//   };

//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <label>Name: </label>
//         <input
//           type="text"
//           name="username"
//           value={inputs.username || ""}
//           onChange={handleChange}
//         />
//         <br />

//         <label>Age: </label>
//         <input
//           type="number"
//           name="age"
//           value={inputs.age || ""}
//           onChange={handleChange}
//         />
//         <br />

//         <label>Discuss about yourself: </label>
//         <textarea
//           name="describe"
//           value={inputs.describe || ""}
//           onChange={handleChange}
//         />
//         <br />

//         <label>Select item: </label>
//         <select
//           name="cars"
//           value={inputs.cars || ""}
//           onChange={handleChange}
//         >
//           <option value="Ford">Ford</option>
//           <option value="Toyota">Toyota</option>
//           <option value="Volvo">Volvo</option>
//         </select>
//         <br />

//         <input type="submit" />
//       </form>
//     </>
//   );
// }




// import React, { useEffect, useState } from 'react'

// function FetchDataComponent() {
//     const [data, setData] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         fetch('https://jsonplaceholder.typicode.com/todos')
//         .then(res => {
//             if(!res.ok) {
//                 throw new Error("network response is not ok");
//             }
//             return res.json();
//         })
//         .then(data => {
//             setData(data);
//             setLoading(false);
//         })
//         .catch(err => {
//             setError(err);
//             setLoading(false);
//         })
//     }, []);

//     if(loading) return <p>Loading...</p>
//     if(error) return <p>Error: {error.message}</p>
//   return (
//     <div>
//         <h1>Fetched Data</h1>
//         <pre>{JSON.stringify(data, null, 2)}</pre>
//     </div>
//   )
// }

// export default FetchDataComponent






// import React, { useState } from 'react';

// function PostDataComponent() {
//     const [responseData, setResponseData] = useState(null);
//     const [error, setError] = useState(null);

//     const postData = async () => {
//         try {
//             const response = await fetch('https://jsonplaceholder.typicode.com/todos'm, {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify({ key: 'value' })
//             });
//             if (!response.ok) {
//                 throw new Error(`Error: ${response.status} ${response.statusText}`);
//             }
//             const data = await response.json();
//             setResponseData(data);
//         } catch (err) {
//             setError(err.message);
//         }
//     };

//     return (
//         <div>
//             <h2>Post Data Component</h2>
//             <button onClick={postData}>Post Data</button>
//             {responseData && <div>Response: {JSON.stringify(responseData)}</div>}
//             {error && <div>Error: {error}</div>}
//         </div>
//     );
// }

// export default PostDataComponent;







// import React, { useState } from 'react';

// function PutDataComponent() {
//     const [responseData, setResponseData] = useState(null);
//     const [error, setError] = useState(null);

//     const putData = async () => {
//         try {
//             const response = await fetch('https://jsonplaceholder.typicode.com/todos/1', {
//                 method: 'PUT',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify({ key: 'new value' })
//             });
//             if (!response.ok) {
//                 throw new Error(`Error: ${response.status} ${response.statusText}`);
//             }
//             const data = await response.json();
//             setResponseData(data);
//         } catch (err) {
//             setError(err.message);
//         }
//     };

//     return (
//         <div>
//             <h2>Put Data Component</h2>
//             <button onClick={putData}>Put Data</button>
//             {responseData && <div>Response: {JSON.stringify(responseData)}</div>}
//             {error && <div>Error: {error}</div>}
//         </div>
//     );
// }

// export default PutDataComponent;





// import React, { useState } from 'react';

// function DeleteDataComponent() {
//     const [responseData, setResponseData] = useState(null);
//     const [error, setError] = useState(null);

//     const deleteData = async () => {
//         try {
//             const response = await fetch('https://jsonplaceholder.typicode.com/todos/1', {
//                 method: 'DELETE',
//             });
//             console.log('Response status:', response.status);

//             if (!response.ok) {
//                 throw new Error(`Error: ${response.status} ${response.statusText}`);
//             }

//             const data = await response.json().catch(() => ({})); // Handles cases with no JSON response
//             console.log('Response data:', data);
//             setResponseData(data);
//         } catch (err) {
//             console.error('Fetch error:', err);
//             setError(err.message);
//         }
//     };

//     return (
//         <div>
//             <h2>Delete Data</h2>
//             <button onClick={deleteData}>Delete Data</button>
//             {responseData && <div>Response: {JSON.stringify(responseData)}</div>}
//             {error && <div>Error: {error}</div>}
//         </div>
//     );
// }

// export default DeleteDataComponent;





// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// function Axios() {
//     const [data, setData] = useState([]);
//     const [postData, setPostData] = useState({ title: '', body: '' });
//     const [updateData, setUpdateData] = useState({ id: '', title: '', body: '' });
//     const [deleteId, setDeleteId] = useState('');

//     useEffect(() => {
//         // GET Request
//         axios.get('https://jsonplaceholder.typicode.com/posts')
//             .then((res) => {
//                 setData(res.data);
//             })
//             .catch((err) => {
//                 console.error('There was an error fetching the data!', err);
//             });
//     }, []);

//     const handlePost = () => {
//         // POST Request
//         axios.post('https://jsonplaceholder.typicode.com/posts', postData)
//             .then((res) => {
//                 console.log('Post response:', res.data);
//                 setData([...data, res.data]); // Add new data to current data
//             })
//             .catch((err) => {
//                 console.error('There is an error in handling post data!', err);
//             });
//     };

//     const handleUpdate = () => {
//         // PUT Request
//         axios.put(`https://jsonplaceholder.typicode.com/posts/${updateData.id}`, updateData)
//             .then((res) => {
//                 console.log('Update response:', res.data);
//                 setData(data.map(item => item.id === updateData.id ? res.data : item)); // Update specific data item
//             })
//             .catch((err) => {
//                 console.error('There is an error in updating data!', err);
//             });
//     };

//     const handleDelete = () => {
//         // DELETE Request
//         axios.delete(`https://jsonplaceholder.typicode.com/posts/${deleteId}`)
//             .then((res) => {
//                 console.log('Delete response:', res.data);
//                 setData(data.filter(item => item.id !== parseInt(deleteId))); // Remove deleted item from state
//             })
//             .catch((err) => {
//                 console.error('There is an error in deleting data!', err);
//             });
//     };

//     return (
//         <div>
//             <h1>Axios CRUD Operations</h1>

//             {/* Display Data */}
//             <h2>Data</h2>
//             <ul>
//                 {data.map(item => (
//                     <li key={item.id}>
//                         <strong>{item.id}</strong> - {item.title} - {item.body}
//                         <strong>{item.title}</strong> - {item.body}
//                     </li>
//                 ))}
//             </ul>

//             {/* POST Request */}
//             <h2>Create Post</h2>
//             <input
//                 type="text"
//                 placeholder="Title"
//                 value={postData.title}
//                 onChange={(e) => setPostData({ ...postData, title: e.target.value })}
//             />
//             <input
//                 type="text"
//                 placeholder="Body"
//                 value={postData.body}
//                 onChange={(e) => setPostData({ ...postData, body: e.target.value })}
//             />
//             <button onClick={handlePost}>Create Post</button>

//             {/* PUT Request */}
//             <h2>Update Post</h2>
//             <input
//                 type="text"
//                 placeholder="ID"
//                 value={updateData.id}
//                 onChange={(e) => setUpdateData({ ...updateData, id: e.target.value })}
//             />
//             <input
//                 type="text"
//                 placeholder="Title"
//                 value={updateData.title}
//                 onChange={(e) => setUpdateData({ ...updateData, title: e.target.value })}
//             />
//             <input
//                 type="text"
//                 placeholder="Body"
//                 value={updateData.body}
//                 onChange={(e) => setUpdateData({ ...updateData, body: e.target.value })}
//             />
//             <button onClick={handleUpdate}>Update Post</button>

//             {/* DELETE Request */}
//             <h2>Delete Post</h2>
//             <input
//                 type="text"
//                 placeholder="ID"
//                 value={deleteId}
//                 onChange={(e) => setDeleteId(e.target.value)}
//             />
//             <button onClick={handleDelete}>Delete Post</button>
//         </div>
//     );
// }

// export default Axios;






// import React from 'react';
// import { useLocation } from 'react-router-dom';

// function Details() {
//     const location = useLocation();
//     const queryParams = new URLSearchParams(location.search);
//     const name = queryParams.get('name');
//     const age = queryParams.get('age');


//     return(
//         <div>
//             <h1>Details</h1>
//             <p>Name: {name}</p>
//             <p>Age: {age}</p>
//         </div>
//     );
// }

// export default Details;





import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Details from './Details';

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/details" element={<Details />} />
            </Routes>
        </div>
    );
}

export default App;