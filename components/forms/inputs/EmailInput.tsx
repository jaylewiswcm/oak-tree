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

export const EmailInput = ({error, id, value, onChange,htmlFor,required,placeholder}:ComponentProps) => {
  const [success, setSuccess] = useState('')  

  useEffect(() => {
    if(!error && value !== "" && value !== " " && value?.includes('@') ) {
      setSuccess('success-input')
    } else {
      setSuccess('')
    }
  },[error, value])
  
  return (
    <div className={`input-wrapper ${error !== '' ? 'errors' : null} ${success}`}>
    <p className='error-p'>{error}</p>
    <input type="email" id={id} name="email" autoComplete="email" placeholder={placeholder} value={value} onChange={onChange} />
    <label htmlFor={htmlFor}>Email Address <span className={required ? 'required' : 'required hide'}>*</span></label>
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
