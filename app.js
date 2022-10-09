const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const address = process.argv[2]

geocode(address, (error, data) => {
    if(error){
        return console.log(error)
    }
    
    forecast(data.latitude, data.longitude, (forecastError, forecastData) => {
        if(forecastError){
            return console.log(error)
        }
    
        console.log(data.location)
        console.log(forecastData)
    })
})

