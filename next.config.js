/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  future: { webpack5: true },
  env: { 
      BUSINESS_UNIT_ID: process.env.BUSINESS_UNIT_ID 
    }
}

