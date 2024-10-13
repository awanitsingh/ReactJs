
import React from 'react';

const MobileRepairTable = ({ services }) => {
  return (
    <table border="1" cellPadding="10" cellSpacing="0">
      <thead>
        <tr>
          <th>ID</th>
          <th>Service</th>
          <th>Duration(hrs)</th>
          <th>Cost($)</th>
        </tr>
      </thead>
      <tbody>
        {services.map((service) => (
          <tr key={service.id}>
            <td>{service.id}</td>
            <td>{service.service}</td>
            <td>{service.duration}</td>
            <td>{service.cost}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MobileRepairTable;