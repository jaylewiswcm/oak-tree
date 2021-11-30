import React from 'react'

interface ComponentProps {
    index: string,
    title: string,
    content: string,
}

const OrphanReasons = ({index, title, content}: ComponentProps) => {
    return (
        <div className="reason">
            <div className='top'>
                <p className='reason-number'>{index}</p>
                <p className='reason-title'>{title}</p>
            </div>
            <div className='reason-content'>
                <p>{content}</p>
            </div>
        </div>

    )
}

export default OrphanReasons;