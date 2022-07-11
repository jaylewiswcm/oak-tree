import React, { useEffect, useState } from 'react'
// data
import faqs from "../../data/faqs/faqs.json";
import chairs from "../../data/faqs/chairCollection.json";
import { Accordion } from './Accordion';

interface StructeredData {
  "@context" : string
  "@type": string
  mainEntity: Schema[]
}

interface Schema {
  '@type': string
  name:string
  acceptedAnswer: {
    "@type": string
    text: string
  }
}

interface Faq {
  question: string
  answer: string
}

interface ComponentProps {
  type: string
}

export const FAQs = ({type}: ComponentProps) => {
  // const [faqList, setFaqList] = useState<Faq[]>([])
  const [faqSchema, setFaqSchema] = useState<StructeredData>()


  useEffect(() => {
    createStructeredDataSchema();
  },[])

  const createStructeredDataSchema = () => {
    let faqList = []
    // Populate array with related faq data based on props
    switch(type) {
      case 'faqs': 
        faqList = faqs;
        break;
      case 'chairs': 
        faqList = chairs;
        break;
      default:
        return;
    }  
    // New array for question schema
    const schemaArray:Schema[] = []
  
    faqList.map((faq, index) => {
      // Once loop goes past index of 1 return as we only want the first two entries
      if(index > 1) {
        return;
      }
      // Create questsion structed data schema
      const faqStructuredData =  {
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: `<p>${faq.answer}</p>`
          }
        }

        schemaArray.push(faqStructuredData);
        
    })

    setFaqSchema({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: schemaArray
    })
  }
  return (
  <>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
    <div className='faq-table'>
      {type === 'faqs' && faqs.map((item:any, index: number) => 
            <Accordion question={item.question} answer={item.answer} key={index}/>
        )}
      {type === 'chairs' && chairs.map((item:any, index: number) => 
            <Accordion question={item.question} answer={item.answer} key={index}/>
        )}
    </div>
  </>
  )
}
