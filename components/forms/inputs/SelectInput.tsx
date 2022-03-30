import React from 'react'

interface ComponentProps {
    className: string
    error: string
    id: string
    name: string
    value: string | undefined
    onChange: any
    htmlFor: string
    label: string
    required: boolean
    options: Array<string>
}

export const SelectInput = ({className, error, id, name, value, onChange,htmlFor,label,required, options}:ComponentProps) => {
  return (
    <div className={className}>
        <p className='error-p'>{error}</p>
        <div className='input-label'>
        <select name={name} id={id} value={value} onChange={onChange}>
            <option value="" disabled selected>Please select an option</option>
            {options.map((option, index) => <option key={index} value={option}>{option}</option>)}
        </select>
        <label htmlFor={htmlFor}>{label}<span className={required ? 'required' : 'hide'}>*</span></label>
        </div>
    </div>
  )
}
