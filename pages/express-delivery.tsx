import React from 'react'
import { NextSeo } from 'next-seo';
import { PageUnderConstruction } from '../components/PageUnderConstruction';

const expressDelivery = () => {
  return (
    <>
    <NextSeo  
        title="British Made | Oak Tree Mobility"
        description="Here at Oak Tree Mobility all our products are designed and manufacture here in Great Britain. Find out more."
    />
      <PageUnderConstruction pageTitle='express delivery'/>
</>
  )
}

export default expressDelivery;