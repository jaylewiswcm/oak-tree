import React, { useState } from 'react'
import InputMask from 'react-input-mask';
// Input Components
import { SelectInput } from '../inputs/SelectInput';
import { TextInput } from '../inputs/TextInput';
import { TelInput } from '../inputs/TelInput';
import { EmailInput } from '../inputs/EmailInput';
import { PostCodeInput } from '../inputs/PostCodeInput';

const PopupBrochureRequestForm = () => {
    const [formData, setFormData] = useState({
        "productType": '',
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
        "field" : "productType",
        "errors": {
            "error" : false,
            "type" : ''
        }
    },   
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
      <div className='pop-up-form-wrapper'>
          <div className='form-top'>
              <h6>Request a brochure today</h6>
              <p className='supporting-text'>We're open following strict government guidelines, so get our new brochure delivered to your door!</p>
          </div>
        <form onSubmit={RequestBrochure} className='generic-form'>
        <div className='form-section'>
            <p className="section-heading">Personal Information</p>
            <SelectInput 
                        className={formErrors[1].errors.error ? 'input-wrapper select-wrapper errors' : 'input-wrapper select-wrapper'}
                        error={formErrors[1].errors.type}
                        id="title"
                        name="title"
                        value={formData.title} 
                        onChange={(e:any) => onChange(e)} 
                        htmlFor="title"
                        label='What is your title?'
                        required={true}
                        options={['mrs','mr','ms','miss']}
            />
            <TextInput 
                        className={formErrors[2].errors.error ? 'input-wrapper errors' : 'input-wrapper'}
                        error={formErrors[2].errors.type}
                        id="fname"
                        name="fname"
                        autoComplete="given-name"
                        placeholder='Enter your first name'
                        value={formData.fname} 
                        onChange={(e:any) => onChange(e)} 
                        htmlFor="fname"
                        label='First name'
                        required={true}
                    />
                <TextInput 
                        className={formErrors[3].errors.error ? 'input-wrapper errors' : 'input-wrapper'}
                        error={formErrors[3].errors.type}
                        id="lname"
                        name="lname"
                        autoComplete="given-name"
                        placeholder='Enter your first name'
                        value={formData.lname} 
                        onChange={(e:any) => onChange(e)} 
                        htmlFor="lname"
                        label='Last name'
                        required={true}
                />
        </div>
        <div className="form-section">
            <p className="section-heading">Your Address</p>
                <TextInput 
                        className={formErrors[4].errors.error ? 'input-wrapper errors' : 'input-wrapper'}
                        error={formErrors[4].errors.type}
                        id="street-address"
                        name="street-address"
                        autoComplete="home address-line1"
                        placeholder='Enter your last name'
                        value={formData['street-address']} 
                        onChange={(e:any) => onChange(e)} 
                        htmlFor="street-address"
                        label='Street Address'
                        required={true}
                    />
            <PostCodeInput 
                    className={formErrors[5].errors.error ? 'input-wrapper errors' : 'input-wrapper'}
                    error={formErrors[5].errors.type}
                    id="postal-code"
                    htmlFor="postal-code"
                    placeholder='Enter your postal code'
                    value={formData['postal-code']}
                    onChange={(e:any) => onChange(e)} 
                    required={true}
            />
        </div>
        <div className="form-section">
            <p className="section-heading">Contact Information</p>
            <TelInput 
                className={formErrors[6].errors.error ? 'input-wrapper errors' : 'input-wrapper'}
                error={formErrors[6].errors.type}
                id="tel"
                value={formData.tel} 
                onChange={(e:any) => onChange(e)} 
                htmlFor="tel"
                required={true}
                placeholder='Enter your telephone number'
            />
            <EmailInput 
                className={formErrors[7].errors.error ? 'input-wrapper errors' : 'input-wrapper'}
                error={formErrors[7].errors.type}
                id="email"
                value={formData.email} 
                onChange={(e:any) => onChange(e)} 
                htmlFor="email"
                required={true}
                placeholder="Enter your email address"
            />
        </div>
        <div className='form-section action-wrapper'>
            <input type="submit" value='Request Your Free Brochure' />
        </div>
    </form>
</div>
  )
}


export default PopupBrochureRequestForm;