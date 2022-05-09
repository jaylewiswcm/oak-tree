import React from 'react'
import { NextSeo } from 'next-seo';
import Image from 'next/image';

const expressDelivery = () => {
  return (
    <>
    <NextSeo  
        title="Express Delivery | Oak Tree Mobility"
        description="Here at Oak Tree Mobility all our products are designed and manufacture here in Great Britain. Find out more."
    />
         <div className='bg-dark-green-1 wave-banner'>
                <div className='con-reg'>
                    <h1 className='heading'>Expresss Delivery</h1>
                </div>
            </div>
            <div className='exp-del-intro con-reg'>
              <div className='icon-wrapper'>
                <Image 
                  src='/icons/delivery/icon-express-delivery.svg'
                  alt='Express Delivery van'
                  layout='responsive'
                  width='115'
                  height='44'
                />
              </div>
              <p className='intro-p'>A new unique service you won’t find anywhere else. Not only can we deliver in just 48 hours, but this service is so much more. At Oak Tree we’ve got you covered. You tell us when you would like delivery and leave the rest to us.</p>
            </div>
            <div className="delivery-comparisons con-reg">
        <h3 className="delivery-heading">Why is this service better than standard delivery?</h3>
        <div className="comp-wrapper">
            <div className="comp-table">
                <div className='comp-row'>
                    <div className="comp-title">
                    </div>
                    <div className="comp-col col-header">
                        <p>Express Engineered Delivery</p>
                    </div>
                    <div className="comp-col col-header">
                        <p>Standard Delivery</p>
                    </div>
                </div>
                <div className='comp-row'>
                        <div className="comp-title">
                            <div className="icon-wrapper">
                              <Image
                                src='/icons/delivery/icon-calender.svg'
                                alt='Delivery Date'
                                layout='responsive'
                                width="50"
                                height='50'
                              />
                            </div>
                            <p>Delivery Date</p>
                        </div>
                        <div className="comp-col">
                            <div className="image-wrapper">
                              <Image
                                src='/images/delivery/delivery-call-centre.webp'
                                alt='Call Centre'
                                layout='responsive'
                                width="1000"
                                height='667'
                              />
                                <div className="icon-wrapper">
                                  <Image
                                    src='/icons/delivery/express/icon-delivery-date-yes.svg'
                                    alt='Choose Delivery Date'
                                    layout='responsive'
                                    width="50"
                                    height='50'
                                  />
                                </div>
                            </div>
                            <p>Select the exact time and date when you would like your product delivered. We can fit the delivery around you, so you won’t have to wait at home all day.</p>
                        </div>
                        <div className="comp-col">
                        <div className="image-wrapper">
                              <Image
                                src='/images/delivery/delivery-waiting.webp'
                                alt='Call Centre'
                                layout='responsive'
                                width="1000"
                                height='667'
                              />
                                <div className="icon-wrapper">
                                  <Image
                                    src='/icons/delivery/express/icon-delivery-date-no.svg'
                                    alt="Can't Choose Delivery Date"
                                    layout='responsive'
                                    width="50"
                                    height='50'
                                  />
                                </div>
                            </div>
                            <p>We'll provide a daily delivery window and cannot guarantee we will be with you at a certain time. You'll need to make sure you're at home until your product has been delivered.</p>
                        </div>
                </div>
                <div className='comp-row'>
                        <div className="comp-title">
                            <div className="icon-wrapper">
                                <Image
                                    src='/icons/delivery/icon-package.svg'
                                    alt="Deliver Package"
                                    layout='responsive'
                                    width="50"
                                    height='50'
                                  />
                            </div>
                            <p>Your Package Arrives</p>
                        </div>
                        <div className="comp-col">
                        <div className="image-wrapper">
                              <Image
                                src='/images/delivery/delivery-2-man-van.webp'
                                alt='Call Centre'
                                layout='responsive'
                                width="1000"
                                height='667'
                              />
                                <div className="icon-wrapper">
                                  <Image
                                    src='/icons/delivery/express/icon-delivery-heavylifting.svg'
                                    alt="Heavy Lifting Included"
                                    layout='responsive'
                                    width="50"
                                    height='50'
                                  />
                                </div>
                            </div>
                            <p>We’ll do all the heavy lifting, bringing your product inside to a room of your choice. As our product are often heavy, many of our customers cannot manage without this service.</p>
                        </div>
                        <div className="comp-col">
                        <div className="image-wrapper">
                              <Image
                                src='/images/delivery/delivery-at-door.webp'
                                alt='Boxes left at the door'
                                layout='responsive'
                                width="1000"
                                height='667'
                              />
                                <div className="icon-wrapper">
                                  <Image
                                    src='/icons/delivery/express/icon-delivery-heavylifting-no.svg'
                                    alt="Heavy Lifting Not Included"
                                    layout='responsive'
                                    width="50"
                                     height='50'
                                  />
                                </div>
                            </div>
                            <p>We'll drop your product off on your doorstep You'll be responsible for getting the product into your house and unpacking everything.</p>
                        </div>
                </div>
     
                <div className='comp-row'>
                        <div className="comp-title">
                            <div className="icon-wrapper">
                                <Image
                                    src='/icons/delivery/express/icon-delivery-cleaning-up.svg'
                                    alt="Delivery Clean Up"
                                    layout='responsive'
                                    width="50"
                                    height='50'
                                  />
                            </div>
                            <p>Cleaning Up</p>
                        </div>
                        <div className="comp-col">
                        <div className="image-wrapper">
                              <Image
                                src='/images/delivery/delivery-removing-rubbish.webp'
                                alt='Removing rubbish"'
                                layout='responsive'
                                width="1000"
                                height='667'
                              />
                                <div className="icon-wrapper">
                                  <Image
                                    src='/icons/delivery/express/icon-delivery-cleaning-up-yes.svg'
                                    alt="Rubbish Removal Included"
                                    layout='responsive'
                                    width="50"
                                    height='50'
                                  />
                                </div>
                            </div> 
                            <p>Once you’re all set up, we’ll clear away all the packaging. We guarantee a completely mess-free setup and installation for your peace of mind.</p>
                        </div>
                        <div className="comp-col">
                          <div className="image-wrapper">
                                <Image
                                  src='/images/delivery/delivery-left-with-boxes.webp'
                                  alt='Delivery left with boxes"'
                                  layout='responsive'
                                  width="1000"
                                  height='667'
                                />
                                  <div className="icon-wrapper">
                                    <Image
                                      src='/icons/delivery/express/icon-delivery-cleaning-up-no.svg'
                                      alt="Rubbish Removal Not Included"
                                      layout='responsive'
                                      width="50"
                                      height='50'
                                    />
                                  </div>
                              </div> 
                            <p>We will not take away any of the waste materials, and you willl have to dispose of or recycle the packaging.</p>
                        </div>
                </div>
            </div>
            <div className="comp-mobile">
                <div className="delivery-row">
                    <p className="row-title">Delivery Date</p>
                    <div className="delivery-item">
                        <div className="image-wrapper">
                        <Image
                                src='/images/delivery/delivery-call-centre.webp'
                                alt='Call Centre'
                                layout='responsive'
                                width="1000"
                                height='667'
                              />
                        </div>
                        <div className="delivery-point">
                        <div className="icon-wrapper">
                                  <Image
                                    src='/icons/delivery/express/icon-delivery-date-yes.svg'
                                    alt='Choose Delivery Date'
                                    layout='responsive'
                                    width="50"
                                    height='50'
                                  />
                                </div>
                            <p className="delivery-type">Express Engineered Delivery</p>
                            <p>Select the exact time and date when you would like your product delivered. We can fit the delivery around you, so you won’t have to wait at home all day.</p>
                        </div>
                    </div>
                    <div className="delivery-item">
                        <div className="image-wrapper">
                            <Image
                                src='/images/delivery/delivery-waiting.webp'
                                alt='Call Centre'
                                layout='responsive'
                                width="1000"
                                height='667'
                              />
                        </div>
                        <div className="delivery-point">
                            <div className="icon-wrapper">
                                 <Image
                                    src='/icons/delivery/express/icon-delivery-date-no.svg'
                                    alt="Can't Choose Delivery Date"
                                    layout='responsive'
                                    width="50"
                                    height='50'
                                  />
                            </div>
                            <p className="delivery-type">Standard Delivery</p>
                            <p>We'll provide a daily delivery window and cannot guarantee we will be with you at a certain time. You'll need to make sure you're at home until your product has been delivered.</p>
                        </div>
                    </div>
                </div>
                <div className="delivery-row">
                    <p className="row-title">Your Package Arrives</p>
                    <div className="delivery-item">
                        <div className="image-wrapper">
                          <Image
                                src='/images/delivery/delivery-2-man-van.webp'
                                alt='Call Centre'
                                layout='responsive'
                                width="1000"
                                height='667'
                              />
                        </div>
                        <div className="delivery-point">
                            <div className="icon-wrapper">
                              <Image
                                    src='/icons/delivery/express/icon-delivery-heavylifting.svg'
                                    alt="Heavy Lifting Included"
                                    layout='responsive'
                                    width="50"
                                    height='50'
                                  />
                            </div>
                            <p className="delivery-type">Express Engineered Delivery</p>
                            <p>We’ll do all the heavy lifting, bringing your product inside to a room of your choice. As our product are often heavy, many of our customers cannot manage without this service.</p>
                        </div>
                    </div>
                    <div className="delivery-item">
                        <div className="image-wrapper">
                            <Image
                                src='/images/delivery/delivery-at-door.webp'
                                alt='Call Centre'
                                layout='responsive'
                                width="1000"
                                height='667'
                              />
                        </div>
                        <div className="delivery-point">
                            <div className="icon-wrapper">
                              <Image
                                    src='/icons/delivery/express/icon-delivery-heavylifting-no.svg'
                                    alt="Heavy Lifting Not Included"
                                    layout='responsive'
                                    width="50"
                                     height='50'
                                  />
                            </div>
                            <p className="delivery-type">Standard Delivery</p>
                            <p>We'll drop your product off on your doorstep You'll be responsible for getting the product into your house and unpacking everything.
                            </p>
                        </div>
                    </div>
                </div>      
                <div className="delivery-row">
                    <p className="row-title">Cleaning Up</p>
                    <div className="delivery-item">
                        <div className="image-wrapper">
                            <Image
                                src='/images/delivery/delivery-removing-rubbish.webp'
                                alt='Removing rubbish"'
                                layout='responsive'
                                width="1000"
                                height='667'
                              />
                        </div>
                        <div className="delivery-point">
                            <div className="icon-wrapper">
                                <Image
                                    src='/icons/delivery/express/icon-delivery-cleaning-up-yes.svg'
                                    alt="Rubbish Removal Included"
                                    layout='responsive'
                                    width="50"
                                    height='50'
                                  />
                            </div>
                            <p className="delivery-type">Express Engineered Delivery</p>
                            <p>Once you’re all set up, we’ll clear away all the packaging. We guarantee a completely mess-free setup and installation for your peace of mind.</p>
                        </div>
                    </div>
                    <div className="delivery-item">
                        <div className="image-wrapper">
                              <Image
                                  src='/images/delivery/delivery-left-with-boxes.webp'
                                  alt='Delivery left with boxes"'
                                  layout='responsive'
                                  width="1000"
                                  height='667'
                                />
                        </div>
                        <div className="delivery-point">
                            <div className="icon-wrapper">
                                    <Image
                                      src='/icons/delivery/express/icon-delivery-cleaning-up-no.svg'
                                      alt="Rubbish Removal Not Included"
                                      layout='responsive'
                                      width="50"
                                      height='50'
                                    />
                            </div>
                            <p className="delivery-type">Standard Delivery</p>
                            <p>We will not take away any of the waste materials, and you willl have to dispose of or recycle the packaging.</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="comp-mobile">
                <div className="delivery-row">
                    <p className="row-title">Delivery Date</p>
                    <div className="delivery-item">
                    <div className="image-wrapper">
                                <Image
                                  src='/images/delivery/delivery-left-with-boxes.webp'
                                  alt='Delivery left with boxes"'
                                  layout='responsive'
                                  width="1000"
                                  height='667'
                                />
                                  <div className="icon-wrapper">
                                    <Image
                                      src='/icons/delivery/express/icon-delivery-cleaning-up-no.svg'
                                      alt="Rubbish Removal Not Included"
                                      layout='responsive'
                                      width="50"
                                      height='50'
                                    />
                                  </div>
                              </div> 
                        <div className="image-wrapper">
                            <img src="{{ 'delivery-call-centre.webp' | asset_url }}" alt="Call Centre" loading="lazy">
                        </div>
                        <div className="delivery-point">
                            <div className="icon-wrapper">
                                <img src="{{ 'icon-delivery-date-yes.svg' | asset_url }}" alt="Delivery Date yes" loading="lazy">
                            </div>
                            <p className="delivery-type">Express Engineered Delivery</p>
                            <p>Select the exact time and date when you would like your product delivered. We can fit the delivery around you, so you won’t have to wait at home all day.</p>
                        </div>
                    </div>
                    <div className="delivery-item">
                        <div className="image-wrapper">
                            <img src="{{ 'delivery-waiting.webp' | asset_url }}" alt="Waiting for delivery" loading="lazy"> 
                            <!-- <div className="delivery-type">
                                <p>Standard Delivery</p>
                            </div> -->
                        </div>
                        <div className="delivery-point">
                            <div className="icon-wrapper">
                                <img src="{{ 'icon-delivery-date-no.svg' | asset_url }}" alt="Can't choose delivery date" loading="lazy">
                            </div>
                            <p  className="delivery-type">Standard Delivery</p>
                            <p>We'll provide a daily delivery window and cannot guarantee we will be with you at a certain time. You'll need to make sure you're at home until your product has been delivered.</p>
                        </div>
                    </div>
                </div>
                <div className="delivery-row">
                    <p className="row-title">Your Package Arrives</p>
                    <div className="delivery-item">
                        <div className="image-wrapper">
                            <img src="{{ 'delivery-2-man-van.webp' | asset_url }}" alt="2 Man delivery" loading="lazy"> 
                            <!-- <div className="delivery-type">
                                <p>Express Engineered Delivery</p>
                            </div> -->
                        </div>
                        <div className="delivery-point">
                            <div className="icon-wrapper">
                                <img src="{{ 'icon-delivery-heavylifting.svg' | asset_url }}" alt="Heavy Lifting yes" loading="lazy">
                            </div>
                            <p className="delivery-type">Express Engineered Delivery</p>
                            <p>We’ll do all the heavy lifting, bringing your product inside to a room of your choice. As our product are often heavy, many of our customers cannot manage without this service.</p>
                        </div>
                    </div>
                    <div className="delivery-item">
                        <div className="image-wrapper">
                            <img src="{{ 'delivery-at-door.webp' | asset_url }}" alt="Delivery left at door" loading="lazy"> 
                            <!-- <div className="delivery-type">
                                <p>Standard Delivery</p>
                            </div> -->
                        </div>
                        <div className="delivery-point">
                            <div className="icon-wrapper">
                                <img src="{{ 'icon-delivery-heavylifting-no.svg' | asset_url }}" alt="Heavy Lifting no" loading="lazy">
                            </div>
                            <p className="delivery-type">Standard Delivery</p>
                            <p>We'll drop your product off on your doorstep You'll be responsible for getting the product into your house and unpacking everything.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="delivery-row">
                    <p className="row-title">Getting Set Up</p>
                    <div className="delivery-item">
                        <div className="image-wrapper">
                            <img src="{{ 'delivery-scooter.webp' | asset_url }}" alt="Expert Assemnbly" loading="lazy"> 
                            <!-- <div className="delivery-type">
                                <p>Express Engineered Delivery</p>
                            </div> -->
                        </div>
                        <div className="delivery-point">
                            <div className="icon-wrapper">
                                <img src="{{ 'icon-delivery-set-up-yes.svg' | asset_url }}" alt="Set up yes" loading="lazy">
                            </div>
                            <p className="delivery-type">Express Engineered Delivery</p>
                            <p>We’ll assemble to product for you, taking care of everything. Once set up, we’ll explain how everything works and only leave once your completely satisfied.</p>
                        </div>
                    </div>
                    <div className="delivery-item">
                        <div className="image-wrapper">
                            <img src="{{ 'delivery-instructions.webp' | asset_url }}" alt="Delivery Set up instructions" loading="lazy"> 
                            <!-- <div className="delivery-type">
                                <p>Standard Delivery</p>
                            </div> -->
                        </div>
                        <div className="delivery-point">
                            <div className="icon-wrapper">
                                <img src="{{ 'icon-delivery-set-up-no.svg' | asset_url }}" alt="No Set up" loading="lazy">
                            </div>
                            <p className="delivery-type">Standard Delivery</p>
                            <p>You’ll be responsible for assembling your own product. You’ll need to use the instruction manual to help you get everything set up..</p>
                        </div>
                    </div>
                </div>
                <div className="delivery-row">
                    <p className="row-title">Cleaning Up</p>
                    <div className="delivery-item">
                        <div className="image-wrapper">
                            <img src="{{ 'delivery-removing-rubbish.webp' | asset_url }}" alt="Removing rubbish" loading="lazy">
                            <!-- <div className="delivery-type">
                                <p>Express Engineered Delivery</p>
                            </div> -->
                        </div>
                        <div className="delivery-point">
                            <div className="icon-wrapper">
                                <img src="{{ 'icon-delivery-cleaning-up-yes.svg' | asset_url }}" alt="No cleaning up" loading="lazy">
                            </div>
                            <p className="delivery-type">Express Engineered Delivery</p>
                            <p>Once you’re all set up, we’ll clear away all the packaging. We guarantee a completely mess-free setup and installation for your peace of mind.</p>
                        </div>
                    </div>
                    <div className="delivery-item">
                        <div className="image-wrapper">
                            <img src="{{ 'delivery-left-with-boxes.webp' | asset_url }}" alt="Delivery left with boxes" loading="lazy"> 
                            <!-- <div className="delivery-type">
                                <p>Standard Delivery</p>
                            </div> -->
                        </div>
                        <div className="delivery-point">
                            <div className="icon-wrapper">
                                <img src="{{ 'icon-delivery-cleaning-up-no.svg' | asset_url }}" alt="No Cleaning up" loading="lazy">
                            </div>
                            <p className="delivery-type">Standard Delivery</p>
                            <p>We will not take away any of the waste materials, and you willl have to dispose of or recycle the packaging.</p>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    </div>
</>
  )
}

export default expressDelivery;