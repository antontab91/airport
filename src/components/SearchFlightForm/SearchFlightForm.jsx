import React from 'react';


const SearchFlightForm = () => {
  return (
    <div class="search-field">
      <h2 class="search-field__title">
        ПОШУК РЕЙСУ
      </h2>
      <form name="searchFlightsForm" action="">
        <input type="text" placeholder="Номер рейсу або місто" />
        <button type="submit">Знайти</button>
      </form>
    </div>
  )
}

export default SearchFlightForm;