const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');


const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

// lugar.getLugarLatLng(argv.direccion)
//     .then(console.log);

// clima.getClima(35, 139)
//     .then(console.log)
//     .catch(console.log);

const getInfo = async(direccion) => {


    try {
        const coords = await lugar.getLugarLatLng(direccion);
        const temp = await clima.getClima(coords.lat, coords.lng);

        console.log(`El clima de ${ direccion } es de ${ temp }`);
    } catch (error) {

        console.log(`No se pudo encontrar el clima de ${ direccion }`);

    }




}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);