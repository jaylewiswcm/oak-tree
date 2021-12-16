import React from 'react'
import Image from 'next/image';
import Next from '../../components/elements/buttons/Next';

const theTulip = () => {
    return (
        <>
            <div className='hero product-hero'>
                <div className='hero-image'>
                    <Image 
                        src='/images/home/hero.png'
                        alt='Home Hero Living Room'
                        layout="fill" 
                        objectFit='cover' 
                        objectPosition='center'
                    />
                </div>
                <div className='hero-inner'>
                    <div className='title-wrapper'>
                        <p>A touch of elegance</p>
                        <h1>The Oak Chair</h1>
                    </div>
                    <button className='hero-cta'>Explore Product</button>
                </div>
            </div>
            <section className='container-regular'>
                <div className='title-wrapper'>
                    <p>The Oak</p>
                    <h3>Unparalleled<br/>Comfort and Support</h3>  
                </div> 
                <p className='para-text'>The chairs in this range each feature three luxuriously filled back cushions, which provide unparalleled comfort and support. In addition, with their scroll arms and piped wings, these recliners are perfectly suited to those looking to add a touch of elegance to their home.</p> 
            </section>
            <section className='section-info container-regular'>
                <div className='content-info'>
                    <h4>Choose your Material</h4>
                    <p>We pride ourselves on our comprehensive range of fabrics and leather. With such a wide selection, there will be something you love whatever your taste. Our consultant can help you choose something that will perfectly complement your interior style, meaning your chair will look as good as it feels.</p>
                    <button className='learn-more'>Learn More</button>
                </div>
                <div className='content-imagery'>
                    <Image 
                        src='/images/products/chairs/oak/section-1.png'
                        alt='Home Hero Living Room'
                        layout="intrinsic"
                        width='650'
                        height='670'
                    />
                </div>
            </section>
            <section className='section-info container-regular'>
                <div className='content-imagery'>
                    <Image 
                        src='/images/products/chairs/oak/section-2.png'
                        alt='Home Hero Living Room'
                        layout="intrinsic"
                        width='650'
                        height='670'
                    />
                </div>
                <div className='content-info'>
                    <h4>Choose your Size</h4>
                    <p>One of the most important choices you will make when buying your chair is its size. During your home consultation, you can try out one of our chairs and see how it feels. Then we will take your exact measurements and help you choose a chair that will fit you perfectly and offer supreme comfort.</p>
                    <button className='learn-more'>Learn More</button>
                </div>
            </section>
            <section className='section-info container-regular'>
                <div className='content-info'>
                    <h4>Choose your Motor</h4>
                    <p>The motor in your chair will determine exactly how it rises and reclines. We offer a number of motors, each of which suits a particular requirement. If you have limited space, for instance, or if you like to sleep on a chair that reclines completely, you’ll need a special motor.</p>
                    <button className='learn-more'>Learn More</button>
                </div>
                <div className='content-imagery'>
                <Image 
                        src='/images/products/chairs/oak/section-3.png'
                        alt='Home Hero Living Room'
                        layout="intrinsic"
                        width='650'
                        height='670'
                    />
                </div>
            </section>
            <section className='accessories container-regular'>
                <h4>Choose your Accessories</h4>
                <div className='option-table'>
                    <div className='option-row'>
                        <div className='option-content'>
                            <p className='option-name'>Heat & Massage</p>
                            <p className='option-p'>Upgrade to pure luxury with built in heat and massage. Chairs with these optional features will keep you warm while giving you a gentle massage to help you relax.</p>
                        </div>
                        <div className='option-imagery'>
                            <Image 
                              src='/images/products/chairs/accessories/heat-massage.png'
                              alt='Heat and Massage'
                              layout="intrinsic"
                              width='502'
                              height='196'
                            />
                        </div>
                    </div>
                    <div className='option-row'>
                        <div className='option-content'>
                            <p className='option-name'>Head Cover</p>
                            <p className='option-p'>The top of the backrest is subjected to heavier wear than other areas of the chair. Protect your investment with a washable head cover that can be easily replaced when it wears out.</p>
                        </div>
                        <div className='option-imagery'>
                            <Image 
                              src='/images/products/chairs/accessories/head-cover.png'
                              alt='Head Cover'
                              layout="intrinsic"
                              width='502'
                              height='196'
                            />
                        </div>
                    </div>
                    <div className='option-row'>
                        <div className='option-content'>
                            <p className='option-name'>Arm Caps</p>
                            <p className='option-p'>The chair arms are one of the places that take the most wear. A pair of arm caps will help keep this area protected and keep your chair looking even better for longer.</p>
                        </div>
                        <div className='option-imagery'>
                            <Image 
                              src='/images/products/chairs/accessories/arm-caps.png'
                              alt='Arm Caps'
                              layout="intrinsic"
                              width='502'
                              height='196'
                            />
                        </div>
                    </div>
                    <div className='option-row'>
                        <div className='option-content'>
                            <p className='option-name'>Head Cushions</p>
                            <p className='option-p'>Get even more comfort with a specially designed head cushion that works in perfect harmony with your chair. Simply clip it in place and sit back in pure comfort.</p>
                        </div>
                        <div className='option-imagery'>
                            <Image 
                              src='/images/products/chairs/accessories/head-cushions.png'
                              alt='Head Cushions'
                              layout="intrinsic"
                              width='502'
                              height='196'
                            />
                        </div>
                    </div>
                    <div className='option-row'>
                        <div className='option-content'>
                            <p className='option-name'>Reading Light</p>
                            <p className='option-p'>Rediscover the joys of reading with an illuminating light that can be adjusted to any angle you require.</p>
                        </div>
                        <div className='option-imagery'>
                            <Image 
                              src='/images/products/chairs/accessories/reading-light.png'
                              alt='Reading Light'
                              layout="intrinsic"
                              width='502'
                              height='196'
                            />
                        </div>
                    </div>
                    <div className='option-row'>
                        <div className='option-content'>
                            <p className='option-name'>Castors</p>
                            <p className='option-p'>Castors can be added to your chair, making it easier to move and making the surrounding area easier to clean. Every chair can have castors added at no additional cost.</p>
                        </div>
                        <div className='option-imagery'>
                            <Image 
                              src='/images/products/chairs/accessories/castors.png'
                              alt='Reading Light'
                              layout="intrinsic"
                              width='502'
                              height='196'
                            />
                        </div>
                    </div>
                </div>
            </section>
            <section className='product-cta container-regular'>
                <div className='cta-wrapper'>
                    <h5>Experience<br /><span className='dark-green-3'>The Oak Collection</span></h5>
                    <div className='button-wrapper'>
                        <button>Request a Brochure</button>
                        <button className='white-bg'>Book a Home Visit</button>
                    </div>
                </div>
                <div className='product-image'>
                    <Image 
                           src='/images/products/chairs/oak/the-oak-1.png'
                           alt='The Oak'
                           layout="intrinsic"
                           width='510'
                           height='478'
                    />
                </div>
                <div className='button-wrapper mobile-button-wrapper'>
                        <button>Request a Brochure</button>
                        <button className='white-bg'>Book a Home Visit</button>
                    </div>
            </section>
            <section className='recommended-products container-regular'>
                <h6>Explore Our Collections</h6>
                <div className='recommended-flex'> 
                    <div className='product-item accent-blue-2'>
                        <Image 
                            src='/images/products/chairs/oak/the-oak-1.png'
                            alt='The Oak'
                            layout="fill"
                            objectFit='cover' 
                            objectPosition='center'                   
                        />
                        <div className='hover-info'>
                            <p className='product-name'>The Tulip</p>
                            <p className='product-cta'>Explore Chair</p>
                        </div>
                    </div>
                    <div className='product-item'>
                        <Image 
                            src='/images/products/chairs/oak/the-oak-1.png'
                            alt='The Oak'
                            layout="fill"
                            objectFit='cover' 
                            objectPosition='center'                   
                        />
                        <div className='hover-info'>
                            <p className='product-name'>The Rowan</p>
                            <p className='product-cta'>Explore Chair</p>
                        </div>
                    </div>
                    <div className='product-item dark-green-5'>
                        <Image 
                            src='/images/products/chairs/oak/the-oak-1.png'
                            alt='The Oak'
                            layout="fill"
                            objectFit='cover' 
                            objectPosition='center'                   
                        />
                        <div className='hover-info'>
                            <p className='product-name'>The Cedar</p>
                            <p className='product-cta'>Explore Chair</p>
                        </div>
                    </div>
                </div>
                <div className='button-wrapper'>
                    <Next id='' classname='' img='no-bg-dark'/>
                </div>
            </section>
        </>
    )
}

export default theTulip;
