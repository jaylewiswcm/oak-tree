import React, {useState, useEffect} from 'react'
import Image from 'next/image';

interface ComponentProps {
    // className: string
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

export const TitleSelection = ({error, id, name, autoComplete, placeholder, value, onChange,htmlFor,label,required}:ComponentProps) => {
    const [success, setSuccess] = useState('')  

    useEffect(() => {
      if(!error && value !== "" && value !== " ") {
        setSuccess('success-input')
      } else {
        setSuccess('')
      }
    },[error, value])
  
  return (
                  <div className={`input-wrapper select-wrapper ${error !== '' ? 'errors' : ''} ${success}`}>
                        <p className='error-p'>{error}</p> 
                        <select name="title" id="title" value={value}  onChange={onChange}>
                            <option value="" disabled>Title</option>    
                            <option value="mrs">Mrs</option>    
                            <option value="mr">Mr</option>    
                            <option value="miss">Miss</option>    
                            <option value="ms">Ms</option>    
                        </select>        
                        <label htmlFor="title">Title <span className={required ? 'required' : 'hide'}>*</span></label>                 
                        <div className='green-tick'>
                            <Image
                                src='/icons/forms/green-success-tick.svg'
                                alt='Green success tick'
                                layout='responsive'
                                width='30'
                                height='30'
                            />
                        </div>
                    {/* <input type="text" id={id} name={name} autoComplete={autoComplete} placeholder={placeholder} value={value} onChange={onChange}  />
                    <label htmlFor={htmlFor}>{label} <span className={required ? 'required' : 'hide'}>*</span></label>
                    <div className='green-tick'>
                      <Image
                        src='/icons/forms/green-success-tick.svg'
                        alt='Green success tick'
                        layout='responsive'
                        width='30'
                        height='30'
                      />
                    </div> */}
                </div>
  )
}
