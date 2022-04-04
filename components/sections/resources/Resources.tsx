import React from 'react'

import { Video } from '../../video/Video';

const Resources = () => {
  return (
    <div className='resources con-reg'>
    <h6>Resources</h6>
      <div className='resource-grid'>
          <div className='resource'>
              <Video videoId="wlRVdd9s174" placeholder='/images/resources/ukts-placeholder.png' />
              <p className='subheading'>Our Occupational Therapist</p>
              <p className='heading'>UK Therapy Services Talk Chairs</p>
              <p className='link'>Watch Video</p>
          </div>
          <div className='resource'>
              <Video videoId="u9-WpUGw0NM" placeholder='/images/resources/ukts-placeholder.png' />
              <p className='subheading'>British Made</p>
              <p className='heading'>How We Make Your Chair</p>
              <p className='link'>Watch Video</p>
          </div>
          <div className='resource'>
              <Video videoId="vlsfU4fdZmk" placeholder='/images/resources/ukts-placeholder.png' />
              <p className='subheading'>The Oak Tree Touch</p>
              <p className='heading'>Unique High Leg Lift</p>
              <p className='link'>Watch Video</p>
          </div>
      </div>
</div>
  )
}

export default Resources