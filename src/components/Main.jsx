import { connect } from 'react-redux';
import React, { useState, useEffect } from 'react';
import SearchFlight from './SearchFlight/SearchFlight.jsx';
import ResultsBoard from './FlightsList/FlightsList.jsx';
import { getFlightsLists } from './flights/flights.actions';



const AirportBoard = ({ state, getFlightsLists }) => {

  useEffect(() => {
    getFlightsLists()
  }, []);

  return (
    <main className="main">
      <SearchFlight />
      <ResultsBoard />
    </main>
  )
}

const mapState = (state) => {
  return {
    state,
  }
}

const mapDispatch = {
  getFlightsLists: getFlightsLists,
}

const connector = connect(mapState, mapDispatch)
const connectedAirportBoard = connector(AirportBoard);

export default connectedAirportBoard;