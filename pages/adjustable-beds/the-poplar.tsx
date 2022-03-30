import React from 'react'
import { NextSeo } from 'next-seo';
import { PageUnderConstruction } from '../../components/PageUnderConstruction';
const thePoplar = () => {
    return (
        <>
            <NextSeo  
                title="The Poplar | Oak Tree Mobility"
                description="Here at Oak Tree Mobility we offer a two-man white-glove delivery and installation service included in the price of all our chairs and beds. Find out more."
            />
            <PageUnderConstruction pageTitle='The Poplar'/>
        </>
    )
}
export default thePoplar;