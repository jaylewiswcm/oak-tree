import React from 'react'
import Image from 'next/image';
// Components
import { Fabric } from './Fabric';
// data
import chairFabrics from '../../../data/fabrics/chair_fabrics.json';

interface ComponentProps {
    setShow: any
}

export const FabricSelection = ({setShow}: ComponentProps) => {
  return (
    <div className='fabric-selection-modal'>
        <button className='close-btn' onClick={() => setShow(false)}>
            <div className='cross-icon'>
                <Image 
                    src='/buttons/modal-close.svg'
                    alt='close cross'
                    layout='responsive'
                    width='40'
                    height='40'
                />
            </div>
        </button>
        <div className='inner-border'></div>
            <p className='modal-heading'>Discover Our Fabrics</p>
            <p>Create your perfect chair with our wide selection of high quality fabrics and leather.</p>
            <div className='fabric-grid'>
                { chairFabrics.map((fabric, index) => 
                    <Fabric fabric={fabric} key={index} />
                )}  
            </div>
    </div>
  )
}
