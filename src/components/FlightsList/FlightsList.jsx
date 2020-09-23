import React, { useState } from 'react';
import { connect } from 'react-redux';
import { FlightTakeoff, FlightLand } from '@material-ui/icons';
import { Link, Route, Switch, useLocation, useHistory, useParams, useRouteMatch } from 'react-router-dom';

const FlightsList = ({ arrivalsList, departuresList }) => {
  const [state, setstate] = useState('departures');

  const toggle = () => {
    setstate(state === 'departures' ? 'arrivals' : 'departures');
  }

  const needed = state === 'departures' ? departuresList : arrivalsList;

  console.log(useLocation())
  // console.log(useHistory())
  // console.log(useParams())
  // console.log(useRouteMatch())

  console.log(arrivalsList, departuresList)
  return (
    <div className="flights-list">

      <div className="flights-list__tabs">
        <Link to='/departures' onClick={toggle} className={`flights-list__tab-btn flights-list__tab-btn_departures ${state === 'departures' ? "active" : ""} `}>
          <FlightTakeoff className="flights-list__icon" />
          <span>Departures вылет </span>
        </Link>

        <Link to='/arrivals' onClick={toggle} className={`flights-list__tab-btn flights-list__tab-btn_arrivals ${state === 'arrivals' ? "active" : ""} `}>
          <FlightLand className="flights-list__icon" />
          <span>Arrivals прилет</span>
        </Link>
      </div>

      <div className="flights-list__table-wrapper">
        <table className="flights-list__table flights-table">
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

          <tbody>
            {needed.slice().sort((a, b) => { return a.timeLandCalc - b.timeLandCalc }).map((flight) => {
              return (
                <tr key={flight.ID}>
                  <td>{flight.term}</td>
                  <td>{}</td>
                  <td>3</td>
                  <td>4</td>
                  <td>5</td>
                  <td>6</td>
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
    arrivalsList: state.tasks.arrivals,
    departuresList: state.tasks.departures,
  }
}

const connector = connect(mapState, null);
const connectedFlightsList = connector(FlightsList);

export default connectedFlightsList;

// timeArrExpectCalc: "2020-09-22T  04:30:00Z"     ожидаемое время когда самолет будет в терминале 
// timeArrShedule: "2020-09-22T     04:30:00Z"     по графику когда самолет будет в терминале 
// timeTakeofFact: "2020-09-22T     04:33:00Z"     когда прибыл в терминал фактически 

// timeLandCalc: "2020-09-22T       05:55:00Z"     ожидаемое время отлета 
// timeLandFact: "2020-09-22T       05:53:25Z"     фактическое время отлета 

// timeStandCalc: "2020-09-22T      06:00:00Z"     приблизительное время прилета  
// timeStandFact: "2020-09-22T      06:00:34Z"     фактическое время прилета  
// timeToStand: "2020-09-22T        05:40:00Z"     время прилета 