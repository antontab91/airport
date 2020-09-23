export const arrivalsSelector = state => {
  const { arrivals, searchFlight } = state.flights;
  if (!searchFlight) {
    return arrivals;
  }
}

export const departuresSelector = state => {
  const { departures, searchFlight } = state.flights;
  if (!searchFlight) {
    return departures;
  }
}