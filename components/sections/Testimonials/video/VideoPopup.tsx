import React, { useEffect } from 'react'
// Components
import Video from './Video';
import VideoCarousel from './VideoCarousel';
import Modal from '../../../modal/Modal'

interface ComponentProps {
    selectedCx: {
        name: string
        location: string
        product: {
            name: string
            url: string
        }
        thumbnail: string,
        videoId: string
      }
      show: boolean
      setShow: any
}

const VideoPopup = ({selectedCx, show, setShow}:ComponentProps ) => {

  return (
    // <div className={show ? 'modal show-modal' : 'modal'}>
    //     <div className='modal-inner'>
            <Modal  classNames='' show={show}>
                <VideoCarousel  videoId={selectedCx.videoId} setShow={setShow} show={show}/>
            </Modal>
    //     </div>
    // </div>
  )
}

export default VideoPopup;
