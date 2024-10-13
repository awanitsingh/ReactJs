// import logo from './logo.svg';
// import './App.css';

// function App() {
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
// }

// export default App;






// Prop Types example

// import React, {Component} from 'react';
// import PropTypes from 'prop-types';
// class App extends React.Component {
//   render(){
//     return(
//       <div>
//         <h1>ReactJS Props validation example</h1>
//         <table>
//           <tr>
//             <th>Types</th>
//             <th>Values</th>
//             <th>Valid</th>
//           </tr>

//           <tr>
//             <td>Array</td>
//             <td>{this.props.propArray}</td>
//             <td>{this.props.propArray ? "true" : "False"}</td>
//           </tr>

//           <tr>
//             <td>Boolean</td>
//             <td>{this.props.propBool ? "true" : "False"}</td>
//             <td>{this.props.propBool ? "true" : "False"}</td>
//           </tr>

//           <tr>
//             <td>Function</td>
//             <td>{this.props.propFunc(5)}</td>
//             <td>{this.props.propFunc(5) ? "true" : "False"}</td>
//           </tr>

//           <tr>
//             <td>String</td>
//             <td>{this.props.propString}</td>
//             <td>{this.props.propString ? "true" : "False"}</td>
//           </tr>

//           <tr>
//             <td>Number</td>
//             <td>{this.props.propNumber}</td>
//             <td>{this.props.propNumber ? "true" : "False"}</td>
//           </tr>
//         </table>
//       </div>
//     )
//   }
// }
// App.propTypes = {
//   propArray: PropTypes.array.isRequired,
//   propBool: PropTypes.bool.isRequired,
//   propFunc: PropTypes.func,
//   propNumber: PropTypes.number,
//   propString: PropTypes.string,
// }


// App.defaultProps = {
//   propArray: [1,2,3,4,5],
//   propBool: true,
//   propFunc: function(x){return x+5},
//   propNumber: 1,
//   propString: "LPU",
// }
// export default App;






// import React from 'react';
// import MobileRepairTable from './components/MobileRepairTable'; 

// const App = () => {
 
//   const repairServices = [
//     { id: 1, service: 'Screen Replacement', duration: 2, cost: '$120' },
//     { id: 2, service: 'Battery Replacement', duration: 1, cost: '$80' },
//     { id: 3, service: 'Water Damage Repair', duration: 3, cost: '$150' },
//     { id: 4, service: 'Camera Repair', duration: 2, cost: '$90' },
//   ];

//   return (
//     <div>
//       <h1>Mobile Repair Services</h1>
//       {}
//       <MobileRepairTable services={repairServices} />
//     </div>
//   );
// };

// export default App;








import React, { useState, useEffect, useContext, createContext } from "react";
import ThemedComponent from "./components/ThemedComponent";
import './App.css';

// Create a ThemeContext for managing light and dark themes
export const ThemeContext = createContext();  // Export the ThemeContext

const App = () => {
  const [counter, setCounter] = useState(0);
  const [theme, setTheme] = useState("light");

  // Log the counter value every time it changes
  useEffect(() => {
    console.log(`Counter: ${counter}`);
  }, [counter]);

  // Increment and Decrement Counter
  const increment = () => setCounter(counter + 1);
  const decrement = () => setCounter(counter - 1);

  // Toggle between light and dark themes
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={theme}>
      <div className={`app ${theme}`}>
        <h1>Counter: {counter}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={toggleTheme}>Switch to {theme === "light" ? "Dark" : "Light"} Theme</button>
      </div>
      <ThemedComponent />
    </ThemeContext.Provider>
  );
};

export default App;
