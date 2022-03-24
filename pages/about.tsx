import React from 'react'
import { NextSeo } from 'next-seo';
import { PageUnderConstruction } from '../components/PageUnderConstruction';
const about = () => {
    return (
        <>
            <NextSeo  
                title="About Us | Oak Tree Mobility"
                description="Here at Oak Tree Mobility we specialise in a range of handmade mobility furniture and equipment to help improve your independence. Find out more today"
            />
            <PageUnderConstruction pageTitle='About Oak Tree Mobility'/>
        </>
    )
}
export default about