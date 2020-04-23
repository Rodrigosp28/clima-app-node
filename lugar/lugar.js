const axios = require('axios');

const getLugarLatLng = async(dir) => {

  const encodeUrl = encodeURI(dir);

  const instance = axios.create({
    baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,
    headers: {'x-rapidapi-key': '2c7dd4b21cmsh657fe657d8fd215p180193jsn19df0569dbcd'}
  });

  const resp = await instance.get();

  if(resp.data.Results.lenght === 0) {
    throw new Error(`No hay resultados para: ${dir}`)
  }

  const data = resp.data.Results[0];
  const direccion = data.name;
  const lat = data.lat;
  const lng = data.lon;

  return {
    direccion,
    lat,
    lng
  }

}

module.exports = {
  getLugarLatLng
}

