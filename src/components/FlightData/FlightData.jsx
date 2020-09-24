import React from 'react'

const FlightData = ({ term, flightTime, destination, status, airlineLogo, airlineName, flightNumber }) => {
  return (
    <tr>
      <td>{term}</td>
      <td>{flightTime}</td>
      <td>{destination}</td>
      <td>{status}</td>
      <td className='flights-table__airline-logo'>
        <img className='flights-table__airline-icon'
          src={airlineLogo}
          alt="airline-logo" />
        {airlineName}
      </td>
      <td>{flightNumber}</td>
    </tr>

  )
}

export default FlightData;