import React from 'react'
import { NextSeo } from 'next-seo';
import Image from 'next/image';
import Resources from '../components/sections/resources/Resources';
//images 
import tradeInFurniture from '../public/images/lifestyle/trade-in-furniture.png'
import delivery from '../public/images/lifestyle/two-man-delivery-small.png'

const TradeIn = () => {
    return (
        <>
            <NextSeo  
                title="£200 Trade In | Oak Tree Mobility"
                description="£200 Trade In. Find out more."
            />
            <div className='bg-dark-green-1 wave-banner'>
                <div className='con-reg'>
                    <h1 className='heading'>Trade In</h1>    
                </div>    
            </div>  
            <div className='page-intro trade-in-intro'>
                <h2>Are you thinking of what you’ll do<br/>with your old furniture?</h2>
                <p>When looking for a new chair or bed, an ongoing concern for many prospective customers is what to do with their existing furniture. Disposal can often be expensive and time consuming, and tends to add to the burden of finding the right company to choose.</p>
            </div>
            <div className='trade-in-sections con-reg'>
                <div className='section'>
                    <div className='image-wrapper'>
                        <Image
                            src={tradeInFurniture}
                            alt='Reps taking away customers furniture'
                            layout='responsive'
                            width='556'
                            height='416'
                            quality='100'
                            placeholder='blur'
                        />
                    </div>
                    <div className='section-content'>
                        <div className='icon-wrapper'>
                            <Image
                                src='/icons/collection-usps/trade-in-new.svg'
                                alt='Trade in icon'
                                layout='responsive'
                                width='60'
                                height='60'
                            />
                        </div>
                        <h3>A minimum £200 part exchange</h3>
                        <p>Thankfully, at Oak Tree Mobility we now offer an exclusive service that allows you to trade in whatever it is that needs replacing, at no charge whatsoever. In fact, we are now offering our customers a minimum of £200 part exchange for their existing items, regardless of the condition.</p>
                    </div>
                </div>
                <div className='section'>
                    <div className='image-wrapper'>
                        <Image
                            src={delivery}
                            alt='Two delivery men'
                            layout='responsive'
                            width='556'
                            height='416'
                            quality='100'
                            placeholder='blur'
                        />
                    </div>
                    <div className='section-content'>
                        <div className='icon-wrapper'>
                            <Image
                                src='/icons/delivery/icon-delivery.svg'
                                alt='Delivery Van icon'
                                layout='responsive'
                                width='60'
                                height='60'
                            />
                        </div>
                        <h3>We’ll collect on delivery</h3>
                        <p>When we deliver your brand new chair or bed, we’ll collect your furniture at the same time. Once your furniture has been collected and returned to our depot, we’ll check it over. If it’s reusable, we’ll donate it to the British Heart Foundation. They will then sell it in one of their many shops throughout the UK and use the proceeds to fund their life saving research.</p>
                    </div>
                </div>
            </div>
            <div className='returns-banner'>
                <div className='con-reg'>
                    <h4>What happens to your furniture?</h4>
                    <p>When you trade in your old chair, sofa, or bed, we’ll collect it and donate it to the British Heart Foundation. They will then use it to raise money to fund their excellent work.</p>
                </div>
            </div>
            <div className='trade-in-bhf-logo'>
                <p className='bhf-red'>Proudly Supporting</p>
                <div className='logo-wrapper'>
                    <Image
                        src='/bhf/bhf-logo.svg'
                        alt='British Heart Foundation'
                        layout='responsive'
                        width='376'
                        height='116'
                    />
                </div>
            </div>
            <div className='how-you-can-help con-reg'>
                <h5 className='bhf-red'>How your furniture could help</h5>
                <div className='section-grid'>
                    <div className='section'>
                        <div className="icon-wrapper">
                            <Image
                                src='/icons/bhf/icon-lab.svg'
                                alt='Lab Costs'
                                layout='responsive'
                                width='80'
                                height='80'
                            />
                        </div>
                        <p><span className='bhf-red'>£20</span> pays for lab costs - funding the British Heart Foundation’s pioneering, vital life saving research.</p>
                    </div>
                    <div className='section'>
                        <div className="icon-wrapper">
                            <Image
                                src='/icons/bhf/icon-phd.svg'
                                alt='PhD support'
                                layout='responsive'
                                width='80'
                                height='80'
                            />
                        </div>
                        <p><span className='bhf-red'>£50</span> could help to support a PhD student - The BHF fund over 200 scientists and clinicians, starting their career in cardiovascular research.</p>
                    </div>
                    <div className='section'>
                        <div className="icon-wrapper">
                            <Image
                                src='/icons/bhf/icon-research.svg'
                                alt='Research funding'
                                layout='responsive'
                                width='80'
                                height='80'
                            />
                        </div>
                        <p><span className='bhf-red'>£200</span> can help fund young scientists we currently have working in research teams throughout the UK.</p>
                    </div>
                </div>
            </div>
            <Resources pageType='trade-in' />
        </>
    )
}
export default TradeIn;


