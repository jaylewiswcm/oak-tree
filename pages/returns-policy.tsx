import React from 'react'
import { NextSeo } from 'next-seo';
import Image from 'next/image';

 const ReturnsPolicy = () => {
  return (
      <>
        <NextSeo  
                title="Returns Policy | Oak Tree Mobility"
                description="Here at Oak Tree Mobility we specialise in a range of handmade mobility furniture and equipment to help improve your independence. Find out more today"
            />
            <div className='legal-container con-reg'>
                <div className='content'>
                    <h1>Return Policy</h1>
                    <p>We hope you’re happy with every purchase you make with Oak Tree Mobility, but if this isn’t the case we hope to make the returns process as simple as possible.</p>
                    <p>You have the right to return your order within 14 calendar days of receiving the goods. After this period we cannot accept any returns. To cancel your order you must contact us via telephone to notify us of your decision to return.</p>
                    <p>To receive a full refund the product(s) must be returned complete, unused, in an undamaged state and in the original packaging/box. We will not refund you any supplementary costs arising if you chose a type of delivery other than the least expensive type of standard delivery offered by us.</p>
                    <p>If the product(s) are not returned in their original condition, Oak Tree Mobility reserves the right to charge for repair or replacement of any product(s). We’re happy for you to unpack the item and inspect it properly. However, if you’ve used or installed it, we will only make a partial refund to cover the loss in value of the product. This could be up to 50% of the value of the item.</p>
                    <p>If on a return of the goods, whether by post, self-delivery or courier, we find the necessary packaging is missing then we reserve the right to charge an £80 fee to repackage the product(s).</p>
                    <p>Unfortunately, we cannot accept returns on product(s) that are made to order, or have been specially adapted to suit your requirements. A refund can only be given if the product(s) arrives faulty, damaged or incorrect.</p>
                    <h2>Cancellation</h2>
                    <p>If you wish to cancel your order before we’ve dispatched it, please call us to request cancellation. We try to dispatch things very quickly so if you need to cancel your order please do so as soon as possible. Please note once we have dispatched an item to you, the item cannot be cancelled our returns process comes into effect, including any appropriate charges.</p>
                </div>
                <div className='contact-wrapper'>
                    <div className='sticky-wrapper'>
                        <div className='icon-wrapper'>
                            <Image 
                                src='/icons/delivery/icon-phone-message.svg'
                                alt='Contact us icon'
                                layout='responsive'
                                width='75'
                                height='75'
                            />
                        </div>
                        <h3>Can't find what you're looking for?</h3>
                        <p>Give us a call on <a href='tel:0800094999'>0800 094 999</a> to speak to customer services</p>
                        <p>Monday - Friday 9am-7pm</p>
                        <p>Sunday 9am-5pm</p>
                    </div>
                </div>
            </div>
      </>
  )
}

export default ReturnsPolicy;