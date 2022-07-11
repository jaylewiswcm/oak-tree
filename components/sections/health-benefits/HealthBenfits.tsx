import React from 'react'
import Image from 'next/image';

interface ComponentProps { 
  product : string
}

export const HealthBenfits = ({product}: ComponentProps) => {
  return (
    <div className='health-benefits'>
    <h5>Improve Your Quality Of Life</h5>
    <p className='subheading'>Oak Tree's {product} are beneficial if you suffer from:</p>
    <ul>
      { product === 'Bath Lifts' ? bathLiftBenefits.map((usp:any,index:number) => 
           <li key={index}>
            <div className="icon">
              <Image 
                src='/vectors/yellow-tick.svg'
                alt='Tick'
                layout='responsive'
                width='30'
                height='30'
              />
            </div>
            <p>{usp.name}</p>
         </li>
      ) :
      benefits.map((usp:any,index:number) => 
           <li key={index}>
            <div className="icon">
              <Image 
                src='/vectors/yellow-tick.svg'
                alt='Tick'
                layout='responsive'
                width='30'
                height='30'
              />
            </div>
            <p>{usp.name}</p>
         </li>
      )}
    </ul>
  </div>
  )
}

const bathLiftBenefits = [
  {
    "name": "Back problems"
  },
  {
    "name": "Circulatory issues"
  },
  {
    "name": "Hip replacement"
  },
  {
    "name": "Multiple Sclerosis"
  },
  {
    "name": "Oedema"
  },
  {
    "name": "Sciatica"
  },
  {
    "name": "Knee replacement"
  },
  {
    "name": "Stroke"
  },
  {
    "name": "Joint pain"
  },
]
const benefits = [
  {
    "name": "Arthritis"
  },
  {
    "name": "Back problems"
  },
  {
    "name": "Circulatory issues"
  },
  {
    "name": "COPD"
  },
  {
    "name": "Heart disease"
  },
  {
    "name": "Hip replacement"
  },
  {
    "name": "Knee replacement"
  },
  {
    "name": "Multiple Sclerosis"
  },
  {
    "name": "Oedema"
  },
  {
    "name": "Osteoporosis"
  },
  {
    "name": "Parkinson’s Disease"
  },
  {
    "name": "Stroke"
  }
]
