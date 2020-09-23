import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link, Route, Switch, useLocation, useHistory, useParams } from 'react-router-dom';
import moment from 'moment';
import { FlightTakeoff, FlightLand } from '@material-ui/icons';

import FlightsTableHeader from '../FlightsTableHeader/FlightsTableHeader.jsx';
import *as flightsSelectors from '../flights/flights.selectors';


const ResultsBoard = ({ arrivalsList, departuresList }) => {
  const [state, setstate] = useState('arrivals');

  const toggle = () => {
    setstate(state === 'departures' ? 'arrivals' : 'departures');
  }

  const needed = state === 'departures' ? departuresList : arrivalsList;

  // console.log(useLocation())
  // console.log(useHistory())
  // console.log(useParams())

  return (
    <div className="flights-list">

      <div className="flights-list__tabs">
        <Link to='/departures'
          onClick={toggle}
          className={`flights-list__tab-btn flights-list__tab-btn_departures ${state === 'departures' ? "active" : ""} `}
        >
          <FlightTakeoff className="flights-list__icon" />
          <span>Departures вылет </span>
        </Link>

        <Link to='/arrivals'
          onClick={toggle}
          className={`flights-list__tab-btn flights-list__tab-btn_arrivals ${state === 'arrivals' ? "active" : ""} `}
        >
          <FlightLand className="flights-list__icon" />
          <span>Arrivals прилет</span>
        </Link>
      </div>

      <div className="flights-list__table-wrapper">
        <table className="flights-list__table flights-table">
          <FlightsTableHeader />

          <tbody>
            {needed.map((flight) => {
              return (
                <tr key={flight.ID}>
                  <td>{flight.term}</td>
                  <td>{state === 'departures' ? moment(flight.timeDepShedule).format("HH:mm") : moment(flight.timeLandCalc).format("HH:mm")}</td>
                  <td>{flight["airportToID.name_en"] || flight["airportFromID.name_en"]}</td>
                  <td>{flight.status}</td>
                  <td className='flights-table__airline-logo'><img className='flights-table__airline-icon' src={flight.airline.en.logoSmallName} alt="airline-logo" />{flight.airline.en.name}</td>
                  <td>{flight["carrierID.IATA"] + flight.fltNo}</td>
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

