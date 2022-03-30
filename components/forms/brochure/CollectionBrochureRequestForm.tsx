import React, { useState } from 'react'
import InputMask from 'react-input-mask';
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

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

interface ComponentProps {
    productType : string
}

const CollectionBrochureRequestForm = ({productType}: ComponentProps) => {
    const [slideIndex, setSlideIndex] = useState(0);
    const [readyToSubmit, setReadyToSubmit] = useState(false);
     const [formData, setFormData] = useState([
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

    

    // for(field in formData[slideIndex]) {
    //     let error ={
    //             'field': field, 
    //             'errors': { 
    //                 "error": false, 
    //                 "type": '' 
    //             }
    //     };
    //     // Empty field validation
    //     if(formData[field] === '') {
    //         error = {
    //             'field': field, 
    //             'errors': { 
    //                 "error": true, 
    //                 "type": 'This field cant be left empty' 
    //             }};
    //     }
    //     // 
    //     updatedErrors[index] = error;   
    //     setFormErrors(updatedErrors);

    //     index++;
    // }
}

const onChange = (e:React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>, index: number) => {
    const name = e.target.name;
    let newData:Array<any> = [...formData];
    console.log(newData[index])
    newData[index][name] = e.target.value;

    setFormData(newData);

    // formErrors.map((field, index) => {
    //     if(field.field === e.target.name && field.errors.error === true){
    //         let updatedErrors = [...formErrors];
    //         let removeError ={
    //             'field': field.field, 
    //             'errors': { 
    //                 "error": false, 
    //                 "type": '' 
    //             }
    //         }
    //         updatedErrors[index] = removeError; 
    //         setFormErrors(updatedErrors);
    //     }
    // })
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
                index = 3;
                break;
        case 2: 
                index = 5
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
                    "type": 'This field cant be left empty' 
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
    <form onSubmit={RequestBrochure} className='generic-form collection-form'>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          navigation={{
            prevEl: '.form-prev',
          }} 
          onSlideChange={(index) => { setSlideIndex(index.activeIndex)}}
          onBeforeSlideChangeStart={() => {console.log('swiper changing')}}  
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
                <SelectInput 
                     className={formErrors[0].errors.error ? 'input-wrapper select-wrapper errors' : 'input-wrapper select-wrapper'}
                     error={formErrors[0].errors.type}
                     id="title"
                     name="title"
                     value={formData[0].title} 
                     onChange={(e:any) => onChange(e,0)} 
                     htmlFor="title"
                     label='What is your title?'
                     required={true}
                     options={['mrs','mr','ms','miss']}
                />
                <TextInput 
                    className={formErrors[1].errors.error ? 'input-wrapper errors' : 'input-wrapper'}
                    error={formErrors[1].errors.type}
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
                    className={formErrors[2].errors.error ? 'input-wrapper errors' : 'input-wrapper'}
                    error={formErrors[2].errors.type}
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
            <div className="form-section">
                <p className="section-heading">Your Address</p>
                <TextInput 
                    className={formErrors[3].errors.error ? 'input-wrapper errors' : 'input-wrapper'}
                    error={formErrors[3].errors.type}
                    id="street-address"
                    name="street-address"
                    autoComplete="home address-line1"
                    placeholder='Enter your last name'
                    value={formData[1]['street-address']} 
                    onChange={(e:any) => onChange(e,1)} 
                    htmlFor="street-address"
                    label='Street Address'
                    required={true}
                />
                <div className={formErrors[4].errors.error ? 'input-wrapper errors' : 'input-wrapper'}>
                    {formErrors.map(field => <>{field.field === 'postal-code' && field.errors.error && <p className='error-p'>{field.errors.type}</p>}</>)}
                    <InputMask 
                        type="text"
                        id="postal-code"
                        name="postal-code"
                        autoComplete="home postal-code"
                        placeholder='Enter your postal code'
                        value={formData[1]['postal-code']}
                        onChange={(e) => onChange(e, 1)} 
                        mask='**** ***' 
                        >
                            
                    </InputMask>
                    <label htmlFor="postal-code">Postal Code <span className='required'>*</span></label>
                </div>
            </div>
            </SwiperSlide>
            <SwiperSlide className='no-swipe'>
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
                        value={formData[2].tel} 
                        onChange={(e) => onChange(e,2)}>
                            
                    </InputMask>
                    <label htmlFor="tel">Phone Number <span className='required'>*</span></label>
                </div>
                <div className={formErrors[6].errors.error ? 'input-wrapper errors' : 'input-wrapper'}>
                    {formErrors.map(field => <>{field.field === 'email' && field.errors.error && <p className='error-p'>{field.errors.type}</p>}</>)}
                    <input type="email" id="email" name="email" autoComplete="email" placeholder='Enter your email address' value={formData[2].email} onChange={(e) => onChange(e,2)} />
                    <label htmlFor="email">Email Address <span className='required'>*</span></label>
                </div>
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