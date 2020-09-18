import React from 'react';
import SearchFlight from './SearchFlight/SearchFlight.jsx';
import ResultsBoard from './ResultsBoard/ResultsBoard.jsx';

const AirportBoard = () => {
  return (
    <main className="main">
      <SearchFlight />
      <ResultsBoard />
    </main>
  )
}

export default AirportBoard;