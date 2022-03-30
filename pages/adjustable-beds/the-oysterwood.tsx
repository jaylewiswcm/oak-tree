import React from 'react'
import { NextSeo } from 'next-seo';
import { PageUnderConstruction } from '../../components/PageUnderConstruction';
const theOysterwood = () => {
    return (
        <>
            <NextSeo  
                title="The Oysterwood | Oak Tree Mobility"
                description="Here at Oak Tree Mobility we offer a two-man white-glove delivery and installation service included in the price of all our chairs and beds. Find out more."
            />
             <PageUnderConstruction pageTitle='The Oysterwood'/>
        </>
    )
}
export default theOysterwood;