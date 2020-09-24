import { connect } from 'react-redux';
import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import SearchField from './SearchField/SearchField.jsx';
import ResultsBoard from './ResultsBoard/ResultsBoard.jsx';
import { getFlightsLists } from './flights/flights.actions';

const AirportBoard = ({ getFlightsLists }) => {

  useEffect(() => {
    getFlightsLists()
  }, [getFlightsLists]);

  return (
    <main className="main">
      <SearchField />
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