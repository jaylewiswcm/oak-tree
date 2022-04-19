import React, { useState } from 'react'
// data 
import resources from '../../../data/resources/resources.json';
// components
import {Resource} from './Resource';

interface ComponentProps {
  pageType: string
}

const Resources = ({pageType}: ComponentProps) => {
  return (
    <div className='resources con-reg'>
    <h6>Resources</h6>
        {resources.map((item, index) => 
            <div className='resource-grid' key={index}>{item.type === pageType && item.resources.map((x, index) => <Resource resource={x} key={index}/>)}</div>
          )}
</div>
  )
}

export default Resources