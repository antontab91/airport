import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, useLocation, useHistory, useParams } from 'react-router-dom';
import { FlightTakeoff, FlightLand } from '@material-ui/icons';

import FlightsTableHeader from '../FlightsTableHeader/FlightsTableHeader.jsx';
import *as flightsSelectors from '../flights/flights.selectors';


const ResultsBoard = ({ arrivalsList, departuresList }) => {
  const [status, setStatus] = useState('departures');
  const location = useLocation();
  const departuresClass = status === "departures" ? "active" : "";
  const arrivalsClass = status === "arrivals" ? "active" : "";
  const flights = status === 'departures' ? departuresList : arrivalsList;

  useEffect(() => {
    if (location.pathname.includes("arrivals")) {
      setStatus("arrivals");
    } else {
      setStatus("departures");
    }
  }, [location]);

  console.log(useHistory())
  console.log(useLocation())

  return (
    <div className="flights-list">

      <div className="flights-list__tabs">
        <Link
          to={`/departures`}
          className={`flights-list__tab-btn flights-list__tab-btn_departures ${departuresClass} `}
        >
          <FlightTakeoff className="flights-list__icon" />
          <span>Departures</span>
        </Link>

        <Link
          to={`/arrivals`}
          className={`flights-list__tab-btn flights-list__tab-btn_arrivals ${arrivalsClass} `}
        >
          <FlightLand className="flights-list__icon" />
          <span>Arrivals</span>
        </Link>
      </div>

      <div className="flights-list__table-wrapper">
        <table className="flights-list__table flights-table">

          <FlightsTableHeader />

          <tbody>
            {flights.map((flight) => {
              return (
                <tr key={flight.id}>
                  <td>{flight.term}</td>
                  <td>{flight.flightTime}</td>
                  <td>{flight.destination}</td>
                  <td>{flight.status}</td>
                  <td className='flights-table__airline-logo'>
                    <img className='flights-table__airline-icon'
                      src={flight.airlineLogo}
                      alt="airline-logo" />
                    {flight.airlineName}
                  </td>
                  <td>{flight.flightNumber}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

const mapState = (state) => {
  return {
    arrivalsList: flightsSelectors.arrivalsSelector(state),
    departuresList: flightsSelectors.departuresSelector(state),
  }
}

const connector = connect(mapState, null);
const connectedResultsBoard = connector(ResultsBoard);

export default connectedResultsBoard;

