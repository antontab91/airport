import { FLIGHTS_LISTS_RECEIVED } from './flights.actions'

const initialState = {
  departures: [],
  arrivals: [],
}

export const flightsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FLIGHTS_LISTS_RECEIVED: {
      return {
        ...state,
        departures: action.payload.body.departures,
        arrivals: action.payload.body.arrival,
      }
    }

    default: {
      return state;
    }
  }
}