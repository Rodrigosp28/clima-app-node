const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
  direccion: {
    alias: 'd',
    desc: 'direccion de la ciudad para obtener el clima',
    demand: true
  }
}).argv;

//lugar.getLugarLatLng(argv.direccion).then( console.log )
// clima.getClima(40.750000,-74.000000)
// .then(console.log)
// .catch(console.log);

const getInfo = async(direccion) => {
  try {
    const coords = await lugar.getLugarLatLng(direccion);
    const temp = await clima.getClima(coords.lat,coords.lng);
    return `La temperatura en ${direccion} es de ${temp} grados`;
    
  } catch (error) {
    return `no se pudo determinar el clima de ${direccion}`;
  }
  
}

getInfo(argv.direccion).then(console.log).catch(console.log);




