var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?units=metric&appid=36a04863a09447666058c833852d1ebe';


module.exports = {
    getTemp: function (location) {
        var encodedLocation = encodeURIComponent(location);
        var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
        
        return axios.get(requestUrl)
            .then(function (res) {
                if (res.data.cod && res.data.message) {
                    throw new Error(res.data.message);
                } 
                return res.data.main.temp;
            })
            .catch(function (res) {
                throw new Error("Unable to fetch weather for " + location);
            });
        
    }
};