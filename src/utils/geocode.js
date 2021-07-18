const request = require('postman-request')

// Geocoding
// Address -> Lat/Long -> Weather
const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoicmFqZG5leGdlbiIsImEiOiJja3I1NGNqcm4xYTV4Mm9yeHRwb3ZxMWltIn0.BgfgeE1TlDjgqs6NA_bkkw'
    request({ url, json: true }, (error, {body}) => {
        if (error) {
            callback('Unable to connect to geocode service!', undefined)
        } else if(!body.features || (body.features && body.features.length ===  0)) {
            callback('Unable to find geocode!', undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode