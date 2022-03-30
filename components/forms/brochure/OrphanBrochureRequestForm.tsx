import React, { useState } from 'react'
import InputMask from 'react-input-mask';

interface ComponentProps {
    productType : string
}

const BrochureRequestForm = ({productType}: ComponentProps) => {
    const [formData, setFormData] = useState({
        "title": '',
        'fname': '',
        'lname': '',
        'street-address': '',
        'postal-code': '',
        'tel': '',
        'email': '',
    },
)
const [formErrors, setFormErrors] = useState([
    {
        "field" : "title",
        "errors": {
            "error" : false,
            "type" : ''
        }
    },   
    {
        "field" : "fName",
        "errors": {
            "error" : false,
            "type" : ''
        }
    },   
    {
        "field" : "lName",
        "errors": {
            "error" : false,
            "type" : ''
        }
    },   
    {
        "field" : "street-address",
        "errors": {
            "error" : false,
            "type" : ''
        }
    },   
    {
        "field" : "postal-code",
        "errors": {
            "error" : false,
            "type" : ''
        }
    },   
    {
        "field" : "tel",
        "errors": {
            "error" : false,
            "type" : ''
        }
    },   
    {
        "field" : "email",
        "errors": {
            "error" : false,
            "type" : ''
        }
    },   
])

const RequestBrochure = (event:any) => {
    event.preventDefault() 
    let field: keyof typeof formData; 
    let index = 0;

    let updatedErrors = [...formErrors];

    for(field in formData) {
        let error = {
                'field': field, 
                'errors': { 
                    "error": false, 
                    "type": '' 
                }
        };
        // Empty field validation
        if(formData[field] === '') {
            error = {
                'field': field, 
                'errors': { 
                    "error": true, 
                    "type": 'This field cant be left empty' 
                }};
        }
        
        updatedErrors[index] = error;   
        setFormErrors(updatedErrors);

        index++;
    }
}

const onChange = (e:React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>
    ) => {
    setFormData({...formData, [e.target.name]: e.target.value})

    formErrors.map((field, index) => {
        if(field.field === e.target.name && field.errors.error === true){
            let updatedErrors = [...formErrors];
            let removeError ={
                'field': field.field, 
                'errors': { 
                    "error": false, 
                    "type": '' 
                }
            }
          
            updatedErrors[index] = removeError; 
            setFormErrors(updatedErrors);
        }
    })
}

  return (
    <form onSubmit={RequestBrochure} className='generic-form'>
    <div className='form-section'>
        <p className="section-heading">Personal Information</p>
        <div className={formErrors[0].errors.error ? 'input-wrapper select-wrapper errors' : 'input-wrapper select-wrapper'}>
            {/* <div className='radio-wrapper'>
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
            </div> */}
            <select name="title" id="title" value={formData.title} onChange={(e) => onChange(e)}>
                <option value="" disabled selected>Please select an option</option>
                <option value="mrs">Mrs</option>
                <option value="mr">Mr</option>
                <option value="ms">Ms</option>
                <option value="miss">Miss</option>
            </select>
            <label htmlFor='title'>What is your title? <span className='required'>*</span></label>
        </div>
        <div className={formErrors[1].errors.error ? 'input-wrapper errors' : 'input-wrapper'}>
            {formErrors.map(field => <>{field.field === 'fname' && field.errors.error && <p className='error-p'>{field.errors.type}</p>}</>)}
            <input type="text" id="fname" name="fname" placeholder='Enter your first name' autoComplete="given-name" value={formData.fname} onChange={(e) => onChange(e)} />
            <label htmlFor="fname">First name <span className='required'>*</span></label>
        </div>
        <div className={formErrors[2].errors.error ? 'input-wrapper errors' : 'input-wrapper'}>
            {formErrors.map(field => <>{field.field === 'lname' && field.errors.error && <p className='error-p'>{field.errors.type}</p>}</>)}
            <input type="text" id="lname" name="lname" placeholder='Enter your last name' autoComplete="family-name" value={formData.lname} onChange={(e) => onChange(e)} />
            <label htmlFor="lname">Last name <span className='required'>*</span></label>
        </div>
    </div>
    <div className="form-section">
        <p className="section-heading">Your Address</p>
        <div className={formErrors[3].errors.error ? 'input-wrapper errors' : 'input-wrapper'}>
            {formErrors.map(field => <>{field.field === 'street-address' && field.errors.error && <p className='error-p'>{field.errors.type}</p>}</>)}
            <input type="text" id="street-address" name="street-address" autoComplete="home address-line1" placeholder='Enter your street address' value={formData['street-address']} onChange={(e) => onChange(e)}  />
            <label htmlFor="street-address">Street Address <span className='required'>*</span></label>
        </div>
        <div className={formErrors[4].errors.error ? 'input-wrapper errors' : 'input-wrapper'}>
            {formErrors.map(field => <>{field.field === 'postal-code' && field.errors.error && <p className='error-p'>{field.errors.type}</p>}</>)}
            <InputMask 
                type="text"
                id="postal-code"
                name="postal-code"
                autoComplete="home postal-code"
                placeholder='Enter your postal code'
                value={formData['postal-code']}
                onChange={(e) => onChange(e)} 
                mask='**** ***' 
                >
                    
            </InputMask>
            {/* <input type="text" id="postal-code" name="postal-code" autoComplete="home postal-code" placeholder='Enter your postal code' value={formData['postal-code']} onChange={(e) => onChange(e)} /> */}
            <label htmlFor="postal-code">Postal Code <span className='required'>*</span></label>
        </div>
    </div>
    <div className="form-section">
        <p className="section-heading">Contact Information</p>
        <div className={formErrors[5].errors.error ? 'input-wrapper errors' : 'input-wrapper'}>
            {formErrors.map(field => <>{field.field === 'tel' && field.errors.error && <p className='error-p'>{field.errors.type}</p>}</>)}  
            <InputMask 
                id="tel"
                name="tel"
                autoComplete="tel"
                type="tel"
                placeholder='Enter your telephone number'
                mask='99999 999999' 
                value={formData.tel} 
                onChange={(e) => onChange(e)}>
                    
            </InputMask>
            {/* <input type="tel" id="tel" name="tel" autoComplete="tel" placeholder='Enter your telephone number' value={formData.tel} onChange={(e) => onChange(e)} /> */}
            <label htmlFor="tel">Phone Number <span className='required'>*</span></label>
        </div>
        <div className={formErrors[6].errors.error ? 'input-wrapper errors' : 'input-wrapper'}>
            {formErrors.map(field => <>{field.field === 'email' && field.errors.error && <p className='error-p'>{field.errors.type}</p>}</>)}
            <input type="email" id="email" name="email" autoComplete="email" placeholder='Enter your email address' value={formData.email} onChange={(e) => onChange(e)} />
            <label htmlFor="email">Email Address <span className='required'>*</span></label>
        </div>
    </div>
    <div className='form-section action-wrapper'>
        <input type="submit" value='Request Your Free Brochure' />
    </div>
</form>
  )
}


export default BrochureRequestForm;