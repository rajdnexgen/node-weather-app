const request = require('postman-request')

const forecast = (longitude, latitude, callback) => {
const url = `http://api.weatherstack.com/current?access_key=5273e672c1acd68bdf6bbb16016f6da0&query=${latitude}, ${longitude}`;

// const url = 'http://api.weatherstack.com/current?access_key=5273e672c1acd68bdf6bbb16016f6da0&query=Bangalore'

    request({ url, json: true }, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if(body.error) {
            callback('Unable to find location', undefined)
        } else {
            const data = body
            // console.log(data.current)
            // console.log(`${data.current.weather_descriptions[0]}. It is currently ${data.current.temperature} degrees out but feels like ${data.current.feelslike} degrees. There is a ${data.current.precip}% chance of rain.`)
            // callback(undefined, {
            //     weather: body.current.weather_descriptions,
            //     temperature: body.current.temperature,
            //     feelslike: body.current.feelslike,
            //     precipitation: body.current.precip,
            // })
            callback(undefined, `${data.current.weather_descriptions[0]}. It is currently ${data.current.temperature} degrees out but feels like ${data.current.feelslike} degrees. There is a ${data.current.precip}% chance of rain.`)
        }
    })
}

module.exports = forecast