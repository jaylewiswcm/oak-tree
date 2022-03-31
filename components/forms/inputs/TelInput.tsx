import React from 'react'
import InputMask from 'react-input-mask';
interface ComponentProps {
    className: string
    error: string
    id: string
    value: string | undefined
    onChange: any
    htmlFor: string
    required: boolean
    placeholder: string
}

export const TelInput = ({className, error, id, value, onChange,htmlFor,required ,placeholder}:ComponentProps) => {
  return (
    <div className={className}>
    <p className='error-p'>{error}</p>
        <InputMask 
            id={id}
            name="tel"
            autoComplete="tel"
            type="tel"
            placeholder={placeholder}
            mask='99999 999999' 
            value={value} 
            onChange={onChange}>
        </InputMask>
        <label htmlFor={htmlFor}>Phone Number <span className={required ? 'required' : 'required hide'}>*</span></label>
    </div>
  )
}
