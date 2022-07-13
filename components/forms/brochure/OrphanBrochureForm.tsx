// import React, { Component } from 'react'
// import Router from 'next/router';
// // Components
// import {TextInput} from '../inputs/TextInput';
// import {EmailInput} from '../inputs/EmailInput';
// import {TelInput} from '../inputs/TelInput';
// import { PostCodeInput } from '../inputs/PostCodeInput';

// const initialState = {
//     first_name: "",
//     lname: "",
//     postalCode: "",
//     address_one: "",
//    phone:"",
//     email: "",
//     first_nameError: "",
//     lnameError: "",
//     postalCodeError:"",
//     address_oneError: "",
//     telError: "",
//     emailError: "",  
// }

// export default class OrphanBrochureForm extends Component {
//     state = initialState;

//     onChange = (event: any) => {
//         // Camelcase input name to relate name to state
//         const name = event.target.name.replace(/-([a-z])/g, (g:any) => { return g[1].toUpperCase()});

//         this.setState({
//             [name] : event.target.value
//         })
    
//         const state:any = this.state;

//         const errorName:string = name + "Error";  
      
//         if(state[errorName] !== '') {
//             console.log(state[errorName]);
//             this.validate();
//             // this.setState({ [errorName] : '' })
//         }
 
//     }

//     validate = () => {
//         let first_nameError= ""; 
//         let lnameError= ""; 
//         let postalCodeError= "";
//         let address_oneError= "";
//         let telError= "";
//         let emailError= "";

//         if(!this.state.first_name) {
//             first_nameError = 'Enter your first name'
//         }
//         if(!this.state.lname) {
//             lnameError = 'Enter your last name'
//         }
//         if(!this.state.postalCode) {
//             postalCodeError = 'Enter your postal code'
//         } else if(this.state.postalCode.length < 6 || this.state.postalCode.length > 8) {
//             postalCodeError = 'Enter a valid UK post code'
//         }
//         if(!this.state.streetAddress) {
//             streetAddressError = 'Enter your street address'
//         }
 
//         if(!this.state.tel) {
//             telError = 'Enter your phone number'
//         } else if(this.state.tel.length < 9) {
//             telError = 'Your phone number looks to short'
//         } else if(this.state.tel.length > 11) {
//             telError = 'Your phone number looks to long'
//         }

//         if(!this.state.email) {
//             emailError = 'Enter your last name'
//         }
//         if(!this.state.email.includes('@') ) {
//             emailError = 'Enter a valid email address'
//         }

//         if(first_nameError || lnameError || postalCodeError || streetAddressError || telError || emailError) {
//             this.setState({first_nameError, lnameError, postalCodeError, streetAddressError, telError, emailError})
//             return false;
//         } 

//         return true;
//     }

//     onSubmit = (e:React.FormEvent<HTMLFormElement>) => {
//         e.preventDefault();
//         const isValid:boolean = this.validate();
//         if(isValid) {
//             console.log(this.state);    
//             // clear form
//             this.setState(initialState);
//             // Send user to thank you page 
//             Router.push('/thank-you-for-your-brochure-request')
//         }
      
//     }

//   render() {
//     return (
//         <form onSubmit={(e) => this.onSubmit(e)} className='generic-form orphan-form'>
//             <div className='tight-form-wrapper'>
//             <TextInput 
//                     error={this.state.first_nameError}
//                     id="first_name"
//                     name="first_name"
//                     autoComplete="family-name"
//                     placeholder=''
//                     value={this.state.first_name} 
//                     onChange={(e:any) => this.onChange(e)} 
//                     htmlFor="first_name"
//                     label='First name'
//                     required={true}
//                 />
//                            <TextInput 
//                     error={this.state.lnameError}
//                     id="lname"
//                     name="lname"
//                     autoComplete="family-name"
//                     placeholder=''
//                     value={this.state.lname} 
//                     onChange={(e:any) => this.onChange(e)} 
//                     htmlFor="lname"
//                     label='Last name'
//                     required={true}
//                 />
//                 </div>
//                 <div className='tight-form-wrapper'>
//             <PostCodeInput 
//                         error={this.state.postalCodeError}
//                         id="postal-code"
//                         name='postal-code'
//                         autoComplete="home postal-code"
//                         placeholder=''
//                         value={this.state.postalCode} 
//                         onChange={(e:any) => this.onChange(e)} 
//                         htmlFor="postal-code"
//                         label='Postal Code'
//                         required={true}
//                     />
//                 <TextInput 
//                     error={this.state.streetAddressError}
//                     id="address_one"
//                     name="address_one"
//                     autoComplete="home address-line1"
//                     placeholder=''
//                     value={this.state.streetAddress} 
//                     onChange={(e:any) => this.onChange(e)} 
//                     htmlFor="address_one"
//                     label='Street Address'
//                     required={true}
//                 />
//                 </div>
//             {/* <div className='tight-form-wrapper'>
//                 </div> */}
//                 <TelInput 
//                     error={this.state.telError}
//                     id="tel"
//                     placeholder=''
//                     value={this.state.tel} 
//                     onChange={(e:any) => this.onChange(e)} 
//                     htmlFor="tel"
//                     required={true}
//                 />
//                 <EmailInput 
//                     error={this.state.emailError}
//                     id="email"
//                     placeholder=''
//                     value={this.state.email} 
//                     onChange={(e:any) => this.onChange(e)} 
//                     htmlFor="email"
//                     required={true}
//                 />
//     <div className='form-section action-wrapper'>
//         <input type="submit" value='Request Your Free Brochure' />
//     </div>
// </form>
//     )
//   }
// }

import React, { useEffect, useState, useRef } from 'react'
import Router from 'next/router';
import Image from 'next/image';
import { useRouter } from 'next/router'
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
// Components
import {TextInput} from '../inputs/TextInput';
import {EmailInput} from '../inputs/EmailInput';
import {TelInput} from '../inputs/TelInput';
import { PostCodeInput } from '../inputs/PostCodeInput';

interface ComponentProps {
    productType: string 
}

type FormStatus = string | boolean | null

const OrphanBrochureForm = ({productType}: ComponentProps) => {
    const [formStatus, setFormStatus] = useState<FormStatus>(null);
    
    const [formData, setFormData] = useState({
        product_interest: productType,
        first_name: "",
        last_name: "",
        postcode: "",
        address_one: "",
        phone:"",
        email: "",

        title: "",
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
            first_nameError: "",
            last_nameError: "",
            postcodeError:"",
            address_oneError: "",
           phoneError: "",
            emailError: "",
    })

    const router = useRouter()
    
    const FormSubmitBtn = useRef<HTMLInputElement | null>(null)

    useEffect(() => {
        console.log(router.query.form_success)
        formBehaviorHandler();
    },[router]) 

    const formBehaviorHandler = ()  => {
        const query = JSON.stringify(router.query.form_success)
        
        const status = query ? JSON.parse(query) : null

        setFormStatus(status)
      }

      const RemoveFormSuccessFromRouterQuery = () => { 
            let params: any = ''
   
            for (const [key, value] of Object.entries(router.query)) {                
                if(key !== 'form_success') {
                    params = params + `${key}=${value}&`
                }
            }

            router.push(`${router.route}?${params}`)
      }


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
        let first_nameError = ""; 
        let last_nameError = ""; 
        let postcodeError = "";
        let address_oneError = "";
        let phoneError = "";
        let emailError = "";

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
            // console.log(`Email not entered: ${formData.email}`)
            emailError = 'Enter your email address'
        }

        if(!formData.email.includes('@') ) {
            // console.log(`Email not valid: ${formData.email}`)
            emailError = 'Enter a valid email address'
        } else {
            setErrors({ ...errors, emailError: ''})

        }

        if(first_nameError || last_nameError || postcodeError || address_oneError || phoneError || emailError ) {
            setErrors({ ...errors, first_nameError, last_nameError, postcodeError, address_oneError, phoneError, emailError})
            return false;
        } 

        return true;
    }
    
    const { executeRecaptcha } = useGoogleReCaptcha();
    
    const onSubmit = () => {
        // e.preventDefault();
        const isValid:boolean = validate();
        if(isValid) {
            console.log(formData);    
            if (!executeRecaptcha) {
                console.log("Execute recaptcha not yet available");
                return;
            }
            executeRecaptcha("OakTreeFormRequests").then((gReCaptchaToken) => {
                // console.log(gReCaptchaToken, "response Google reCaptcha server");
                submitEnquiryForm(gReCaptchaToken);
            });

            // clear form
            setFormData(formData);
            // Send user to thank you page 
            // Router.push('/thank-you-for-your-brochure-request')
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
                    console.log(FormSubmitBtn.current)
                }
            }   
          });
      };    

    return (
        <>
            <form className='generic-form orphan-form' action='https://go.pardot.com/l/349991/2022-06-29/j57vr' method='POST'>
                <div className='tight-form-wrapper'>
                <TextInput 
                        error={errors.first_nameError}
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
                    </div>
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
                                label='Postal Code'
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
                        <input type="text" id='product_interest' name='product_interest' value='Test' onChange={(e:any) => onChange(e)} />
                        <input type="text" id='lead_source' name='lead_source' value='Test' onChange={(e:any) => onChange(e)}/>
                        <input type="text" id='ad_campaign' name='ad_campaign' value='Test' onChange={(e:any) => onChange(e)}/>
                        <input type="text" id='gclid' name='gclid' value='Test' onChange={(e:any) => onChange(e)}/>
                        <input type="text" id='request_type' name='request_type' value='Test' onChange={(e:any) => onChange(e)}/>
                        <input type="text" id='newsletter_opt_in' name='newsletter_opt_in' value='Test' onChange={(e:any) => onChange(e)}/>
                        <input type="text" id='third_party_opt_out' name='third_party_opt_out' value='Test' onChange={(e:any) => onChange(e)}/>
                        {/* <input type="text" id='exit_intent_pardot' name='exit_intent_pardot' value='Test' onChange={(e:any) => onChange(e)}/> */}
                    </div> 
            <div className='form-section action-wrapper' style={{display: 'none'}}>
                <input type="submit" value='Request Your Free Brochure' ref={FormSubmitBtn} />
            </div>
        </form>
        <div className='action-wrapper acting-button'>
            <button onClick={() => onSubmit()}>Request Your Free Button</button>
        </div>

        { formStatus &&
            <div className='form-error-pop-up'>
                <div className='icon'>
                    <Image
                        src='/icons/forms/attention.svg'
                        alt='Attention'
                        layout='responsive'
                        width='90'
                        height='90'
                    />
                </div>
                <p className='attention'>Attention</p>
                <p>Sorry your brochure request has not been accepted. There has been an error with your form submission, please try again.</p>
                <button onClick={() => RemoveFormSuccessFromRouterQuery()}>Close message</button>
            </div>
            }
    </>
    )
  }


  export default OrphanBrochureForm;