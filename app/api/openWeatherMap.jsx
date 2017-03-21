var axios = require('axios');

const weatherAPIKey=process.env.OPENWEATHERMAPAPI_KEY || '81b301ecc603bbc3581e2870ddc31dcd';

//generate the base url
const OPEN_WEATHER_MAP_URL = `http://api.openweathermap.org/data/2.5/weather?appid=${weatherAPIKey}&units=imperial`;

module.exports = {
  getTemp: function(location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(function(res) {
      if(res.data.cod && res.data.message) {
        throw new Error(res.data.message);
      } else {
        return res.data.main.temp;
      }
    }, function(error) {
      throw new Error(error.response.data.message);
    });
  }
};
