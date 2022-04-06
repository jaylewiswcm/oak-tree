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
      <div className='resource-grid'>
        {resources.map(item => 
            <>{item.type === pageType && item.resources.map(x => <Resource resource={x}/>)}</>
          )}
      </div>
</div>
  )
}

export default Resources