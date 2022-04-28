import React, {useState} from 'react'
import Image from 'next/image';

interface ComponentProps {
    question: string
    children: any
}

export const QuestionAccordian = ({question, children}: ComponentProps) => {
    const [isOpen, toggleOpen] = React.useState(true);
    return (
    <div className='question'>
    <div className='top' onClick={() => toggleOpen(isOpen ? false : true)}>
        <p>{question}</p>
        <span className='icon-wrapper'>
            <Image 
                src={`/buttons/${isOpen ? 'minus' : 'plus'}-dark-green.svg`}
                alt='Toggle accordian icon'
                layout='responsive'
                width='15'
                height='15'
            />
        </span>
    </div>
    <div className={`answer ${isOpen ? 'open' : ''}`}>
        {children}
    </div>
</div>
  )
}
