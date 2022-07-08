import React, { useState, useCallback } from 'react'
import Router from 'next/router'
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
// Components
import {TextInput} from '../inputs/TextInput';
import {EmailInput} from '../inputs/EmailInput';
import {TelInput} from '../inputs/TelInput';
import { PostCodeInput } from '../inputs/PostCodeInput';
import { ProductInterest } from '../inputs/ProductInterest';
// Import Swiper
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import swiper modules
import { Pagination, Navigation } from "swiper";
import SwiperNext from '../../buttons/SwiperNext';

interface ComponentProps {
    setShow : any
}

interface FormData {
    productInterest: string
    fname: string
    lname: string
    postalCode: string
    streetAddress: string
    tel:string
    email: string
    productInterestErrors: string
    sectionOneErrors : {
        fnameError: string
        lnameError: string
    },
    sectionTwoErrors: {
        postalCodeError:string
        streetAddressError: string
    },
    sectionThreeErrors: {
        telError: string
        emailError: string  
    },
  slideIndex: number
  readyToSubmit: false,
  token: string
}

 const PopupGenericForm = ({setShow}: ComponentProps) => {
    const [formData, setFormData] = useState({
        productInterest: "",
        fname: "",
        lname: "",
        postalCode: "",
        streetAddress: "",
        tel:"",
        email: "",
    })
    const [errors, setErrors] = useState({
        productInterestErrors: "",
        sectionOneErrors : {
            fnameError: "",
            lnameError: "",
        },
        sectionTwoErrors: {
            postalCodeError:"",
            streetAddressError: ""
        },
        sectionThreeErrors: {
            telError: "",
            emailError: "",  
        },
    })
    const [slideIndex, setSlideIndex] = useState(0)
    const [readyToSubmit, setReadyToSubmit] = useState(false)

    const onChange = (event: any) => {
        // Camelcase input name to relate name to state
        const name = event.target.name.replace(/-([a-z])/g, (g:any) => { return g[1].toUpperCase()});
        setFormData({...formData, 
            [name] : event.target.value
        })
        const productInterest = errors.productInterestErrors;
        const sectionOne:any = errors.sectionOneErrors;
        const sectionTwo:any = errors.sectionTwoErrors;
        const sectionThree:any = errors.sectionThreeErrors;

        const errorName:string = name + "Error"; 

        switch(slideIndex) {
            case 0: 
                if(productInterest !== '' ) {
                    validate(slideIndex);
                }
                break;
            case 1: 
                if(sectionOne[errorName] !== '' ) {
                    validate(slideIndex);
                }
                break;
            case 2: 
                if(sectionTwo[errorName] !== '') {              
                    validate(slideIndex);
                }
                break;
            case 3: 
                if(sectionThree[errorName] !== '') {     
                    console.log(slideIndex)         
                    validate(slideIndex);
                }
                break;
            default: 
                return;
        }
    }

    const validate = (index:number) => {
        console.log('Validation in process')
        let productInterestErrors = '';
        let sectionOneErrors= {
            fnameError: "",
            lnameError: ""
        };
        let sectionTwoErrors= {
            postalCodeError: "",
            streetAddressError: ""
        };
        let sectionThreeErrors= {
            telError: "",
            emailError: ""
        };
        
        // Product Interest Validation 
        if(index === 0) {
            if(!formData.productInterest) {
                productInterestErrors = 'Choose a product of interest'
            }
            if(productInterestErrors) {
               setErrors({...errors, productInterestErrors})
                return false;
            } 
           setErrors({...errors, productInterestErrors})
        } 
        // section one : Check errors in section one
        if(index === 1) {
            if(!formData.fname) {
                sectionOneErrors.fnameError = 'Enter your first name'
            }
            if(!formData.lname) {
                sectionOneErrors.lnameError = 'Enter your last name'
            }
            if(sectionOneErrors.fnameError || sectionOneErrors.lnameError) {
               setErrors({...errors, sectionOneErrors})
                return false;
            } 
           setErrors({...errors, sectionOneErrors})
        }
        // section two : check errors in section two
       if(index === 2) {
        if(!formData.postalCode) {
            sectionTwoErrors.postalCodeError = 'Enter your postal code'
        } else if(formData.postalCode.length < 6 || formData.postalCode.length > 8) {
            sectionTwoErrors.postalCodeError = 'Enter a valid UK post code'
        }
        if(!formData.streetAddress) {
            sectionTwoErrors.streetAddressError = 'Enter your street address'
        }
        if(sectionTwoErrors.postalCodeError || sectionTwoErrors.streetAddressError ) {
           setErrors({...errors, sectionTwoErrors })
            return false;
        } 
       setErrors({...errors, sectionTwoErrors })
       }
        // section three : check errors in section three
       if(index === 3){
            if(!formData.tel) {
                sectionThreeErrors.telError = 'Enter your phone number'
            } else if(formData.tel.length < 9) {
                sectionThreeErrors.telError = 'Your phone number looks to short'
            } else if(formData.tel.length > 11) {
                sectionThreeErrors.telError = 'Your phone number looks to long'
            }
            if(!formData.email) {
                sectionThreeErrors.emailError = 'Enter your email address'
            }
            if(!formData.email.includes('@')) {
                sectionThreeErrors.emailError = 'Enter a valid email address'
            }
            if(sectionThreeErrors.telError || sectionThreeErrors.emailError ) {
               setErrors({...errors, sectionThreeErrors })
                return false;
            } 
           setErrors({...errors, sectionThreeErrors })
       }

        return true;
    }

    const { executeRecaptcha } = useGoogleReCaptcha();

    const onSubmit = useCallback(
        (e:React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();

          console.log(formData);   


          const isValid:boolean = validate(3);
          if(isValid) {
              console.log(formData);   
              

            if (!executeRecaptcha) {
                console.log("Execute recaptcha not yet available");
                return;
            }
            executeRecaptcha("OakTreeFormRequests").then((gReCaptchaToken) => {
                console.log(gReCaptchaToken, "response Google reCaptcha server");
                submitEnquiryForm(gReCaptchaToken);
            });
          
              // Send user to thank you page 
              // Router.push('/thank-you-for-your-brochure-request')
              // Close Form
             setShow(false);
          }

  
        },
        [executeRecaptcha]
      );

      const submitEnquiryForm = (gReCaptchaToken:string) => {
        fetch("/api/brochure_request", {
          method: "POST",
          headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            formData,
            gRecaptchaToken: gReCaptchaToken,
          }),
        })
          .then((res) => res.json())
          .then((res) => {
            console.log(res, "response from backend")
          });
      };
      

//    const onSubmit = (e:React.FormEvent<HTMLFormElement>) => {
//         e.preventDefault();

//         const isValid:boolean = validate(3);
//         if(isValid) {
//             console.log(formData);    
//             // clear form
//             setFormData({
//                 productInterest: "",
//                 fname: "",
//                 lname: "",
//                 postalCode: "",
//                 streetAddress: "",
//                 tel:"",
//                 email: "",
//             });
//             // Send user to thank you page 
//             // Router.push('/thank-you-for-your-brochure-request')
//             // Close Form
//            setShow(false);
//         }
//     }


  return (
    <form onSubmit={(e) => onSubmit(e)} className='generic-form collection-form'>
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
          error={errors.productInterestErrors}
          onChange={(e:any) => onChange(e)} 
          productChecked={formData.productInterest}
      />
  </div>
    </SwiperSlide>       
  <SwiperSlide className='no-swipe'>
  <div className='form-section'>
      <p className="section-heading">Personal Information</p>
  <TextInput 
          error={errors.sectionOneErrors.fnameError}
          id="fname"
          name="fname"
          autoComplete="family-name"
          placeholder=''
          value={formData.fname} 
          onChange={(e:any) => onChange(e)} 
          htmlFor="fname"
          label='First name'
          required={true}
      />
      <TextInput 
          error={errors.sectionOneErrors.lnameError}
          id="lname"
          name="lname"
          autoComplete="family-name"
          placeholder=''
          value={formData.lname} 
          onChange={(e:any) => onChange(e)} 
          htmlFor="lname"
          label='Last name'
          required={true}
      />
      </div>
      </SwiperSlide>
      <SwiperSlide className='no-swipe'>
      <div  className="form-section">
      <p className="section-heading">Your Address</p>
   
      <TextInput 
          error={errors.sectionTwoErrors.streetAddressError}
          id="street-address"
          name="street-address"
          autoComplete="home address-line1"
          placeholder=''
          value={formData.streetAddress} 
          onChange={(e:any) => onChange(e)} 
          htmlFor="street-address"
          label='Street Address'
          required={true}
      />
         <PostCodeInput 
          error={errors.sectionTwoErrors.postalCodeError}
          id="postal-code"
          name='postal-code'
          autoComplete="home postal-code"
          placeholder=''
          value={formData.postalCode} 
          onChange={(e:any) => onChange(e)} 
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
          error={errors.sectionThreeErrors.telError}
          id="tel"
          placeholder=''
          value={formData.tel} 
          onChange={(e:any) => onChange(e)} 
          htmlFor="tel"
          required={true}
      />
      <EmailInput 
          error={errors.sectionThreeErrors.emailError}
          id="email"
          placeholder=''
          value={formData.email} 
          onChange={(e:any) => onChange(e)} 
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
  {readyToSubmit ? <input type="submit" value='Request Brochure' /> : <SwiperNext validation={() => validate(slideIndex)} classNames='form-next form-buttons' />}  
  </div>
  <div className='progress-bar'></div>
  <div className='step-counter'><p>Step {slideIndex + 1} / 4</p></div>
</Swiper>
</form>
  )
}

export default PopupGenericForm;