import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import { useRouter } from 'next/router';

export const  FormSubmissionErrorPopup = () => {
    const [visible, setVisible] = useState(false);
    const router = useRouter();
    
    useEffect(() => {
        if(router.query.form_success === 'false') {
            setVisible(true)
        } else {
            setVisible(false)
        }
    },[router])
          // Remove param and change route
          // This will close error popup
          const RemoveFormSuccessFromRouterQuery = () => { 
                let params: string = ''
                // Loop through all params and add to string unless 'form_success'
                for (const [key, value] of Object.entries(router.query)) {                
                    if(key !== 'form_success') {
                        params = params + `${key}=${value}&`
                    }
                }
                // Push to current route with our new param string - this doesn't remove our ad data
                router.push(`${router.route}?${params}`)
          }

          if(visible === true) {
            return (
                <div className='form-error-pop-up'>
                    <div className='icon'>
                        <Image
                            src='/icons/forms/attention.svg'
                            alt='Attention'
                            layout='responsive'
                            width='90'
                            height='90'
                        />
                    </div>
                    <p className='attention'>Attention</p>
                    <p>Sorry your brochure request has not been accepted. There has been an error with your form submission, please try again.</p>
                    <button onClick={() => RemoveFormSuccessFromRouterQuery()}>Close Message</button>
                </div>
          )
          }
           
  return null;
}
