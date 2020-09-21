const baseUrl = 'https://api.iev.aero/api/flights/21-09-2020';
// const headers = {
//   "Content-type": "application/json;charset=utf-8",
// };

const fetchFlightsList = () => {
  return fetch(`${baseUrl}`)
    .then((response) => {
      if (response.ok) {
        return response.json()
      }
      return new Error('failed to load flights list')
    })
}
// fetchFlightsList().then((suka) => { console.log(suka.body.arrival) })


