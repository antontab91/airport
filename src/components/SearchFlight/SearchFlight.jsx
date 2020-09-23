import React, { useState } from 'react';
import { connect } from 'react-redux';
import { SearchOutlined } from '@material-ui/icons';
import { searchFlight } from '../flights/flights.actions';


const SearchFlight = () => {

  const [state, setstate] = useState('');

  const searchInputhandler = (e) => {
    console.log(e.target.value)
    setstate(e.target.value)
  }

  return (
    <div className="search-flight">
      <h2 className="search-flight__title">
        Search flight
      </h2>
      <form className="search-flight__form" action="">
        <label
          className="search-flight__label"
          htmlFor="search-flight__input"
        >
          <SearchOutlined
            className="search-flight__icon"
          />
        </label>
        <input
          id="search-flight__input"
          type="text"
          className="search-flight__input"
          placeholder="Airline, destination or flight #"
          value={state}
          onChange={searchInputhandler}
        />
        <button className="search-flight__btn" type="submit">
          SEARCH
        </button>
      </form>
    </div>
  )
}

const mapDisptch = {
  searchFlight,
}

const connector = connect(null, mapDisptch);
const connectedSearchFlight = connector(SearchFlight);

export default connectedSearchFlight;