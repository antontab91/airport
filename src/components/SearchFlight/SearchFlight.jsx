import React from 'react';


const SearchFlight = () => {
  return (
    <div className="search_flight">
      <h2 className="search_flight__title">
        Search flight
      </h2>
      <form className="search-flight__form" action="">
        <input
          type="text"
          className="search-flight__input"
          placeholder="Airline, destination or flight #"
        />
        <button className="search-flight__btn" type="submit">
          SEARCH
        </button>
      </form>
    </div>
  )
}

export default SearchFlight;