import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { setCookie, getCookie } from 'cookies-next';
// Context 
import { useAppContext } from '../../context/state';

export function SetCookies() {
    const router = useRouter();
    const { assignAdCookies, adCookies } = useAppContext();
    useEffect(() => {
        setCookiesBasedOnParams()
    }, [router]);

    const setCookiesBasedOnParams = () => {
        const params = router.query;

        for (const [key, value] of Object.entries(params)) {
                switch(key) {
                    case 'ref': 
                            setCookie(key, value);
                            break;
                    case 'campaign': 
                            setCookie(key, value);
                            break;
                    case 'infinity': 
                            setCookie(key, value);
                            break;
                    case 'gclid': 
                            setCookie(key, value);
                            break;
                    default: 
                        return;
                }
          }
    }
  
    return null;
}
export function GetCookies() {
    const router = useRouter();
    const { assignAdCookies } = useAppContext();

    useEffect(() => {
        assignAdCookies({
            'lead_source' : getCookie('ref'),
            'ad_campaign' : getCookie('campaign'),
            'gclid' : getCookie('gclid'),
        })
    }, [router]);

    return null;
}