//UseContext Example


import React, { createContext, useContext } from 'react';

const MyContext = createContext();
function App() {
    return (
        <MyContext.Provider value= "Lovely Professional university!">
            <ChildComponent />
        </MyContext.Provider>
    );
}

function ChildComponent() {
    const value = useContext(MyContext);
    return <div>(value)</div>;
    
}
 export default App;

//In the above code, we have created a context called MyContext and a Provider component. The Provider component takes a value prop, and any child components can consume this value using the useContext hook.
