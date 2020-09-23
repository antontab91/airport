import React, { useState } from 'react';
import { connect } from 'react-redux';
import { SearchOutlined } from '@material-ui/icons';
import { searchFlight } from '../flights/flights.actions';


const SearchFlight = ({ searchFlight }) => {

  const [state, setstate] = useState('');

  const searchInputhandler = (e) => {
    setstate(e.target.value)
  }

  const onSearchFlight = (e) => {
    e.preventDefault();
    if (state !== "") {
      searchFlight(state);
      setstate('');
    }
    return null;
  }

  return (
    <div className="search-flight">
      <h2 className="search-flight__title">
        Search flight
      </h2>
      <form onSubmit={(e) => { onSearchFlight(e) }} className="search-flight__form">
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

const mapDispatch = {
  searchFlight,
}

const connector = connect(null, mapDispatch);
const connectedSearchFlight = connector(SearchFlight);

export default connectedSearchFlight;