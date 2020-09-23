import { FLIGHTS_LISTS_RECEIVED, SEARCH_FLIGHTS } from './flights.actions'

const initialState = {
  departures: [],
  arrivals: [],
  searchFlight: "",
}

export const flightsReducer = (state = initialState, action) => {
  switch (action.type) {

    case SEARCH_FLIGHTS: {
      return {
        ...state,
        searchFlight: action.payload.searchData,
      }
    }

    case FLIGHTS_LISTS_RECEIVED: {
      const { departure, arrival } = action.payload.body;
      return {
        ...state,
        departures: departure,
        arrivals: arrival,
      }
    }

    default: {
      return state;
    }
  }
}