import React from 'react'
import { NextSeo } from 'next-seo';
import { PageUnderConstruction } from '../components/PageUnderConstruction';
const tradeIn = () => {
    return (
        <>
            <NextSeo  
                title="Offers | Oak Tree Mobility"
                description="Offers. Find out more."
            />
                     <PageUnderConstruction pageTitle='Our Offers'/>
        </>
    )
}
export default tradeIn;


