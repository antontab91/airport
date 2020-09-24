import { connect } from 'react-redux';
import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import SearchFlight from './SearchFlight/SearchFlight.jsx';
import ResultsBoard from './ResultsBoard/ResultsBoard.jsx';
import { getFlightsLists } from './flights/flights.actions';


const AirportBoard = ({ getFlightsLists }) => {


  useEffect(() => {
    getFlightsLists()
  }, [getFlightsLists]);

  return (
    <main className="main">
      <SearchFlight />
      <Switch>
        <Route>
          <ResultsBoard exact path='/departures' />
        </Route>
      </Switch>
    </main>
  )
}

const mapDispatch = {
  getFlightsLists,
}

const connector = connect(null, mapDispatch)
const connectedAirportBoard = connector(AirportBoard);

export default connectedAirportBoard;