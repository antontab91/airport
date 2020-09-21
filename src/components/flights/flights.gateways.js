const baseUrl = 'https://api.iev.aero/api/flights/21-09-2020';

const fetchFlightsList = () => {
  return fetch(`${baseUrl}`)
    .then((response) => {
      if (response.ok) {
        return response.json()
      }
      return new Error('failed to load flights list')
    }).then((f) => {
      return f.arrival
    })
}

console.log(fetchFlightsList());

