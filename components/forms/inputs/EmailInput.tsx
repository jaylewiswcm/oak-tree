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

export const EmailInput = ({className, error, id, value, onChange,htmlFor,required,placeholder}:ComponentProps) => {
  return (
    <div className={className}>
    <p className='error-p'>{error}</p>
    <input type="email" id={id} name="email" autoComplete="email" placeholder={placeholder} value={value} onChange={onChange} />
    <label htmlFor={htmlFor}>Email Address <span className={required ? 'required' : 'required hide'}>*</span></label>
</div>
  )
}
