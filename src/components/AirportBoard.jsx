import React from 'react';
import SearchFlightForm from './SearchFlightForm/SearchFlightForm.jsx';
import SearchResultsBoard from './SearchResultsBoard/SearchResultsBoard.jsx';

const AirportBoard = () => {
  return (
    <>
      <SearchFlightForm />
      <SearchResultsBoard />
    </>
  )
}

export default AirportBoard;