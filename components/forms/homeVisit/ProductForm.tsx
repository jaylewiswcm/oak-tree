import React, { useEffect, useState, useRef } from 'react'
import { useRouter } from 'next/router'
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
// Components
import {TextInput} from '../inputs/TextInput';
import {EmailInput} from '../inputs/EmailInput';
import {TelInput} from '../inputs/TelInput';
import { PostCodeInput } from '../inputs/PostCodeInput';
// Context
import { useAppContext } from '../../../context/state';
import { TitleSelection } from '../inputs/TitleSelection';

interface ComponentProps {
    productName: string 
}

const ProductForm = ({productName}: ComponentProps) => {
    const { adCookies } = useAppContext();
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
            titleError:"",
            first_nameError: "",
            last_nameError: "",
            postcodeError:"",
            address_oneError: "",
            phoneError: "",
            emailError: "",
    })
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

        const state:any = errors;

        const errorName:string = name + "Error";  

        if(state[errorName] !== '') {
            validate();
        }
 
    }

    const validate = () => {
        let titleError = ""; 
        let first_nameError = ""; 
        let last_nameError = ""; 
        let postcodeError = "";
        let address_oneError = "";
        let phoneError = "";
        let emailError = "";

        if(!formData.title) {
            titleError = 'Choose your title'
        }
        if(!formData.first_name) {
            first_nameError = 'Enter your first name'
        }
        if(!formData.last_name) {
            last_nameError = 'Enter your last name'
        }
        if(!formData.postcode) {
            postcodeError = 'Enter your postal code'
        } else if(formData.postcode.length < 6 || formData.postcode.length > 8) {
            postcodeError = 'Enter a valid UK post code'
        }
        if(!formData.address_one) {
            address_oneError = 'Enter your street address'
        }
 
        if(!formData.phone) {
           phoneError = 'Enter your phone number'
        } else if(formData.phone.length < 9) {
           phoneError = 'Your phone number looks to short'
        } else if(formData.phone.length > 11) {
           phoneError = 'Your phone number looks to long'
        }

        if(!formData.email) {
            emailError = 'Enter your email address'
        }

        if(!formData.email.includes('@') ) {
            emailError = 'Enter a valid email address'
        } else {
            setErrors({ ...errors, emailError: ''})
        }

        if(titleError || first_nameError || last_nameError || postcodeError || address_oneError || phoneError || emailError ) {
            setErrors({ ...errors, titleError, first_nameError, last_nameError, postcodeError, address_oneError, phoneError, emailError})
            return false;
        } 

        return true;
    }
    
    const { executeRecaptcha } = useGoogleReCaptcha();
    
    const onSubmit = () => {
        const isValid:boolean = validate();
        if(isValid) {  
            if (!executeRecaptcha) {
                console.log("Execute recaptcha not yet available");
                return;
            }
            executeRecaptcha("OakTreeFormRequests").then((gReCaptchaToken) => {
                // console.log(gReCaptchaToken, "response Google reCaptcha server");
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
                }
            }   
          });
      };    

    return (
        <div className='form'>
            <div className="form-top">
               <p className='form-title'>Want to see <span className='product-name'>{productName}</span> in your own home?</p>
               <p className='subtitle'>Request a home visit and our consultant will be able to advise exactly which product is best for you and your home.</p>
            </div>
            <form className='generic-form' action='https://go.pardot.com/l/349991/2022-06-29/j57vr' method='POST'>
                <div className='title-and-name-wrapper'>
                    <div className='row'> 
                        <TitleSelection                     
                            error={errors.titleError}
                            id="title"
                            name="title"
                            autoComplete="title"
                            placeholder=''
                            value={formData.title} 
                            onChange={(e:any) => onChange(e)} 
                            htmlFor="title"
                            label='Title'
                            required={true}
                        />
                        <TextInput 
                            error={errors.first_nameError && 'error'}
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
                    {errors.titleError && <p className='error-p'>{errors.titleError}</p>}
                    {errors.first_nameError && <p className='error-p'>{errors.first_nameError}</p>}
                </div>

                    <TextInput 
                        error={errors.last_nameError}
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
                    <div className='tight-form-wrapper address-input-wrapper'>
                        <PostCodeInput 
                                error={errors.postcodeError}
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
                            error={errors.address_oneError}
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
                    <TelInput 
                        error={errors.phoneError}
                        id="phone"
                        placeholder='Enter phone number'
                        value={formData.phone} 
                        onChange={(e:any) => onChange(e)} 
                        htmlFor="phone"
                        required={true}
                    />
                    <EmailInput 
                        error={errors.emailError}
                        id="email"
                        placeholder='Enter email address'
                        value={formData.email} 
                        onChange={(e:any) => onChange(e)} 
                        htmlFor="email"
                        required={true}
                    />
                    <div className='hidden_fields' style={{visibility: 'hidden', display: 'none'}}>
                        <label htmlFor='product_interest'></label>
                        <input type="text" id='product_interest' name='product_interest' value={formData.product_interest} onChange={(e:any) => onChange(e)} />
                        <label htmlFor='lead_source'></label>
                        <input type="text" id='lead_source' name='lead_source' value={formData.lead_source} onChange={(e:any) => onChange(e)}/>
                        <label htmlFor='ad_campaign'></label>
                        <input type="text" id='ad_campaign' name='ad_campaign' value={formData.ad_campaign} onChange={(e:any) => onChange(e)}/>
                        <label htmlFor='gclid'></label>
                        <input type="text" id='gclid' name='gclid' value={formData.gclid} onChange={(e:any) => onChange(e)}/>
                        <label htmlFor='request_type'></label>
                        <input type="text" id='request_type' name='request_type' value='Book an Appointment' onChange={(e:any) => onChange(e)}/>
                        <label htmlFor='newsletter_opt_in'></label>
                        <input type="text" id='newsletter_opt_in' name='newsletter_opt_in' value='FALSE' onChange={(e:any) => onChange(e)}/>
                        <label htmlFor='newsletter_opt_in'></label>
                        <input type="text" id='third_party_opt_out' name='third_party_opt_out' value='FALSE' onChange={(e:any) => onChange(e)}/>
                        <label htmlFor='exit_intent_pardot'></label>
                        <input type="text" id='exit_intent_pardot' name='exit_intent_pardot' value='FALSE' onChange={(e:any) => onChange(e)}/>
                    </div> 
            <div className='form-section action-wrapper' style={{display: 'none'}}>
                <input type="submit" value='Request Your Free Brochure' ref={FormSubmitBtn} />
            </div>
        </form>
        <div className='action-wrapper acting-button'>
            <button onClick={() => onSubmit()}>Request Your Free Button</button>
        </div>
    </div>
    )
  }


  export default ProductForm;