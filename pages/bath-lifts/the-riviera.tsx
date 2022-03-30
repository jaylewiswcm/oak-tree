import React from 'react'
import { NextSeo } from 'next-seo';
import { PageUnderConstruction } from '../../components/PageUnderConstruction';

const theRiviera = () => {
    return (
        <>
            <NextSeo  
                title="The Riviera | Oak Tree Mobility"
                description="Here at Oak Tree Mobility we offer a two-man white-glove delivery and installation service included in the price of all our chairs and beds. Find out more."
            />
            <PageUnderConstruction pageTitle='The Riviera'/>
        </>
    )
}
export default theRiviera;