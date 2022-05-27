import React, { Component } from 'react'
import Router from 'next/router';
// Components
import {TextInput} from '../inputs/TextInput';
import {EmailInput} from '../inputs/EmailInput';
import {TelInput} from '../inputs/TelInput';
import { PostCodeInput } from '../inputs/PostCodeInput';

const initialState = {
    fname: "",
    lname: "",
    postalCode: "",
    streetAddress: "",
    tel:"",
    email: "",
    fnameError: "",
    lnameError: "",
    postalCodeError:"",
    streetAddressError: "",
    telError: "",
    emailError: "",  
}

export default class OrphanBrochureForm extends Component {
    state = initialState;

    onChange = (event: any) => {
        // Camelcase input name to relate name to state
        const name = event.target.name.replace(/-([a-z])/g, (g:any) => { return g[1].toUpperCase()});

        this.setState({
            [name] : event.target.value
        })
    
        const state:any = this.state;

        const errorName:string = name + "Error";  
      
        if(state[errorName] !== '') {
            console.log(state[errorName]);
            this.validate();
            // this.setState({ [errorName] : '' })
        }
 
    }

    validate = () => {
        let fnameError= ""; 
        let lnameError= ""; 
        let postalCodeError= "";
        let streetAddressError= "";
        let telError= "";
        let emailError= "";

        if(!this.state.fname) {
            fnameError = 'Enter your first name'
        }
        if(!this.state.lname) {
            lnameError = 'Enter your last name'
        }
        if(!this.state.postalCode) {
            postalCodeError = 'Enter your postal code'
        } else if(this.state.postalCode.length < 6 || this.state.postalCode.length > 8) {
            postalCodeError = 'Enter a valid UK post code'
        }
        if(!this.state.streetAddress) {
            streetAddressError = 'Enter your street address'
        }
 
        if(!this.state.tel) {
            telError = 'Enter your phone number'
        } else if(this.state.tel.length < 9) {
            telError = 'Your phone number looks to short'
        } else if(this.state.tel.length > 11) {
            telError = 'Your phone number looks to long'
        }

        if(!this.state.email) {
            emailError = 'Enter your last name'
        }
        if(!this.state.email.includes('@') ) {
            emailError = 'Enter a valid email address'
        }

        if(fnameError || lnameError || postalCodeError || streetAddressError || telError || emailError) {
            this.setState({fnameError, lnameError, postalCodeError, streetAddressError, telError, emailError})
            return false;
        } 

        return true;
    }

    onSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const isValid:boolean = this.validate();
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
        <form onSubmit={(e) => this.onSubmit(e)} className='generic-form orphan-form'>
            <div className='tight-form-wrapper'>
            <TextInput 
                    error={this.state.fnameError}
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
                    error={this.state.lnameError}
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
                <div className='tight-form-wrapper'>
  <PostCodeInput 
                        error={this.state.postalCodeError}
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
                    error={this.state.streetAddressError}
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
            {/* <div className='tight-form-wrapper'>
                </div> */}
                <TelInput 
                    error={this.state.telError}
                    id="tel"
                    placeholder=''
                    value={this.state.tel} 
                    onChange={(e:any) => this.onChange(e)} 
                    htmlFor="tel"
                    required={true}
                />
                <EmailInput 
                    error={this.state.emailError}
                    id="email"
                    placeholder=''
                    value={this.state.email} 
                    onChange={(e:any) => this.onChange(e)} 
                    htmlFor="email"
                    required={true}
                />
    <div className='form-section action-wrapper'>
        <input type="submit" value='Request Your Free Brochure' />
    </div>
</form>
    )
  }
}
