import { ROUTES } from '../../constants';

export const departuresSelector = state => {
  const { departures, searchFlight } = state.flights;

  if (!searchFlight) {
    return departures || [];
  }

  return departures.filter((flight) => {
    return (
      flight.destination.toLowerCase().includes(searchFlight.toLowerCase()) ||
      flight.airlineName.toLowerCase().includes(searchFlight.toLowerCase()) ||
      flight.flightNumber.toLowerCase().includes(searchFlight.toLowerCase())
    )
  });
}

export const arrivalsSelector = state => {
  const { arrivals, searchFlight } = state.flights;

  if (!searchFlight) {
    return arrivals || [];
  }
  return arrivals.filter((flight) => {
    return (
      flight.destination.toLowerCase().includes(searchFlight.toLowerCase()) ||
      flight.airlineName.toLowerCase().includes(searchFlight.toLowerCase()) ||
      flight.flightNumber.toLowerCase().includes(searchFlight.toLowerCase())
    )
  });
}


export const flightsByPathnameSelector = (state, pathname) => {
  switch (pathname) {
    case ROUTES.DEPARTURE: {
      return departuresSelector(state)
    }

    case ROUTES.ARRIVAL: {
      return arrivalsSelector(state)
    }

    default: {
      return []
    }
  }
}


// export const flightsByPathnameSelector = (state, pathname) => {
//   return (pathname === ROUTES.DEPARTURE) ? departuresSelector(state) : arrivalsSelector(state) 
// }
