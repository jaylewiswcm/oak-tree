import React, {useState, useEffect} from 'react'
import Image from 'next/image';

interface ComponentProps {
    error: string
    id: string
    value: string | undefined
    onChange: any
    htmlFor: string
    required: boolean
    placeholder: string
}

export const TelInput = ({error, id, value, onChange,htmlFor,required ,placeholder}:ComponentProps) => {
  const [success, setSuccess] = useState('')  

  useEffect(() => {
    if(!error && value !== "" && value !== " " && value!.length > 9 && value!.length <= 11) {
      setSuccess('success-input')
    } else {
      setSuccess('')
    }
  },[error, value])

  return (
    <div className={`input-wrapper ${error !== '' ? 'errors' : ''} ${success}`}>
    <p className='error-p'>{error}</p>
      <input 
         id={id}
         name="tel"
         autoComplete="tel"
         type="tel"
         placeholder={placeholder}
         value={value} 
         onChange={onChange} />
        <label htmlFor={htmlFor}>Phone Number <span className={required ? 'required' : 'required hide'}>*</span></label>
        <div className='green-tick'>
                      <Image
                        src='/icons/forms/green-success-tick.svg'
                        alt='Green success tick'
                        layout='responsive'
                        width='30'
                        height='30'
                      />
        </div>
    </div>
  )
}
