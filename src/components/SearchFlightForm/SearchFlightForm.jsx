import React from 'react';


const SearchFlightForm = () => {
  return (
    <div className="search_field">
      <h2 className="search_field__title">
        Search flight
      </h2>
      <form className="search-field__form" action="">
        <input
          type="text"
          className="search-field__input"
          placeholder="Airline, destination or flight #"
        />
        <button className="search-field__btn" type="submit">
          SEARCH
        </button>
      </form>
    </div>
  )
}

export default SearchFlightForm;