import React from 'react';

const FlightsTableHeader = () => {
  return (
    <thead className="flights-table__header">
      <tr>
        <th>Terminal</th>
        <th>Local time</th>
        <th>Destination</th>
        <th>Status</th>
        <th>Airline</th>
        <th>Flight</th>
      </tr>
    </thead>
  )
}

export default FlightsTableHeader;