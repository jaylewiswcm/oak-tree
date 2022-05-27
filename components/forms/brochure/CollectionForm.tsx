import React, { Component } from 'react'
import Router from 'next/router'
// Components
import {TextInput} from '../inputs/TextInput';
import {EmailInput} from '../inputs/EmailInput';
import {TelInput} from '../inputs/TelInput';
import { PostCodeInput } from '../inputs/PostCodeInput';
// Import Swiper
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import swiper modules
import { Pagination, Navigation } from "swiper";
import SwiperNext from '../../buttons/SwiperNext';

const initialState = {
    fname: "",
    lname: "",
    postalCode: "",
    streetAddress: "",
    tel:"",
    email: "",
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
  slideIndex: 0,
  readyToSubmit: false
}

interface ComponentProps {
    productType : string
}

export default class CollectionBrochureForm extends Component<ComponentProps> {
    state = initialState;

    onChange = (event: any) => {
        // Camelcase input name to relate name to state
        const name = event.target.name.replace(/-([a-z])/g, (g:any) => { return g[1].toUpperCase()});
        this.setState({
            [name] : event.target.value
        })

        const sectionOne:any = this.state.sectionOneErrors;
        const sectionTwo:any = this.state.sectionTwoErrors;
        const sectionThree:any = this.state.sectionThreeErrors;

        const errorName:string = name + "Error"; 
        console.log(sectionThree.emailError);

        switch(this.state.slideIndex) {
            case 0: 
                if(sectionOne[errorName] !== '' ) {
                    this.validate(this.state.slideIndex);
                }
                break;
            case 1: 
                if(sectionTwo[errorName] !== '') {              
                    this.validate(this.state.slideIndex);
                }
                break;
            case 2: 
                if(sectionThree[errorName] !== '') {     
                    console.log(this.state.slideIndex)         
                    this.validate(this.state.slideIndex);
                }
                break;
            default: 
                return;
        }
    }

    validate = (index:number) => {
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
            
        // section one : Check errors in section one
        if(index === 0) {
            if(!this.state.fname) {
                sectionOneErrors.fnameError = 'Enter your first name'
            }
            if(!this.state.lname) {
                sectionOneErrors.lnameError = 'Enter your last name'
            }
            if(sectionOneErrors.fnameError || sectionOneErrors.lnameError) {
                console.log(this.state.sectionOneErrors);
                this.setState({sectionOneErrors})
                return false;
            } 
            this.setState({sectionOneErrors})
        }
        // section two : check errors in section two
       if(index === 1) {
        if(!this.state.postalCode) {
            sectionTwoErrors.postalCodeError = 'Enter your postal code'
        } else if(this.state.postalCode.length < 6 || this.state.postalCode.length > 8) {
            sectionTwoErrors.postalCodeError = 'Enter a valid UK post code'
        }
        if(!this.state.streetAddress) {
            sectionTwoErrors.streetAddressError = 'Enter your street address'
        }
        if(sectionTwoErrors.postalCodeError || sectionTwoErrors.streetAddressError ) {
            this.setState({ sectionTwoErrors })
            return false;
        } 
        this.setState({ sectionTwoErrors })
       }
        // section three : check errors in section three
       if(index === 2 ){
            if(!this.state.tel) {
                sectionThreeErrors.telError = 'Enter your phone number'
            } else if(this.state.tel.length < 9) {
                sectionThreeErrors.telError = 'Your phone number looks to short'
            } else if(this.state.tel.length > 11) {
                sectionThreeErrors.telError = 'Your phone number looks to long'
            }
            if(!this.state.email) {
                sectionThreeErrors.emailError = 'Enter your email address'
            }
            console.log(this.state.email)
            if(!this.state.email.includes('@')) {
                sectionThreeErrors.emailError = 'Enter a valid email address'
            }
            if(sectionThreeErrors.telError || sectionThreeErrors.emailError ) {
                this.setState({ sectionThreeErrors })
                return false;
            } 
            this.setState({ sectionThreeErrors })
       }

        return true;
    }

    onSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const isValid:boolean = this.validate(2);
        if(isValid) {
            console.log(this.state);    
            // clear form
            this.setState(initialState);
            // Send user to thank you page 
            Router.push('/thank-you-for-your-brochure-request')
        }
    }

  render() {
    return (
        <form onSubmit={(e) => this.onSubmit(e)} className='generic-form collection-form'>
              <Swiper
                slidesPerView={1}
                spaceBetween={30}
                navigation={{
                    prevEl: '.form-prev',
                }} 
                onSlideChange={(index) => { this.setState({ slideIndex :index.activeIndex})}}
                onReachEnd={() => {this.setState({readyToSubmit: true})}}      
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
            <TextInput 
                    error={this.state.sectionOneErrors.fnameError}
                    id="fname"
                    name="fname"
                    autoComplete="family-name"
                    placeholder=''
                    value={this.state.fname} 
                    onChange={(e:any) => this.onChange(e)} 
                    htmlFor="fname"
                    label='First name'
                    required={true}
                />
                <TextInput 
                    error={this.state.sectionOneErrors.lnameError}
                    id="lname"
                    name="lname"
                    autoComplete="family-name"
                    placeholder=''
                    value={this.state.lname} 
                    onChange={(e:any) => this.onChange(e)} 
                    htmlFor="lname"
                    label='Last name'
                    required={true}
                />
                </div>
                </SwiperSlide>
                <SwiperSlide className='no-swipe'>
                <div  className="form-section">
                <p className="section-heading">Your Address</p>
                    <PostCodeInput 
                        error={this.state.sectionTwoErrors.postalCodeError}
                        id="postal-code"
                        name='postal-code'
                        autoComplete="home postal-code"
                        placeholder=''
                        value={this.state.postalCode} 
                        onChange={(e:any) => this.onChange(e)} 
                        htmlFor="postal-code"
                        label='Postal Code'
                        required={true}
                    />
                <TextInput 
                    error={this.state.sectionTwoErrors.streetAddressError}
                    id="street-address"
                    name="street-address"
                    autoComplete="home address-line1"
                    placeholder=''
                    value={this.state.streetAddress} 
                    onChange={(e:any) => this.onChange(e)} 
                    htmlFor="street-address"
                    label='Street Address'
                    required={true}
                />
                </div>
                </SwiperSlide>
                <SwiperSlide className='no-swipe'>
                <div className="form-section">
                <p className="section-heading">Contact Information</p>
                <TelInput 
                    error={this.state.sectionThreeErrors.telError}
                    id="tel"
                    placeholder=''
                    value={this.state.tel} 
                    onChange={(e:any) => this.onChange(e)} 
                    htmlFor="tel"
                    required={true}
                />
                <EmailInput 
                    error={this.state.sectionThreeErrors.emailError}
                    id="email"
                    placeholder=''
                    value={this.state.email} 
                    onChange={(e:any) => this.onChange(e)} 
                    htmlFor="email"
                    required={true}
                />
                </div>
            </SwiperSlide>
            <div className='form-button-wrapper'>
            <button className='form-prev form-buttons' onClick={() => this.setState({readyToSubmit: false})}>Back</button>
            <div className='form-section action-wrapper'>
                <input type="submit" value='Request Your Free Brochure' />
            </div>
            {this.state.readyToSubmit ? <input type="submit" value='Request Brochure' /> : <SwiperNext validation={() => this.validate(this.state.slideIndex)} classNames='form-next form-buttons' />}  
            </div>
            <div className='progress-bar'></div>
            <div className='step-counter'><p>Step {this.state.slideIndex + 1} / 3</p></div>
    </Swiper>
</form>
    )
  }
}
