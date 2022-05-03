import React, { useState, useEffect } from 'react'
import InputMask from 'react-input-mask';
import { useRouter } from 'next/router';
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import swiper modules
import { Pagination, Navigation } from "swiper";
import SwiperNext from '../../buttons/SwiperNext';

// Components 
import { TextInput } from '../inputs/TextInput';
import { SelectInput } from '../inputs/SelectInput';
import { TelInput } from '../inputs/TelInput';
import { EmailInput } from '../inputs/EmailInput';

interface ComponentProps {
    productType : string
}

const CollectionBrochureRequestForm = ({productType}: ComponentProps) => {
    const router = useRouter()
    const [slideIndex, setSlideIndex] = useState(0);
    const [readyToSubmit, setReadyToSubmit] = useState(false);
     const [formData, setFormData] = useState([
        {
            // "title": '',
            'fname': '',
            'lname': '',
        },
        {
            'street-address': '',
            'postal-code': '',
        },
        {
            'tel': '',
            'email': '',
        },
     ])

const [formErrors, setFormErrors] = useState([
    // {
    //     "field" : "title",
    //     "errors": {
    //         "error" : false,
    //         "type" : ''
    //     }
    // },   
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

useEffect(() => {
    console.log(formErrors);
},[formErrors])

const RequestBrochure = (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault() 
    const sectionData = formData[formData.length - 1];
    let isError: boolean = false;
    let updatedErrors = [...formErrors];
    let index = 4;
    let field: keyof typeof sectionData; 
    for(field in sectionData) {

        let error = {
                'field': field, 
                'errors': { 
                    "error": false, 
                    "type": '' 
                }
        };
        
        // Empty field validation
        if(sectionData[field] === '') {
            console.log(`Field: ${field}, index: ${index}`)
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
        router.push('/thank-you-for-your-request')
    } 
}

const onChange = (e:React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>, index: number) => {
    const name = e.target.name;
    let newData:Array<any> = [...formData];

    newData[index][name] = e.target.value;

    setFormData(newData);
}
const validateFormSectionBeforeChangingSlide = (event:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    // Get the form section based on slideIndex
    const sectionData = formData[slideIndex];
    // Define type for new field variable
    let field: keyof typeof sectionData; 
    // Assign Index variable appropriately
    let index: number = 0;
    switch(slideIndex) {
        case 0: 
                index = 0;
                break;
        case 1: 
                index = 2;
                break;
        case 2: 
                index = 4
                break;
        default: 
            index = 0;
            return;

    }
    let isError: boolean = false;
    // Create new error array with existing form error state
    let updatedErrors = [...formErrors];
    for(field in sectionData) {
        // Reset errors
        let error = {
                'field': field, 
                'errors': { 
                    "error": false, 
                    "type": '' 
                }
        };
        
        // Empty field validation
        if(sectionData[field] === '') {
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
    return isError;
}

  return (
    <form onSubmit={(e) => RequestBrochure(e)} className='generic-form collection-form'>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          navigation={{
            prevEl: '.form-prev',
          }} 
          onSlideChange={(index) => { setSlideIndex(index.activeIndex)}}
          onReachEnd={() => {setReadyToSubmit(true)}}      
          noSwipingClass="no-swipe"
          pagination={{
            type: "progressbar",
            el: '.progress-bar'
          }}
          modules={[Pagination, Navigation]}
          className="mySwiper"
          >

            <SwiperSlide className='no-swipe'>
                <div className='form-section'>
                <p className="section-heading">Personal Information</p>
                {/* <SelectInput 
                     className={formErrors[0].errors.error ? 'input-wrapper select-wrapper errors' : 'input-wrapper select-wrapper'}
                     error={formErrors[0].errors.type}
                     id="title"
                     name="title"
                     value={formData[0].title} 
                     onChange={(e:any) => onChange(e,0)} 
                     htmlFor="title"
                     label='What is your title?'
                     placeholder='Select Title'
                     required={true}
                     options={[{"name": 'Mrs', "value": 'mrs'},{"name": 'Mr', "value": 'mr'},{"name": 'Ms', "value": 'ms'},{"name": 'Miss', "value": 'Miss'}]}
                /> */}
                <TextInput 
                    className={formErrors[0].errors.error ? 'input-wrapper errors' : 'input-wrapper'}
                    error={formErrors[0].errors.type}
                    id="fname"
                    name="fname"
                    autoComplete="given-name"
                    placeholder='Enter your first name'
                    value={formData[0].fname} 
                    onChange={(e:any) => onChange(e,0)} 
                    htmlFor="fname"
                    label='First name'
                    required={true}
                />
                <TextInput 
                    className={formErrors[1].errors.error ? 'input-wrapper errors' : 'input-wrapper'}
                    error={formErrors[1].errors.type}
                    id="lname"
                    name="lname"
                    autoComplete="family-name"
                    placeholder='Enter your last name'
                    value={formData[0].lname} 
                    onChange={(e:any) => onChange(e,0)} 
                    htmlFor="lname"
                    label='Last name'
                    required={true}
                />
                </div>
            </SwiperSlide>
            <SwiperSlide className='no-swipe' >
            <div  className="form-section">
                <p className="section-heading">Your Address</p>
                <TextInput 
                    className={formErrors[2].errors.error ? 'input-wrapper errors' : 'input-wrapper'}
                    error={formErrors[2].errors.type}
                    id="street-address"
                    name="street-address"
                    autoComplete="home address-line1"
                    placeholder='Enter your street address'
                    value={formData[1]['street-address']} 
                    onChange={(e:any) => onChange(e,1)} 
                    htmlFor="street-address"
                    label='Street Address'
                    required={true}
                />
    
                <TextInput 
                    className={formErrors[3].errors.error ? 'input-wrapper errors' : 'input-wrapper'}
                    error={formErrors[3].errors.type}
                    id="postal-code"
                    name="postal-code"
                    autoComplete="home postal-code"
                    placeholder='Enter your Postal Code'
                    value={formData[2]['postal-code']} 
                    onChange={(e:any) => onChange(e,1)} 
                    htmlFor="postal-code"
                    label='Postal Code'
                    required={true}
                />
            </div>
            </SwiperSlide>
            <SwiperSlide className='no-swipe'>
            <div className="form-section">
                <p className="section-heading">Contact Information</p>
                <TelInput 
                    className={formErrors[4].errors.error ? 'input-wrapper errors' : 'input-wrapper'}
                    error={formErrors[4].errors.type}
                    id="tel"
                    placeholder='Enter your telephone number'
                    value={formData[2]['tel']} 
                    onChange={(e:any) => onChange(e,2)} 
                    htmlFor="tel"
                    required={true}
                />
                <EmailInput 
                    className={formErrors[5].errors.error ? 'input-wrapper errors' : 'input-wrapper'}
                    error={formErrors[5].errors.type}
                    id="email"
                    placeholder='Enter your email address'
                    value={formData[2]['email']} 
                    onChange={(e:any) => onChange(e,2)} 
                    htmlFor="email"
                    required={true}
                />
            </div>
            </SwiperSlide>
            <div className='form-button-wrapper'>
            <button className='form-prev form-buttons' onClick={() => setReadyToSubmit(false)}>Back</button>
            <div className='form-section action-wrapper'>
                <input type="submit" value='Request Your Free Brochure' />
            </div>
            {readyToSubmit ? <input type="submit" value='Request Brochure' /> : <SwiperNext func={(e: any) => validateFormSectionBeforeChangingSlide(e)} classNames='form-next form-buttons' />}  
            </div>
            <div className='progress-bar'></div>
            <div className='step-counter'><p>Step {slideIndex + 1} / 3</p></div>
        </Swiper>
</form>
  )
}


export default CollectionBrochureRequestForm;