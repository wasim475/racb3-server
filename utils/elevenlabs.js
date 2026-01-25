const { default: axios } = require('axios');



const elevenAPI = process.env.ELEVEN_LABS_API

 const elevenAxios = axios.create({
  baseURL: 'https://api.elevenlabs.io/v1',
  headers: {
    'xi-api-key': elevenAPI,
    'Content-Type': 'application/json',
  },
  responseType: 'arraybuffer',
});

module.exports = elevenAxios