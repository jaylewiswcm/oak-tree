import React from 'react'
import { NextSeo } from 'next-seo';
import { PageUnderConstruction } from '../components/PageUnderConstruction';

const pricesExplained = () => {
    return (
        <>
            <NextSeo  
                title="Prices Explained | Oak Tree Mobility"
                description="Take a look at the Oak Tree Mobility price guide and find out more about the range of mobility products available to suit your budget"
            />
               <PageUnderConstruction pageTitle='Prices Explained'/>
        </>
    )
}
export default pricesExplained;


