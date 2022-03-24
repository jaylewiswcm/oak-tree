import React from 'react'
import { NextSeo } from 'next-seo';
import { PageUnderConstruction } from '../components/PageUnderConstruction';
const britishMade = () => {
    return (
        <>
            <NextSeo  
                title="British Made | Oak Tree Mobility"
                description="Here at Oak Tree Mobility all our products are designed and manufacture here in Great Britain. Find out more."
            />
                   <PageUnderConstruction pageTitle='British Made'/>
        </>
    )
}
export default britishMade;


