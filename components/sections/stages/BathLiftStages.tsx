import React, { useState } from 'react'
import Image from 'next/image';

 const BathLiftStages = () => {
    const [stageIndex, setStageIndex] = useState(0);
  return (
    <div className='product-stages'>
    <div className='con-reg flex-row'>
           <div className='info'>
            <div className='button-wrapper'>
                <button onClick={() => setStageIndex(0)} className={stageIndex === 0 ? 'selected' : ''}>Getting in</button>
                <button onClick={() => setStageIndex(1)} className={stageIndex === 1 ? 'selected' : ''}>Soaking</button>
                <div className={`selected-bg index-${stageIndex}`}></div>
            </div>
            <div>
               <h3>Safe and Reliable</h3>
               <p className='subheading'>Packed with features that make it safe, meaning you can rely on it bath after bath.</p>
                <div className='list-wrapper'>
               <ul className={stageIndex == 0 ? 'stage-0 show-stage' : 'stage-1'}>
                    <li>A wall-mounted system means you can continue to use your bath like normal.</li>
                    <li>The bath lift always stays taut, making it safe and easy to use.</li>
                    <li>The belt attaches easily to the floor, meaning it’s simple to remove for guests who might not want to use the bath lift.</li>
               </ul>
               <ul className={stageIndex == 1 ? 'stage-1 show-stage' : 'stage-1'}>
                    <li>To control the bath lift, use either the wall mounted controls or the waterproof remote.</li>
                    <li>The Riviera allows you to sit right at the bottom of the bath and requires no alternations to your existing bath.</li>
               </ul>
               </div>
           </div>
           </div>
           <div className='image-wrapper'>
               
               <Image 
                    src={`/images/products/bath-lifts/the-riviera/riviera-product-${stageIndex === 0 ? '6' : '7'}.png`}
                    alt='The riviera getting in'
                    layout='responsive'
                    width='440'
                    height='435'
               />
           </div>
       </div>
   </div>

  )
}
export default BathLiftStages;