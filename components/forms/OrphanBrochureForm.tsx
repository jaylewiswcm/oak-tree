import React from 'react'

interface ComponentProps {
  productType: string
}

const OrphanBrochureForm = ({productType}: ComponentProps) => {

  const RequestBrochure = (event:any) => {
    event.preventDefault() 
  }

  return (
    <div className='form'>
    <div className='form-title'>
        <h1>Request Your <span className='oaktree-green'>FREE</span> Brochure</h1>
        <p>Get our new brochure delivered to your door!</p>
    </div>
    <form onSubmit={RequestBrochure}>
        <div className='form-section'>
            <p className="section-heading">Personal Information</p>
            <div className='input-wrapper'>
                <div className='radio-wrapper'>
                    <div className='radio'>
                        <input type="radio" id="Mrs" name="title" value="Mrs"  />
                        <label htmlFor="Mrs">Mrs</label>
                        <p>Mrs</p>
                    </div>
                    <div className='radio'>
                        <input type="radio" id="Mr" name="title" value="Mr" />
                        <label htmlFor="Mr">Mr</label>
                        <p>Mr</p>
                    </div>
                    <div className='radio'>
                        <input type="radio" id="Ms" name="title" value="Ms"/>
                        <label htmlFor="Ms">Ms</label>
                        <p>Ms</p>
                    </div>
                    <div className='radio'>
                        <input type="radio" id="Miss" name="title" value="Miss" />
                        <label htmlFor="Miss">Miss</label>
                        <p>Miss</p>
                    </div>
                </div>
                <p className='label'>What is your title? <span className='required'>*</span></p>
            </div>
            <div className='input-wrapper'>
                <input type="text" id="fname" name="fname" placeholder='Enter your first name' autoComplete="given-name"/>
                <label htmlFor="fname">First name <span className='required'>*</span></label>
            </div>
            <div className='input-wrapper'>
                <input type="text" id="lname" name="lname" placeholder='Enter your last name' autoComplete="family-name"/>
                <label htmlFor="lname">Last name <span className='required'>*</span></label>
            </div>
        </div>
        <div className="form-section">
            <p className="section-heading">Your Address</p>
            <div className="input-wrapper">
                <input type="text" id="street-address" name="street-address" autoComplete="home address-line1" placeholder='Enter your street address' />
                <label htmlFor="street-address">Street Address <span className='required'>*</span></label>
            </div>
            <div className="input-wrapper">
                <input type="text" id="postal-code" name="postal-code" autoComplete="home postal-code" placeholder='Enter your postal code' />
                <label htmlFor="postal-code">Postal Code <span className='required'>*</span></label>
            </div>
        </div>
        <div className="form-section">
            <p className="section-heading">Contact Information</p>
            <div className="input-wrapper">
                <input type="tel" id="tel" name="tel" autoComplete="tel" data-inputmask="'mask': '9999 9999 9999 9999'" placeholder='Enter your telephone number' />
                <label htmlFor="tel">Phone Number <span className='required'>*</span></label>
            </div>
            <div className="input-wrapper">
                <input type="email" id="email" name="email" autoComplete="email" placeholder='Enter your email address' />
                <label htmlFor="email">Email Address <span className='required'>*</span></label>
            </div>
        </div>
        <div className='form-section action-wrapper'>
            <input type="submit" value='Request Your Free Brochure' />
        </div>
    </form>
</div>
  )
}

export default OrphanBrochureForm;
