const axios = require('axios');
var data = {};
function handleRequest(response) {
    // console.log({ response })
    return response.json()
}
function handleJSON(json) {
    console.log(json)
let 
// Make a request for a user with a given ID
axios.get('http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=39f71d4438befcf9779a7ef59013d16a')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  data = response
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
  


