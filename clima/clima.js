const axios = require('axios');

const getClima = async(lat,lng) => {
  const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=6912e5531d38d87a4f54f83fe1ad6e19&units=metric`);

  return resp.data.main.temp;
}

module.exports = {
  getClima
}