import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ROUTES } from "../constants";
import SearchField from './SearchField/SearchField.jsx';
import ResultsBoard from './ResultsBoard/ResultsBoard.jsx';

const AirportBoard = () => {
  return (
    <main className="main">
      <SearchField />
      <Switch>
        <Route exact path={ROUTES.DEPARTURE} component={ResultsBoard} />
        <Route exact path={ROUTES.ARRIVAL} component={ResultsBoard} />
        <Redirect to={ROUTES.DEPARTURE}></Redirect>
      </Switch>
    </main>
  );
}

export default AirportBoard;
