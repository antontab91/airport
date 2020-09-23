import { FLIGHTS_LISTS_RECEIVED, SEARCH_FLIGHTS } from './flights.actions'

const initialState = {
  departures: [],
  arrivals: [],
  searchFlight: "",
}

export const flightsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FLIGHTS_LISTS_RECEIVED: {
      const { departure, arrival } = action.payload.body;
      return {
        ...state,
        departures: departure,
        arrivals: arrival,
      }
    }

    case SEARCH_FLIGHTS: {
      const { searchData } = action.payload;
      return {
        ...state,
        searchFlight: searchData,
      }
    }

    default: {
      return state;
    }
  }
}