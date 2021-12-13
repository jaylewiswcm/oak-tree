import React, { ComponentElement } from 'react'
// Components
import GBInfo from './GBInfo';
import TPInfo from './TPInfo';
import OTInfo from './OTInfo';

interface ComponentProps {
    item : string
}

const ExpInfo = ({item}: ComponentProps) => {
    return (
        <div className={`exp-item ${item === '' && 'exp-item-hidden' }`}>
             {item && item === 'gb' && <GBInfo />}
             {item && item === 'tp' && <TPInfo />}
             {item && item === 'ot' && <OTInfo />}
        </div>
    )
}

export default ExpInfo;
