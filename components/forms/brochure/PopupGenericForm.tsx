import React, { useEffect, useState, useRef } from 'react'
import { useRouter } from 'next/router'
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
// Import Swiper
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
// Import swiper modules
import { Pagination, Navigation } from "swiper";
// Components
import { TitleSelection } from '../inputs/TitleSelection';
import {TextInput} from '../inputs/TextInput';
import {EmailInput} from '../inputs/EmailInput';
import {TelInput} from '../inputs/TelInput';
import { PostCodeInput } from '../inputs/PostCodeInput';
import { ProductInterest } from '../inputs/ProductInterest';
import SwiperNext from '../../buttons/SwiperNext';
// Context
import { useAppContext } from '../../../context/state';

interface ComponentProps {
    setShow : any
}

 const PopupGenericForm = ({setShow}: ComponentProps) => {
    const { adCookies, isExitIntent } = useAppContext()
    const [formData, setFormData] = useState({
        product_interest: "",
        title: "",
        first_name: "",
        last_name: "",
        postcode: "",
        address_one: "",
        phone:"",
        email: "",
        lead_source: "",
        ad_campaign: "",
        gclid: "",
        request_type: "",
        newsletter_opt_in: "",
        third_party_opt_out: "",
        exit_intent_pardot: ""
    })
    const [errors, setErrors] = useState({
        product_interestErrors: "",
        sectionOneErrors : {
            titleError:"",
            first_nameError: "",
            last_nameError: "",
        },
        sectionTwoErrors: {
            postcodeError:"",
            address_oneError: "",
        },
        sectionThreeErrors: {
            phoneError: "",
            emailError: "",
        },
    })
    const [slideIndex, setSlideIndex] = useState(0)
    const [readyToSubmit, setReadyToSubmit] = useState(false)

          // Ref for hidden submit btn
          const FormSubmitBtn = useRef<HTMLInputElement | null>(null)
          // Init router
          const router = useRouter()

          useEffect(() => { 
            // Assign the ad data stored in the cookies to the correct state
            setFormData({...formData, "lead_source": adCookies.lead_source, "ad_campaign" : adCookies.ad_campaign, "gclid": adCookies.gclid })             
        },[router,adCookies]) 

    const onChange = (event: any) => {
        // Camelcase input name to relate name to state
        const name = event.target.name.replace(/-([a-z])/g, (g:any) => { return g[1].toUpperCase()});
        setFormData({...formData, 
            [name] : event.target.value
        })
        const product_interest = errors.product_interestErrors;
        const sectionOne:any = errors.sectionOneErrors;
        const sectionTwo:any = errors.sectionTwoErrors;
        const sectionThree:any = errors.sectionThreeErrors;

        const errorName:string = name + "Error"; 

        switch(slideIndex) {
            case 0: 
                if(product_interest !== '' ) {
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
        let product_interestErrors = '';
        let sectionOneErrors= {
       titleError: "",
            first_nameError: "",
            last_nameError: ""
        };
        let sectionTwoErrors= {
            postcodeError: "",
            address_oneError: ""
        };
        let sectionThreeErrors= {
            phoneError: "",
            emailError: ""
        };
        
        // Product Interest Validation 
        if(index === 0) {
            if(!formData.product_interest) {
                product_interestErrors = 'Choose a product of interest'
            }
            if(product_interestErrors) {
               setErrors({...errors, product_interestErrors})
                return false;
            } 
           setErrors({...errors, product_interestErrors})
        } 
        // section one : Check errors in section one
        if(index === 1) {
            if(!formData.title) {
                sectionOneErrors.titleError = 'Choose your title'
            }
            if(!formData.first_name) {
                sectionOneErrors.first_nameError = 'Enter your first name'
            }
            if(!formData.last_name) {
                sectionOneErrors.last_nameError = 'Enter your last name'
            }
            if(sectionOneErrors.titleError || sectionOneErrors.first_nameError || sectionOneErrors.last_nameError) {
               setErrors({...errors, sectionOneErrors})
                return false;
            } 
            setErrors({...errors, sectionOneErrors})
        }
        // section two : check errors in section two
       if(index === 2) {
        if(!formData.postcode) {
            sectionTwoErrors.postcodeError = 'Enter your postal code'
        } else if(formData.postcode.length < 6 || formData.postcode.length > 8) {
            sectionTwoErrors.postcodeError = 'Enter a valid UK post code'
        }
        if(!formData.address_one) {
            sectionTwoErrors.address_oneError = 'Enter your street address'
        }
        if(sectionTwoErrors.postcodeError || sectionTwoErrors.address_oneError ) {
           setErrors({...errors, sectionTwoErrors })
            return false;
        } 
       setErrors({...errors, sectionTwoErrors })
       }
        // section three : check errors in section three
       if(index === 3){
        if(!formData.phone) {
            sectionThreeErrors.phoneError = 'Enter your phone number'
        } else if(formData.phone.length < 9) {
            sectionThreeErrors.phoneError = 'Your phone number looks to short'
        } else if(formData.phone.length > 11) {
            sectionThreeErrors.phoneError = 'Your phone number looks to long'
        }
        if(!formData.email) {
            sectionThreeErrors.emailError = 'Enter your email address'
        }
        console.log(formData.email)
        if(!formData.email.includes('@')) {
            sectionThreeErrors.emailError = 'Enter a valid email address'
        }
        if(sectionThreeErrors.phoneError || sectionThreeErrors.emailError ) {
           setErrors({...errors, sectionThreeErrors })
            return false;
        } 
       setErrors({...errors, sectionThreeErrors })
       }

        return true;
    }

    const { executeRecaptcha } = useGoogleReCaptcha();

    const onSubmit = () => {          
          const isValid:boolean = validate(3);
          if(isValid) {            
            if (!executeRecaptcha) {
                console.log("Execute recaptcha not yet available");
                return;
            }
            executeRecaptcha("OakTreeFormRequests").then((gReCaptchaToken) => {
             // Check reCaptcha and if success handle form
             submitEnquiryForm(gReCaptchaToken);
             // Clear form
             setFormData(formData);
     
            });  
          }
        }

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
                if(res.status === 'success') {
                    if(FormSubmitBtn.current){
                        FormSubmitBtn.current.click()
                        // Close Form
                        setShow(false);
                    }
                }   
              });
          };    

  return (
    <form className='generic-form collection-form' action='https://go.pardot.com/l/349991/2022-06-29/j57vr' method='POST'>
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
          error={errors.product_interestErrors}
          onChange={(e:any) => onChange(e)} 
          productChecked={formData.product_interest}
      />
  </div>
    </SwiperSlide>       
  <SwiperSlide className='no-swipe'>
  <div className='form-section'>
      <p className="section-heading">Personal Information</p>
      <div className='title-and-name-wrapper'>
                    <div className='row'> 
                    <TitleSelection                     
                           error=''
                        id="title"
                        name="title"
                        autoComplete="title"
                        placeholder=''
                        value={formData.title} 
                        onChange={(e:any) => onChange(e)} 
                        htmlFor="title"
                        label='First name'
                        required={true}
                    />
                    <TextInput 
                        error=''
                        id="first_name"
                        name="first_name"
                        autoComplete="given-name"
                        placeholder='Enter first name'
                        value={formData.first_name} 
                        onChange={(e:any) => onChange(e)} 
                        htmlFor="first_name"
                        label='First name'
                        required={true}
                    />
                    </div>
                    {errors.sectionOneErrors.titleError && <p className='error-p'>{errors.sectionOneErrors.titleError}</p>}
                    {errors.sectionOneErrors.first_nameError && <p className='error-p'>{errors.sectionOneErrors.first_nameError}</p>}
                </div>
                <TextInput 
                    error={errors.sectionOneErrors.last_nameError}
                    id="last_name"
                    name="last_name"
                    autoComplete="family-name"
                    placeholder='Enter last name'
                    value={formData.last_name} 
                    onChange={(e:any) => onChange(e)} 
                    htmlFor="last_name"
                    label='Last name'
                    required={true}
                />
                </div>
      </SwiperSlide>
      <SwiperSlide className='no-swipe'>
      <div  className="form-section">
      <p className="section-heading">Your Address</p>
      <PostCodeInput 
                        error={errors.sectionTwoErrors.postcodeError}
                        id="postcode"
                        name='postcode'
                        autoComplete="home postal-code"
                        placeholder='Enter post code'
                        value={formData.postcode} 
                        onChange={(e:any) => onChange(e)} 
                        htmlFor="postcode"
                        label='Post Code'
                        required={true}
                    />
                <TextInput 
                    error={errors.sectionTwoErrors.address_oneError}
                    id="address_one"
                    name="address_one"
                    autoComplete="home address-line1"
                    placeholder='Enter first line of address'
                    value={formData.address_one} 
                    onChange={(e:any) => onChange(e)} 
                    htmlFor="address_one"
                    label='Street Address'
                    required={true}
                />
      </div>
      </SwiperSlide>
      <SwiperSlide className='no-swipe'>
      <div className="form-section">
      <p className="section-heading">Contact Information</p>
      <TelInput 
                    error={errors.sectionThreeErrors.phoneError}
                    id="phone"
                    placeholder='Enter phone number'
                    value={formData.phone} 
                    onChange={(e:any) => onChange(e)} 
                    htmlFor="phone"
                    required={true}
                />
                <EmailInput 
                    error={errors.sectionThreeErrors.emailError}
                    id="email"
                    placeholder='Enter email address'
                    value={formData.email} 
                    onChange={(e:any) => onChange(e)} 
                    htmlFor="email"
                    required={true}
                />
      </div>
  </SwiperSlide>
  <div className='hidden_fields' style={{visibility: 'hidden', display: 'none'}}>
                        <label htmlFor='lead_source'></label>
                        <input type="text" id='lead_source' name='lead_source' value={formData.lead_source} onChange={(e:any) => onChange(e)}/>
                        <label htmlFor='ad_campaign'></label>
                        <input type="text" id='ad_campaign' name='ad_campaign' value={formData.ad_campaign} onChange={(e:any) => onChange(e)}/>
                        <label htmlFor='gclid'></label>
                        <input type="text" id='gclid' name='gclid' value={formData.gclid} onChange={(e:any) => onChange(e)}/>
                        <label htmlFor='request_type'></label>
                        <input type="text" id='request_type' name='request_type' value='Brochure' onChange={(e:any) => onChange(e)}/>
                        <label htmlFor='newsletter_opt_in'></label>
                        <input type="text" id='newsletter_opt_in' name='newsletter_opt_in' value='FALSE' onChange={(e:any) => onChange(e)}/>
                        <label htmlFor='newsletter_opt_in'></label>
                        <input type="text" id='third_party_opt_out' name='third_party_opt_out' value='FALSE' onChange={(e:any) => onChange(e)}/>
                        <label htmlFor='exit_intent_pardot'></label>
                        <input type="text" id='exit_intent_pardot' name='exit_intent_pardot' value={isExitIntent ? 'TRUE' : 'FALSE'} onChange={(e:any) => onChange(e)}/>
            </div> 
            <div className='form-button-wrapper'>
             <button className='form-prev form-buttons' onClick={() => setReadyToSubmit(false)}>Back</button>
            <div className='form-section action-wrapper'>
                <input type="submit" value='Request Your Free Brochure' style={{visibility: 'hidden', display: 'none'}} ref={FormSubmitBtn}/>
               
            </div>
            {readyToSubmit ? <div className='acting-button' onClick={() => onSubmit()}>Request Brochure</div> : <SwiperNext validation={() => validate(slideIndex)} classNames='form-next form-buttons' />}  
            </div>
  <div className='progress-bar'></div>
  <div className='step-counter'><p>Step {slideIndex + 1} / 4</p></div>
</Swiper>
</form>
  )
}

export default PopupGenericForm;