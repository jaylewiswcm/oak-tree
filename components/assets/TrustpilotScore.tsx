import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import axios from 'axios';
import useSWR from 'swr';

const fetcher = (url:string) =>  axios.get(url).then(res => res.data);

export const TrustpilotScore = () => {
    const [stars, setStarRating] = useState('');
    const { data, error } = useSWR('/api/trustpilotData', fetcher)

    useEffect(() => {
        if(data) {
            const starRating = data.score.stars.toString().split('.').join('_');
        
            setStarRating(starRating);
        }        
    },[data])

    if(!data) {
        return null;
    }

    const { numberOfReviews, score } = data;

  return (
    <div className='tp-logo'>
        <div className='logo'>
            <Image
                src='/trustpilot/trustpilot-logo.svg'
                alt='Trust pilot logo'
                layout='responsive'
                width='107'
                height='27'
            />
        </div>
        <div className='stars'>
            <Image 
                src={`/trustpilot/star-ratings/${stars}-star.svg`}
                alt='Trust pilot logo'
                layout='responsive'
                width='107'
                height='27'
            />
        </div>
        <p>TrustScore <span>{score.trustScore}</span></p>
        <p><span>{numberOfReviews.total}</span> Reviews</p>
    </div>
  )
}
