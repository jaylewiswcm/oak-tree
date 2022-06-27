import React from 'react'
import {NextSeo} from 'next-seo';
import Image from 'next/image';
import Link from 'next/link';
import FooterCollections from '../components/sections/collections/FooterCollections';

const VatExemptEligibility = () => {
  return (
    <>
       <NextSeo  
                title="£200 Trade In | Oak Tree Mobility"
                description="£200 Trade In. Find out more."
            />
        {/* <div className='bg-dark-green-1 wave-banner'>
            <div className='con-reg'>
                <h1 className='heading'>VAT Exempt Eligibilty</h1>    
            </div>    
        </div>   */}

        <div className='help-centre-hero'>
                <div className='con-reg inner-hero'>
                    <h1>VAT Exempt Eligibilty</h1>
                    <h2>Help Centre</h2>
                    {/* <p>Everything you need to know about Oak Tree Mobility</p> */}
                </div>
            </div>

        <div className='legal-container con-reg'>
                <div className='content'>
                    <h1>What is it?</h1>
                    <p>If you are disabled or have a long term illness, you won’t have to pay VAT on products that are designed or adapted for your own personal or domestic use. This includes all Oak Tree Mobility rise and recline chairs, adjustable beds, and bath lifts.</p>
                    <h2>How it Works</h2>
                    <p>To get the VAT relief, you must have a disability or long-term illness that qualifies. For the purposes of VAT exemption, you are disabled or have a long-term illness if:</p>
                    <ul>
                        <li><p>You have a physical or mental impairment that affects your ability to carry out everyday activities, eg blindness</p></li>
                        <li><p>You have a condition that’s treated as chronic sickness, like diabetes</p></li>
                        <li><p>You’re terminally ill</p></li>
                    </ul>
                    <p>It is worth noting that, if you are elderly but able-bodied, you will not qualify. If you do meet the requirements, you will need to confirm it in writing. Our mobility advisors can help you with this if you need. To find out more visit <a href='https://www.gov.uk/financial-help-disabled/vat-relief' target='_blank'className='oaktree-green underline' rel='noreferrer'>the HMRC website</a>.</p>
                    <h3>Medical Conditions Acceptable for VAT Exemption</h3>
                    <p>There are too many medical conditions to list here, but some of most common ones include:</p>
                    <ul className='list-of-conditions'>
                        <li><p>Alzheimers</p></li>
                        <li><p>Amputee</p></li>
                        <li><p>Angina</p></li>
                        <li><p>Ankylosing Spondylitus</p></li>
                        <li><p>Ataxia</p></li>
                        <li><p>Bronchiectasis</p></li>
                        <li><p>Cancer</p></li>
                        <li><p>Cerebellum Ataxia</p></li>
                        <li><p>Cerebral Palsy</p></li>
                        <li><p>Cerebral Vasculitis</p></li>
                        <li><p>Chronic Arthritis</p></li>
                        <li><p>COPD</p></li>
                        <li><p>Degenerative Spine</p></li>
                        <li><p>Dementia</p></li>
                        <li><p>Diabetes</p></li>
                        <li><p>Diverticulitis</p></li>
                        <li><p>Emphysema</p></li>
                        <li><p>Epilepsy</p></li>
                        <li><p>Fibromyalgia</p></li>
                        <li><p>Functional Movement Disorder</p></li>
                        <li><p>Knee/Hip replacement</p></li>
                        <li><p>Lymphedema</p></li>
                        <li><p>Motor Neuron Disease</p></li>
                        <li><p>Multiple Sclerosis</p></li>
                        <li><p>Muscular Dystrophy</p></li>
                        <li><p>Myelitis</p></li>
                        <li><p>Oedema</p></li>
                        <li><p>Osteoarthritis</p></li>
                        <li><p>Osteoporosis</p></li>
                        <li><p>Parkinson’s</p></li>
                        <li><p>Partially Sighted</p></li>
                        <li><p>Peripheral Vascular Disease</p></li>
                        <li><p>Pneumonia</p></li>
                        <li><p>Polymyositis</p></li>
                        <li><p>Pulmonary Fibrosis</p></li>
                        <li><p>Pulmonary Hypertension</p></li>
                        <li><p>Respiratory Failure</p></li>
                        <li><p>Rheumatism</p></li>
                        <li><p>Rheumatoid Arthritis</p></li>
                        <li><p>Scoliosis</p></li>
                        <li><p>Spina Bifida</p></li>
                        <li><p>Spondylitis</p></li>
                        <li><p>Stenosis</p></li>
                        <li><p>Stroke</p></li>
                    </ul>
                    <p>For a full list, or to find out more, give us a call and speak to one of our advisors.</p>
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
                        <h4>Want to find out more? Speak to our advisors</h4>
                        <p>Give us a call on <a href='tel:0800094999'>0800 094 999</a> to speak to customer services</p>
                        <p>Monday - Friday 9am-7pm</p>
                        <p>Sunday 9am-5pm</p>
                    </div>
                    </div>
            </div>
            <FooterCollections />
    </>
  )
}

export default VatExemptEligibility;