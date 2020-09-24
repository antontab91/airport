import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useLocation } from 'react-router-dom';
import PropTypes from "prop-types";
import FlightsTableHeader from '../FlightsTableHeader/FlightsTableHeader.jsx';
import FlightsTabs from '../FlightsTabs/FlightsTabs.jsx'
import FlightData from '../FlightData/FlightData.jsx';
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
  }, [location, arrivalsList, departuresList]);

  return (
    <div className="flights-list">
      <FlightsTabs
        departuresClass={departuresClass}
        arrivalsClass={arrivalsClass}
      />
      <div className="flights-list__table-wrapper">
        <table className="flights-list__table flights-table">
          <FlightsTableHeader />
          <tbody>
            {flights.map((flight) => {
              return (
                <FlightData key={flight.id} {...flight} />
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

ResultsBoard.propTypes = {
  departuresList: PropTypes.array.isRequired,
  arrivalsList: PropTypes.array.isRequired,
}

export default connectedResultsBoard;

