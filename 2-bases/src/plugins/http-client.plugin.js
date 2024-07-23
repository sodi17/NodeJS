const axios = require('axios');
const httpClientPlugin={
    get: async (url)=>{
       // const response= await fetch(url);
       const response= await axios.get(url);
      /// const data = await response.json();
      const data = response.data;
       return data;
       // const data = await response.json();
       // return data;
    
    },
};

module.exports = {
    httpClientPlugin,
}