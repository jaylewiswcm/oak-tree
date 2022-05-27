import React, { useState, useRef } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { NextSeo } from 'next-seo';
// Components
// import HomeVisitForm from '../../components/forms/homeVisit/HomeVisitForm';
import MaterialChair from '../../components/tableOfContents/MaterialChair';
import MotorChair from '../../components/tableOfContents/MotorChair';
import SizeChair from '../../components/tableOfContents/SizeChair';
import Accessories from '../../components/tableOfContents/Accessories';
import Reviews from '../../components/tableOfContents/Reviews';
import RecommendedProducts from '../../components/sections/recommendedProducts/RecommendedProducts';
import Modal from '../../components/modal/Modal';
import PopupBrochureRequestForm from '../../components/forms/PopupBrochureRequestForm';
import { TOC } from '../../components/tableOfContents/TOC';


const TheOak = () => {
    const [isOpen, setAccordianOpen] = useState('');
    const [show, setFormToShow] = useState(false);
    const tocRef = useRef<HTMLDivElement>(null);

    const openAccordian = (type:string) => {
        if(isOpen === type ) {
            setAccordianOpen('')
        }
        else {
            setAccordianOpen(type)
        }

    }
    return (
        <>
             <NextSeo  
                title="The Oak Rise and Recline Chair| Oak Tree Mobility"
                description="Choose a stylish & comfortable rise and recline chair & settee from our Oak Collection, representing the very best of classic British design."
            />
            {show &&  <Modal classNames='form-modal' setShow={setFormToShow}><PopupBrochureRequestForm setShow={setFormToShow} /></Modal>}
        <div className='product-wrapper'>
        <div className='product-hero-wrapper con-reg'>
            <div className='product-hero-carousel'>
                <div className='image-wrapper'>
                    <Image
                        src='/images/products/chairs/oak/oak-product-1.png'
                        alt='The Oak Chair'
                        layout='responsive'
                        width={790}
                        height={631}
                    />
                </div>
            </div>
            <div className='product-intro'>
                <p className='subheading'>A Touch of Elegance</p>
                 <h1 className='name'>The Oak</h1>
                 <h2 className='category'>Rise and Recliner Chair</h2>
                 <p className='desc'>Combining amazing comfort and exceptional looks, the Oak is our most popular collection</p>
                <div className='button-wrapper'>
                    <button className='main-cta' onClick={() => setFormToShow(true)}>
                        <p className='mobile-text'>Request a Brochure</p>
                        <p className='desktop-text'>Request Your Free Brochure</p>
                    </button>
                    {/* <Link href='#product-information' ><a className='learn-more'>
                        <p className='mobile-text'>Learn More</p>
                        <p className='desktop-text'>Learn more about the Oak</p>
                        </a></Link> */}
                </div>
            </div>
    </div>
            <div className='product-details con-reg' id='product-information'>
                <h3 className='heading'>Unparralleled Comfort and Support</h3>
                <p className='desc mobile'>The chairs in this range each feature three luxuriously filled back cushions, which provide unparalleled comfort and support.</p>
                <ul className='mobile'>
                    <li><p>Scroll Arms</p></li>
                    <li><p>Piped Wings</p></li>
                    <li><p>Perfectly Elegant</p></li> 
                </ul>
                <p className='desc desktop'>The chairs in this range each feature three luxuriously filled back cushions, which provide unparalleled comfort and support. In addition, with their scroll arms and piped wings, these recliners are perfectly suited to those looking to add a touch of elegance to their home. With the simple-to-use handheld control panel, sitting and standing will be a breeze too.</p>
            </div>
            <div className="product-images con-reg">
                <div className='image-wrapper'>
                    <Image
                        src='/images/products/chairs/oak/oak-product-2.png'
                        alt='The Oak Chair'
                        layout='responsive'
                        width={577}
                        height={461}
                    />
                </div>
                <div className='image-wrapper'>
                <Image
                        src='/images/products/chairs/oak/oak-product-3.png'
                        alt='The Oak Chair'
                        layout='responsive'
                        width={577}
                        height={461}
                    />
                </div>
            </div>
            <Reviews product='chair' isOpen={isOpen} openAccordian={() => openAccordian('reviews')}/>
            <TOC reference={tocRef}/>
            <div className='table-of-contents' ref={tocRef}>
                <h4 className='toc-heading'>Our Process</h4>
                <MaterialChair isOpen={isOpen} openAccordian={() => openAccordian('material')}/>
                <SizeChair isOpen={isOpen} openAccordian={() => openAccordian('size')}/>
                <MotorChair isOpen={isOpen} openAccordian={() => openAccordian('motor')}/>
                <Accessories  isOpen={isOpen} openAccordian={() => openAccordian('accessories')} type='chair'/>
            </div>
            <div className='request-wrapper'>
                <div className='con-reg'>
                    <div className='request-intro'>
                        <p className='subheading'>Step Five</p>
                        <h6>Request a Free Home Visit</h6>
                        <p>Our consultant will be able to advise exactly which product is best for you and your home.</p>
                    </div>
                <div className='form-and-content'>
                    <div className='supporting-content'>
                        <p className='support-heading'>What will it include?</p>
                        <ul>
                            <li>
                                <div className='icon-wrapper'>
                                    <Image 
                                        src='/icons/home-visit/icon-made-to-measure.svg'
                                        alt='Made-to-measure'
                                        layout='responsive'
                                        width='84'
                                        height='70'
                                    />
                                </div>
                                <p>Our consultant will be able to advise exactly which product is best for you and your home.</p>
                            </li>
                            <li>
                                <div className='icon-wrapper'>
                                <Image 
                                        src='/icons/home-visit/icon-consulting.svg'
                                        alt='Made-to-measure'
                                        layout='responsive'
                                        width='84'
                                        height='70'
                                    />
                                </div>
                                <p>Our consultant will be able to advise exactly which product is best for you and your home.</p>
                            </li>
                            <li>
                                <div className='icon-wrapper'>
                                <Image 
                                        src='/icons/home-visit/icon-made-to-measure.svg'
                                        alt='Made-to-measure'
                                        layout='responsive'
                                        width='84'
                                        height='70'
                                    />
                                </div>
                                <p>Our consultant will be able to advise exactly which product is best for you and your home.</p>
                            </li>
                            <li>
                                <div className='icon-wrapper'>
                                <Image 
                                        src='/icons/home-visit/icon-consulting.svg'
                                        alt='Made-to-measure'
                                        layout='responsive'
                                        width='84'
                                        height='70'
                                    />
                                </div>
                                <p>Our consultant will be able to advise exactly which product is best for you and your home.</p>
                            </li>
                        </ul>
                    </div>
                    <div className='form'>
                        <p className='form-title'>Request your FREE home visit by entering your details below</p>
                        <form action="">
                            <div className='input-wrapper'>
                                <label htmlFor="title">Title <span className='required'>*</span></label>
                                <input type="text" name='title' id='title' placeholder='Choose your title'/>
                            </div>
                            <div className='input-wrapper'>
                                <label htmlFor="lname">Last Name <span className='required'>*</span></label>
                                <input type="text" name='lname' id='lname' placeholder='Enter your last name'/>
                            </div>
                            <div className='input-wrapper'>
                                <label htmlFor="tel">Phone Number <span className='required'>*</span></label>
                                <input type="text" name='tel' id='tel' placeholder='Enter your phone number'/>
                            </div>
                            <div className='input-wrapper'>
                                <label htmlFor="street">First Line of Address <span className='required'>*</span></label>
                                <input type="text" name='street' id='street' placeholder='Enter your first line of address'/>
                            </div>
                            <div className='input-wrapper'>
                                <label htmlFor="zip">Postal Code <span className='required'>*</span></label>
                                <input type="text" name='zip' id='zip' placeholder='Enter your Postal Code'/>
                            </div>
                            <div className='consent-wrapper'>
                                <label htmlFor="consent">I agree to recieve emails from Oak Tree Mobility and our terms and conditions</label>
                                <input type="checkbox" id="consent" name="consent" value="true" />
                            </div>
                            <div className='submit-wrapper'>
                                <input type="submit" value='Request Home Visit' />
                            </div>
                        </form>
                    </div>
                </div>
                </div>
            </div>
            {/* <div className='request-wrapper con-reg'>
                <h6 className='heading'>Book a Home Visit</h6>
                <p className='content'>Our consultant will be able to advise exactly which product is best for you and your home.</p>
                <div className='image-and-form'>
                    <div className='image-wrapper'>
                        <Image 
                            src='/images/lifestyle/home-visit-desktop.png'
                            alt='home visit'
                            layout='fill'
                            objectFit='cover'
                            objectPosition='center'
                        />
                    </div>
                    <div className='form-and-cta'>
                        <button className='main-cta'>
                            <p>Request A Home Visit</p>
                        </button>
                        <HomeVisitForm />
                    </div>
                </div>
            </div> */}
            <RecommendedProducts product='chairs'/>
        </div>
        </>
    )
}

export default TheOak;
