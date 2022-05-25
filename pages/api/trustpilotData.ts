const axios = require('axios')

export default function handler(req:any, res:any) {
    
    const query ='Oaktree Mobility'
    const key = process.env.TP_API_KEY;
    const unit = process.env.BUSINESS_UNIT_ID;
    const url = `https://api.trustpilot.com/v1/business-units/${unit}?apikey=${key}`;

    axios.get(url)
    .then(function (response:any) {
      // Send Response Review Data
      res.status(200).json(response.data)
    })
    .catch(function (error:any) {
      // handle error
      res.status(400).json(error);
    })
    .then(function () {
      // always executed
    });
  }