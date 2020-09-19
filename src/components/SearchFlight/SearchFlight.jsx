import React from 'react';
import { SearchOutlined } from '@material-ui/icons';


const SearchFlight = () => {
  return (
    <div className="search-flight">
      <h2 className="search-flight__title">
        Search flight
      </h2>
      <form className="search-flight__form" action="">
        <SearchOutlined style={{ fontSize: 44 }} className="search-flight__icon" />
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