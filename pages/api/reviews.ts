const axios = require('axios')

export default function handler(req:any, res:any) {
    // res.status(200).json({ name: 'John Doe' })
    const query ='Oaktree Mobility'
    const api = process.env.TP_API_KEY;
    const unit = process.env.BUSINESS_UNIT_ID;
    const url = `https://api.trustpilot.com/v1/business-units/${unit}/reviews?apikey=${api}&stars=4,4.5,5`;

    axios.get(url)
    .then(function (response:any) {
      // Send Response Review Data
      res.status(200).json(response.data.reviews)
    })
    .catch(function (error:any) {
      // handle error
      res.status(400).json(error);
    })
    .then(function () {
      // always executed
    });

  }