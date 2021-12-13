import React from 'react'
import Image from 'next/image';

interface ComponentProps {
    classname: string
}

const SideForm = ({classname}: ComponentProps) => {
    return (
        <div className={`brochure-form ${classname}`}>
        <div className='info-and-image'>
        <div className='image-wrapper'>
                <Image 
                    src='/images/brochure/small-brochure.png'
                    alt='brochure'
                    layout='intrinsic'
                    width='199'
                    height='120'
                />
            </div>
            <h1 className='heading'>Request Your <span className='pink-3'>Free</span> Brochure</h1>
            <p className='info'>Get our new brochure delivered to your door!</p>
        </div>
        <form action="">
            <p className='label'>Choose your title</p>
            <div className='title-input-wrapper'>
                <span className='title'>
                    <input type="radio"
                        name="title" 
                        value="mrs" 
                        id='mrs'/>
                    <label htmlFor="mrs">Mrs</label>
                </span>
                <span className='title'>
                    <input type="radio"
                        name="title" 
                        value="ms" 
                        id='ms'/>
                    <label htmlFor="ms">Ms</label>
                </span>
                <span className='title'>
                    <input type="radio"
                        name="title" 
                        value="mr"
                        id='mr' />
                    <label htmlFor="mr">Mr</label>
                </span>
                <span className='title'>
                    <input type="radio"
                        name="title" 
                        value="miss"
                        id='miss' />
                    <label htmlFor="miss">Miss</label>
                </span> 
            </div>
            <div className='form-row'>
                <div className='input-wrapper'>
                    <label htmlFor="fname">First Name</label>
                    <input type="text" placeholder='First Name' name='fname' id='fname'/>
                </div>
                <div className='input-wrapper'>
                    <label htmlFor="lname">Last Name</label>
                    <input type="text" placeholder='Last Name' name='lname' id='lname'/>
                </div>
            </div>
            <div className='form-row'>
                <div className='input-wrapper address-wrapper'>
                    <label htmlFor="address">First Line of Address</label>
                    <input type="street" placeholder='First Line of Address' name='address' id='address'/>
                </div>
                <div className='input-wrapper'>
                    <label htmlFor="post_code">Postal Code</label>
                    <input type="zip" placeholder='Postal Code' name='post_code' id='post_code'/>
                </div>
            </div>
            <div className='form-row'>
                <div className='input-wrapper'>
                    <label htmlFor="number">Telephone Number</label>
                    <input type="tell" placeholder='Telephone Number' name='number' id='number'/>
                </div>
                <div className='input-wrapper'>
                    <label htmlFor="email">Email Address</label>
                    <input type="email" placeholder='Email Address' name='email' id='email'/>
                </div>
            </div>
            <div className='data-protection'>
                <input type="checkbox" name='data-protect' id='data-protect'/>
                <label htmlFor="data-protect">Tick this box if you would prefer NOT to receive offers from carefully selected third parties. To learn more, please read our privacy policy.</label>
            </div>
            <input type="submit" id='submit' value='Order Brochure' />
        </form>
    </div>
    )
}

export default SideForm;
