import React from 'react';

function Table() {
    const tableStyle = {
        margin: 'auto',  
        textAlign: 'center', 
         
      };
  return (
    <div> 
        
      <h2 style={{ textAlign: 'center' }}>Details</h2>
      <table style={tableStyle} border="1" cellPadding="10" cellSpacing="2">
        <tbody>
            
          <tr>
            <td><b>Company</b></td>
            <td><b>Contact</b></td>
            <td><b>Country</b></td>
          </tr>
          <tr>
            <td>Alfreds Futterkiste</td>
            <td>Maria andres</td>
            <td>Germany</td>
          </tr>
          <tr>
            <td>Centro Comercial Moctezuma</td>
            <td>Francisco chang</td>
            <td>Maxico</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Table;
