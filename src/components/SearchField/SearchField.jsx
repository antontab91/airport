import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { SearchOutlined } from "@material-ui/icons";

import { searchFlight } from "../flights/flights.actions";
import { stringify } from "../../utils";

const SearchField = () => {
  const dispatch = useDispatch(); // "useDispatch" аналог mapDispatch, заменяе connect в хуках
  const [searchValue, setSearchValue] = useState("");
  const history = useHistory();

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searchFlight(searchValue));

    history.replace({
      ...history.location,
      search: stringify({ search: searchValue }),
    });
  };

  return (
    <div className="search-flight">
      <h2 className="search-flight__title">Search flight</h2>
      <form onSubmit={handleSubmit} className="search-flight__form">
        <label className="search-flight__label" htmlFor="search-flight__input">
          <SearchOutlined className="search-flight__icon" />
        </label>
        <input
          className="search-flight__input"
          type="text"
          value={searchValue}
          onChange={handleChange}
          placeholder="Airline, destination or flight #"
        />
        <button className="search-flight__btn" type="submit">
          SEARCH
        </button>
      </form>
    </div>
  );
};

export default SearchField;
