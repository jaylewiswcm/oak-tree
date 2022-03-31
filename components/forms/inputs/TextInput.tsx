import React from 'react'

interface ComponentProps {
    className: string
    error: string
    id: string
    name: string
    autoComplete: string
    placeholder: string
    value: string | undefined
    onChange: any
    htmlFor: string
    label: string
    required: boolean
}

export const TextInput = ({className, error, id, name, autoComplete, placeholder, value, onChange,htmlFor,label,required}:ComponentProps) => {
  return (
                  <div className={className}>
                    <p className='error-p'>{error}</p>
                    <input type="text" id={id} name={name} autoComplete={autoComplete} placeholder={placeholder} value={value} onChange={onChange}  />
                    <label htmlFor={htmlFor}>{label} <span className={required ? 'required' : 'hide'}>*</span></label>
                </div>
  )
}
