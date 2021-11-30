import React from 'react'
import Image from 'next/image';

interface ComponentProps {
    colour: string
}

const Tick = ({colour}: ComponentProps) => {
    return (
        <>
            <Image 
                src={`/images/icons/tick-${colour}.svg`}
                alt='Tick'
                width='20'
                height='20'
            />
        </>
    )
}

export default Tick;