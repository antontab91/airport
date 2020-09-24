import React from 'react'
import PropTypes from 'prop-types';

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

FlightData.propTypes = {
  term: PropTypes.string.isRequired,
  flightTime: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  airlineLogo: PropTypes.string.isRequired,
  airlineName: PropTypes.string.isRequired,
  flightNumber: PropTypes.string.isRequired,
}

export default FlightData;