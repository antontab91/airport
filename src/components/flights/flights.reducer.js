import { FLIGHTS_LISTS_RECEIVED, SEARCH_FLIGHTS } from './flights.actions'

const initialState = {
  departures: [],
  arrivals: [],
  searchFlight: "",
}

export const flightsReducer = (state = initialState, action) => {
  switch (action.type) {



    case FLIGHTS_LISTS_RECEIVED: {
      const { departure, arrival } = action.payload;
      return {
        ...state,
        departures: departure,
        arrivals: arrival,
      }
    }

    case SEARCH_FLIGHTS: {
      return {
        ...state,
        searchFlight: action.payload,
      }
    }

    default: {
      return state;
    }
  }
}