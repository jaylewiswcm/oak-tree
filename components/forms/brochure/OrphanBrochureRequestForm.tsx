import React, { useState } from 'react'
import { useRouter } from 'next/router';
// Input components
import {SelectInput} from '../inputs/SelectInput';
import {TextInput} from '../inputs/TextInput';
import {EmailInput} from '../inputs/EmailInput';
import {TelInput} from '../inputs/TelInput';
import {PostCodeInput} from '../inputs/PostCodeInput';

interface ComponentProps {
    productType : string
}

const BrochureRequestForm = ({productType}: ComponentProps) => {
    const router = useRouter()
    const [formData, setFormData] = useState({
        "title": '',
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
    let isError: boolean = false;
    let updatedErrors = [...formErrors];
    let index = 0;
    let field: keyof typeof formData; 
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
                    "type": "Please don't leave field blank"
                }};
                isError = true;
        }
        
        updatedErrors[index] = error;   
        setFormErrors(updatedErrors);
        index++;
    }
    if(isError === false) {
        router.push('/thank-you-for-your-request');
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
    <form onSubmit={RequestBrochure} className='generic-form orphan-form'>
        <div className='tight-form-wrapper'>
            <SelectInput 
                     className={formErrors[0].errors.error ? 'input-wrapper select-wrapper errors' : 'input-wrapper select-wrapper'}
                     error={formErrors[0].errors.type}
                     id="title"
                     name="title"
                     value={formData.title} 
                     onChange={(e:any) => onChange(e)} 
                     htmlFor="title"
                     label='Your title'
                     placeholder='Title'
                     required={true}
                     options={['mrs','mr','ms','miss']}
            />
                <TextInput 
                    className={formErrors[1].errors.error ? 'input-wrapper errors' : 'input-wrapper'}
                    error={formErrors[1].errors.type}
                    id="lname"
                    name="lname"
                    autoComplete="family-name"
                    placeholder='Enter your last name'
                    value={formData.lname} 
                    onChange={(e:any) => onChange(e)} 
                    htmlFor="lname"
                    label='Last name'
                    required={true}
                />
            </div>
            <div className='tight-form-wrapper'>
                <PostCodeInput 
                    className={formErrors[2].errors.error ? 'input-wrapper post-code-wrapper errors' : 'input-wrapper post-code-wrapper'}
                    error={formErrors[2].errors.type}
                    id="postal-code"
                    placeholder='Enter your postal code'
                    value={formData['postal-code']} 
                    onChange={(e:any) => onChange(e)} 
                    htmlFor="postal-code'"
                    required={true}
                />
                <TextInput 
                    className={formErrors[3].errors.error ? 'input-wrapper errors' : 'input-wrapper'}
                    error={formErrors[3].errors.type}
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
                </div>
                <TelInput 
                    className={formErrors[4].errors.error ? 'input-wrapper errors' : 'input-wrapper'}
                    error={formErrors[4].errors.type}
                    id="tel"
                    placeholder='Enter your telephone number'
                    value={formData['tel']} 
                    onChange={(e:any) => onChange(e)} 
                    htmlFor="tel"
                    required={true}
                />
                <EmailInput 
                    className={formErrors[5].errors.error ? 'input-wrapper errors' : 'input-wrapper'}
                    error={formErrors[5].errors.type}
                    id="email"
                    placeholder='Enter your email address'
                    value={formData['email']} 
                    onChange={(e:any) => onChange(e)} 
                    htmlFor="email"
                    required={true}
                />
    <div className='form-section action-wrapper'>
        <input type="submit" value='Request Your Free Brochure' />
    </div>
</form>
  )
}


export default BrochureRequestForm;