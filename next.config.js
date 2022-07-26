/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  future: { webpack5: true },
  experiments: {
    topLevelAwait: true
  },
  env: { 
      BUSINESS_UNIT_ID: process.env.BUSINESS_UNIT_ID,
      RECAPTCHA_V3_SECRET: process.env.RECAPTCHA_V3_SECRET,
      PARDOT_ACCES_TOKEN: process.env.PARDOT_ACCES_TOKEN,
      PARDOT_BUSINESS_UNIT_ID: process.env.PARDOT_BUSINESS_UNIT_ID
    },
}

