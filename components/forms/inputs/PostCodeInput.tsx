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

export const PostCodeInput = ({className, error, id, value, onChange,htmlFor,required,placeholder}:ComponentProps) => {
  return (
    <div className={className}>
    <p>{error}</p>
            <InputMask 
                type="text"
                id={id}
                name="postal-code"
                autoComplete="home postal-code"
                placeholder={placeholder}
                value={value}
                onChange={onChange} 
                mask='**** ***' 
                >
            </InputMask>
            <label htmlFor={htmlFor}>Postal Code <span className={required ? 'required' : 'required hide'}>*</span></label>
        </div>
  )
}
