import React, { useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { useRouter } from 'next/router'
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
import { ProductInterest } from '../inputs/ProductInterest';

interface ComponentProps  {
    setShow: any
}

const SwiperBrochureRequestFormWithProductInterest = ({setShow}: ComponentProps) => {
    const router = useRouter()
    const [slideIndex, setSlideIndex] = useState(0);
    const [readyToSubmit, setReadyToSubmit] = useState(false);
     const [formData, setFormData] = useState([
        {
            "product_interest" : ''
        },
        {
            "title": '',
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
    {
        "field": "product_interest",
        "errors" : {
            "error" : false,
            "type": ''
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

const RequestBrochure = (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault() 
    const sectionData = formData[formData.length - 1];
    let isError: boolean = false;
    let updatedErrors = [...formErrors];
    let index = 6;
    let field: keyof typeof sectionData; 
    for(field in sectionData) {
        console.log(field);
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
    if(isError === false) {
        router.push('/thank-you-for-your-request')
        setShow(false)
    } 
}

const onChange = (e:React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>, index: number) => {
    const name = e.target.name;
    let newData:Array<any> = [...formData];
    console.log(newData[index])
    newData[index][name] = e.target.value;
    setFormData(newData);
}
const validateFormSectionBeforeChangingSlide = (event:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    
    // Add Section Validation
    const sectionData = formData[slideIndex];
    let field: keyof typeof sectionData; 
    let index: number = 0;
    switch(slideIndex) {
        case 0: 
                index = 0;
                break;
        case 1: 
                index = 1;
                break;
        case 2: 
                index = 4;
                break;
        case 2: 
                index = 6;
                break;
        default: 
            index = 0;
            return;

    }
    let isError: boolean = false;
    let updatedErrors = [...formErrors];
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
                <ProductInterest 
                    className={formErrors[0].errors.error ? 'input-wrapper product-interest-wrapper errors' : 'input-wrapper product-interest-wrapper'}
                    error={formErrors[0].errors.type}
                    onChange={(e:any) => onChange(e,0)} 
                    productChecked={formData[0].product_interest}
                />
            </div>
              </SwiperSlide>
            <SwiperSlide className='no-swipe'>
                <div className='form-section'>
                <p className="section-heading">Personal Information</p>
                <SelectInput 
                     className={formErrors[1].errors.error ? 'input-wrapper select-wrapper errors' : 'input-wrapper select-wrapper'}
                     error={formErrors[1].errors.type}
                     id="title"
                     name="title"
                     value={formData[1].title} 
                     onChange={(e:any) => onChange(e,1)} 
                     htmlFor="title"
                     label='What is your title?'
                     placeholder='Select title'
                     required={true}
                     options={[{"name": 'Mrs', "value": 'mrs'},{"name": 'Mr', "value": 'mr'},{"name": 'Ms', "value": 'ms'},{"name": 'Miss', "value": 'Miss'}]}
                />
                <TextInput 
                    className={formErrors[2].errors.error ? 'input-wrapper errors' : 'input-wrapper'}
                    error={formErrors[2].errors.type}
                    id="fname"
                    name="fname"
                    autoComplete="given-name"
                    placeholder='Enter your first name'
                    value={formData[1].fname} 
                    onChange={(e:any) => onChange(e,1)} 
                    htmlFor="fname"
                    label='First name'
                    required={true}
                />
                <TextInput 
                    className={formErrors[3].errors.error ? 'input-wrapper errors' : 'input-wrapper'}
                    error={formErrors[3].errors.type}
                    id="lname"
                    name="lname"
                    autoComplete="family-name"
                    placeholder='Enter your last name'
                    value={formData[1].lname} 
                    onChange={(e:any) => onChange(e,1)} 
                    htmlFor="lname"
                    label='Last name'
                    required={true}
                />
                </div>
            </SwiperSlide>
            <SwiperSlide className='no-swipe' >
            <div className="form-section">
                <p className="section-heading">Your Address</p>
                <TextInput 
                    className={formErrors[4].errors.error ? 'input-wrapper errors' : 'input-wrapper'}
                    error={formErrors[4].errors.type}
                    id="street-address"
                    name="street-address"
                    autoComplete="home address-line1"
                    placeholder='Enter your last name'
                    value={formData[2]['street-address']} 
                    onChange={(e:any) => onChange(e,2)} 
                    htmlFor="street-address"
                    label='Street Address'
                    required={true}
                />
                <TextInput 
                    className={formErrors[5].errors.error ? 'input-wrapper errors' : 'input-wrapper'}
                    error={formErrors[5].errors.type}
                    id="postal-code"
                    name="postal-code"
                    autoComplete="home postal-code"
                    placeholder='Enter your Postal Code'
                    value={formData[2]['postal-code']} 
                    onChange={(e:any) => onChange(e,2)} 
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
                    className={formErrors[6].errors.error ? 'input-wrapper errors' : 'input-wrapper'}
                    error={formErrors[6].errors.type}
                    id="tel"
                    placeholder='Enter your telephone number'
                    value={formData[3]['tel']} 
                    onChange={(e:any) => onChange(e,3)} 
                    htmlFor="tel"
                    required={true}
                />
                <EmailInput 
                    className={formErrors[7].errors.error ? 'input-wrapper errors' : 'input-wrapper'}
                    error={formErrors[7].errors.type}
                    id="email"
                    placeholder='Enter your email address'
                    value={formData[3]['email']} 
                    onChange={(e:any) => onChange(e,3)} 
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
            <div className='step-counter'><p>Step {slideIndex + 1} / 4</p></div>
        </Swiper>
</form>
  )
}


export default SwiperBrochureRequestFormWithProductInterest;
