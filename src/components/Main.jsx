import { connect } from 'react-redux';
import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
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
        <Route exact path="/">
          <Redirect to="/departure"></Redirect>
        </Route>
        <Route>
          <ResultsBoard path='/:direction/:searchFlight?' />
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