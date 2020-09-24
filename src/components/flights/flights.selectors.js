export const arrivalsSelector = state => {
  const { arrivals, searchFlight } = state.flights;

  if (!searchFlight) {
    return arrivals || [];
  }
  return arrivals.filter((flight) => {
    return (
      flight["airportFromID.name_en"].toLowerCase().includes(searchFlight.toLowerCase()) ||
      flight.airline.en.name.toLowerCase().includes(searchFlight.toLowerCase())
    )
  });
}

export const departuresSelector = state => {
  const { departures, searchFlight } = state.flights;

  if (!searchFlight) {
    return departures || [];
  }

  return departures.filter((flight) => {
    return (
      flight["airportToID.name_en"].toLowerCase().includes(searchFlight.toLowerCase()) ||
      flight.airline.en.name.toLowerCase().includes(searchFlight.toLowerCase())
    )
  });
}