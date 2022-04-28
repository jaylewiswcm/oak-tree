import React from 'react'
import { NextSeo } from 'next-seo';
import Image from 'next/image';

 const CookiePolicy = () => {
  return (
      <>
        <NextSeo  
                title="Cookie Policy | Oak Tree Mobility"
                description="Take a look at the Oak Tree Mobility website and our Cookie Policy"
            />
            <div className='legal-container con-reg'>
                <div className='content'>
                    <h1>Cookie Policy</h1>
                    <p>Our cookies fall into 2 categories:</p>
                    
                    <ol>
                        <li>
                            <p><b>Essential Cookies</b></p>
                                    <p>1.1 Function:</p>
                                    <p className='nested-p'>Some cookies are essential for the operation of our website. For example, they allow us to identify subscribers and ensure they can access the subscription only pages. If a subscriber opts to disable these cookies, the user will not be able to access all of the content that a subscription entitles them to.</p>    
                                    <p>1.2 Performance</p>
                                    <p className='nested-p'>We utilise other cookies to analyse how our visitors use our websites and to monitor website performance. This allows us to provide a high quality experience by customising our offering and quickly identifying and fixing any issues that arise. For example, we might use performance cookies to keep track of which pages are most popular, which method of linking between pages is most effective, and to determine why some pages are receiving error messages. We might also use these cookies to highlight articles or site services that we think will be of interest to you based on your usage of the website.</p>
                        </li>
                        <li>
                            <p><b>Third Party Cookies</b></p>
                            <p>Where third-party cookies are present on our sites, we attempt to be as upfront and clear as possible about their intended purpose. We also use or allow third parties to serve cookies that fall into the two categories below.</p>
                                    <p>2.1 Website Function Cookies</p>
                                    <p className='nested-p'>We use functionality cookies to allow us to remember your preferences. For example, cookies save you the trouble of typing in a username every time you access the site, and recall your customisation preferences, such as which regional edition of the website you want to see when you log in. We also use functionality cookies to provide you with enhanced services such as allowing you to watch a video online or comment on a blog.</p>
                                    <p>2.2 Other third party cookies</p>
                                    <p className='nested-p'>We may also use third party cookies to help us with market research, revenue tracking, improving site functionality and monitoring compliance with our terms and conditions. We may use third party companies to provide advertising services and/or to collect certain information when you visit and interact with our website. These third-party companies may collect and use non-personally identifiable information (e.g. click stream information, browser type, time and date, subject of advertisements clicked or scrolled over, etc.) during your visit to this website (and/or other websites) in order to provide advertisements about goods and services likely to be of greater interest to you. These third-party companies may use cookies and other technologies to recognise your browser to collect and record information about your web surfing activity including your activities on this website.</p>
                                    <p className='nested-p'>You may visit the European Interactive Digital Advertising Alliance at http://youronlinechoices.eu/ to learn more about interest-based advertising, or to opt out of receiving advertisements tailored to your interests on your browser, from their respective members and participants.</p>
                                    <p className='nested-p'>As we’ve explained above, cookies help you to get the most out of our websites. Please remember that if you do choose to disable cookies, you may find that certain sections of our website do not work properly</p>
                        </li>
                    </ol>
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

export default CookiePolicy;