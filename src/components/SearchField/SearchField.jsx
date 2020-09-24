import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useHistory, useLocation } from "react-router-dom";
import { SearchOutlined } from '@material-ui/icons';
import { searchFlight } from '../flights/flights.actions';

const SearchField = ({ searchFlight }) => {

  const [value, setValue] = useState("");
  const history = useHistory();
  const location = useLocation();

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    searchFlight(value);
    if (value) {
      history.push(`${location.pathname}/${value}`);
    } else {
      history.push(``);
    }
  };

  console.log((location.pathname));

  return (
    <div className="search-flight">
      <h2 className="search-flight__title">
        Search flight
      </h2>
      <form onSubmit={handleSubmit} className="search-flight__form">
        <label
          className="search-flight__label"
          htmlFor="search-flight__input"
        >
          <SearchOutlined
            className="search-flight__icon"
          />
        </label>
        <input
          className="search-flight__input"
          type="text"
          value={value}
          onChange={handleChange}
          placeholder="Airline, destination or flight #"
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
const connectedSearchField = connector(SearchField);

export default connectedSearchField;