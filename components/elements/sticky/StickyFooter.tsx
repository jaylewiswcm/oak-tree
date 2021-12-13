import React from 'react'

const StickyFooter = () => {
    return (
        <div className='sticky-footer hide'>
            <div className='container-regular inner-wrapper'>
                <div className='number-wrapper'>
                    <p>Freephone</p>
                    <p className='number'>0808 258 3061</p>
                </div>
                <div className='sticky-cta'>
                    <div className='icon-wrapper'></div>
                    <p>Request your<br/><span className='emp'>Free</span> Brochure</p>
                </div>
            </div>
        </div>
    )
}

export default StickyFooter;