import axios from 'axios';
import { json } from 'stream/consumers';

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
              // Send success so we can submit form
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


  