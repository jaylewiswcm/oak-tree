import axios from 'axios';

const handler = (req:any, res:any) => {

  const secret = process.env.RECAPTCHA_V3_SECRET

    if (req.method === "POST") {
      try {
        fetch(`https://www.google.com/recaptcha/api/siteverify`, {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: `secret=${secret}&response=${req.body.gRecaptchaToken}`,
        })
          .then((reCaptchaRes) => reCaptchaRes.json())
          .then((reCaptchaRes) => {
            console.log(
              reCaptchaRes,
              "Response from Google reCaptcha verification API"
            );
            if (reCaptchaRes?.score > 0.5) {
              // Save data to the database from here

              // console.log(req.body.formData);

              // axios({
              //   method: 'post',
              //   url: 'http://e.oaktreemobility.co.uk/l/349991/2022-06-29/j57vr',
              //   headers:{
              //     'Content-Type': 'application/x-www-form-urlencoded'
              //   },
              //   data: req.body.formData
              // })
              // .then(function (response) {
              //   console.log(response);
              // })
              // .catch(function (error) {
              //   console.log(error);
              // });
   

              const formData = req.body.formData;
              // fetch(`https://e.oaktreemobility.co.uk/l/349991/2022-06-29/j57vr`, {
              //   method: "POST",
              //   body: `
              //     "product_interest": "",
              //     "first_name": "",
              //     "last_name": "",
              //     "postcode": "",
              //     "address_one": "",
              //     "phone":"",
              //     "email": "",
          
              //     "title": "",
              //     "lead_source": "",
              //     "ad_campaign": "",
              //     "gclid":"",
              //     "request_type": "",
              //     "newsletter_opt_in": "",
              //     "third_party_opt_out": "",
              //     "exit_intent_pardot": ""
              //     `, 
              // })
              //   .then((response) => response.json())
              //   .then((data) => {
              //     console.log(data); 
              //     console.log('Success Sending Data') 
              //     res.status(200).json({
              //       status: "success",
              //       message: data,
              //     });   
              //     return data;
              // });

              axios.post('https://e.oaktreemobility.co.uk/l/349991/2022-06-29/j57vr', formData)
              .then(function (response) {
                console.log(response);
              })
              .catch(function (error) {
                console.log(error);
              });
            
              res.status(200).json({
                status: "success",
                message: "Enquiry submitted successfully",
              });
            } else {
              res.status(200).json({
                status: "failure",
                message: "Google ReCaptcha Failure",
              });
            }
          });
      } catch (err) {
        res.status(405).json({
          status: "failure",
          message: "Error submitting the enquiry form",
        });
      }
    } else {
      res.status(405);
      res.end();
    }
  };
  
  export default handler;