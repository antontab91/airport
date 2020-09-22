import { connect } from 'react-redux';
import React, { useEffect } from 'react';
import SearchFlight from './SearchFlight/SearchFlight.jsx';
import ResultsBoard from './FlightsList/FlightsList.jsx';
import { getFlightsLists } from './flights/flights.actions';


const AirportBoard = ({ getFlightsLists }) => {

  useEffect(() => {
    getFlightsLists()
  }, [getFlightsLists]);        //тут я получил и записал в стор рпасписание всех вылетов/прилетов

  return (
    <main className="main">
      <SearchFlight />
      <ResultsBoard />
    </main>
  )
}

const mapDispatch = {
  getFlightsLists,
}

const connector = connect(null, mapDispatch)
const connectedAirportBoard = connector(AirportBoard);

export default connectedAirportBoard;