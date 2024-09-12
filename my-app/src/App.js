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



import React, {Component} from 'react';
import PropTypes from 'prop-types';
class App extends React.Component {
  render(){
    return(
      <div>
        <h1>ReactJS Props validation example</h1>
        <table>
          <tr>
            <th>Types</th>
            <th>Values</th>
            <th>Valid</th>
          </tr>

          <tr>
            <td>Array</td>
            <td>{this.props.propArray}</td>
            <td>{this.props.propArray ? "true" : "False"}</td>
          </tr>

          <tr>
            <td>Boolean</td>
            <td>{this.props.propBool ? "true" : "False"}</td>
            <td>{this.props.propBool ? "true" : "False"}</td>
          </tr>

          <tr>
            <td>Function</td>
            <td>{this.props.propFunc(5)}</td>
            <td>{this.props.propFunc(5) ? "true" : "False"}</td>
          </tr>

          <tr>
            <td>String</td>
            <td>{this.props.propString}</td>
            <td>{this.props.propString ? "true" : "False"}</td>
          </tr>

          <tr>
            <td>Number</td>
            <td>{this.props.propNumber}</td>
            <td>{this.props.propNumber ? "true" : "False"}</td>
          </tr>
        </table>
      </div>
    )
  }
}
App.propTypes = {
  propArray: PropTypes.array.isRequired,
  propBool: PropTypes.bool.isRequired,
  propFunc: PropTypes.func,
  propNumber: PropTypes.number,
  propString: PropTypes.string,
}




App.defaultProps = {
  propArray: [1,2,3,4,5],
  propBool: true,
  propFunc: function(x){return x+5},
  propNumber: 1,
  propString: "LPU",
}
export default App;




