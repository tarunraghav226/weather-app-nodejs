const request = require('request')

const WEATHER_API_KEY = 'fa736011e795194c2ec1cc14da5164e2'
const WEATHER_API_DOMAIN = 'http://api.weatherstack.com/'

const currentWeatherURL = `${WEATHER_API_DOMAIN}/current?access_key=${WEATHER_API_KEY}&query=28.7041,77.1025`

request({
    url: currentWeatherURL,
    json: true
}, (error, response)=>{
    // console.log(response.body.current)
    console.log(`It is currently ${response.body.current.temperature} but feels like ${response.body.current.feelslike}.`)
})