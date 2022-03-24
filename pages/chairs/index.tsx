import React from 'react'
import Image from 'next/image';
import Link from 'next/link'
import { NextSeo } from 'next-seo';
import { PageUnderConstruction } from '../../components/PageUnderConstruction';
const index = () => {
    return (
        <>
            <NextSeo  
                title="Rise and Recline Chairs | Oak Tree Mobility"
                description="Here at Oak Tree Mobility we offer a two-man white-glove delivery and installation service included in the price of all our chairs and beds. Find out more."
            />
            <PageUnderConstruction pageTitle='Rise and recline chairs'/>
        </>
    )
}

export default index;
