const axios = require('axios');

const getLugarLatLng = async(dir) => {

    const encodeURL = encodeURI(dir);
    console.log(encodeURL);

    const resp = await axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${ encodeURL }.json?`, {
        params: {
            access_token: 'pk.eyJ1IjoicG9sbGl0bzIxMCIsImEiOiJja2Y3YmN3dGcwMHB4MnBycXhmY2wwZG10In0.zcnpkVNUHvXRJWZ-Xq0YEw'
        }
    });

    if (resp.data.features.length === 0) {
        throw new Error(`No hay resultados para ${ dir }`)
    }

    const data = resp.data.features[0];
    const direccion = data.place_name;
    const lat = data.geometry.coordinates[1];
    const lng = data.geometry.coordinates[0];

    return {
        direccion,
        lat,
        lng
    }

}


module.exports = {
    getLugarLatLng,
}