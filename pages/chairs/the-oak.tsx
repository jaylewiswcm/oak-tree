import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
// Components
import { Fabrics } from '../../components/sections/carousel/Fabrics';
import { Accessories } from '../../components/sections/accessories/Accessories';
import ProductReviews from '../../components/sections/reviews/ProductReviews';
const theOak = () => {
    return (
        <>
        <div className='product-wrapper con-reg'>
        <div className='product-hero-wrapper '>
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
                    <button className='main-cta'>
                        <p className='mobile-text'>Request a Brochure</p>
                        <p className='desktop-text'>Request Your Free Brochure</p>
                    </button>
                    <Link href='' ><a className='learn-more'>
                        <p className='mobile-text'>Learn More</p>
                        <p className='desktop-text'>Learn more about the Oak</p>
                        </a></Link>
                </div>
            </div>
    </div>
            <div className='product-details'>
                <h3 className='heading'>Unparralleled Comfort and Support</h3>
                <p className='desc mobile'>The chairs in this range each feature three luxuriously filled back cushions, which provide unparalleled comfort and support.</p>
                <ul className='mobile'>
                    <li><p>Scroll Arms</p></li>
                    <li><p>Piped Wings</p></li>
                    <li><p>Perfectly Elegant</p></li> 
                </ul>
                <p className='desc desktop'>The chairs in this range each feature three luxuriously filled back cushions, which provide unparalleled comfort and support. In addition, with their scroll arms and piped wings, these recliners are perfectly suited to those looking to add a touch of elegance to their home. With the simple-to-use handheld control panel, sitting and standing will be a breeze too.</p>
            </div>
            <div className="product-images">
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
            <div className='table-of-contents'>
                <h4 className='toc-heading'>Our Process</h4>
                <div className='toc'>
                        <button className='toc-btn'>
                          <p>Material</p> 
                            <span className='icon-wrapper'>
                              <Image 
                                src='/buttons/plus-black.svg'
                                alt='Plus'
                                layout='responsive'
                                width={15}
                                height={15} />
                            </span>
                        </button>
                        <div className='product-content'>
                            <div className='content'>
                                <p className='subheading oaktree-green'>Step One</p>
                                <h5 className='heading'>Choose Your Material</h5>
                                <p className='desc'>At Oak Tree, we pride ourselves on our comprehensive range of fabrics and leather. With such a wide selection, there will be something you love whatever your taste.</p>
                            </div>
                            <Fabrics />
                        </div>
                </div>
                <div className='toc'>
                        <button className='toc-btn'>
                          <p>Size</p> 
                            <span className='icon-wrapper'>
                              <Image 
                                src='/buttons/plus-black.svg'
                                alt='Plus'
                                layout='responsive'
                                width={15}
                                height={15} />
                            </span>
                        </button>
                        <div className='product-content'>
                            <div className='content'>
                                <p className='subheading oaktree-green'>Step Two</p>
                                <h5 className='heading'>Choose Your Size</h5>
                                <div className="image-wrapper size-image">
                                </div>
                                <p className='desc'>One of the most important choices you will make when buying your chair is its size. During your home consultation, you can try out one of our chairs and see how it feels. Then we will take your exact measurements and help you choose a chair that will fit you perfectly and offer supreme comfort.</p>
                            </div>
                        </div>
                </div>
                <div className='toc'>
                        <button className='toc-btn'>
                          <p>Motor</p> 
                            <span className='icon-wrapper'>
                              <Image 
                                src='/buttons/plus-black.svg'
                                alt='Plus'
                                layout='responsive'
                                width={15}
                                height={15} />
                            </span>
                        </button>
                        <div className='product-content'>
                            <div className='content'>
                                <p className='subheading oaktree-green'>Step Three</p>
                                <h5 className='heading'>Choose Your Motor</h5>
                                <div className="image-wrapper size-image">
                                </div>
                                <p className='desc'>The motor in your chair will determine exactly how it rises and reclines. We offer a number of motors, each of which suits a particular requirement. If you have limited space, for instance, or if you like to sleep on a chair that reclines completely, you’ll need a special motor.</p>
                            </div>
                        </div>
                </div>
                <div className='toc'>
                        <button className='toc-btn'>
                          <p>Accessories</p> 
                            <span className='icon-wrapper'>
                              <Image 
                                src='/buttons/plus-black.svg'
                                alt='Plus'
                                layout='responsive'
                                width={15}
                                height={15} />
                            </span>
                        </button>
                        <div className='product-content'>
                            <div className='content'>
                                <p className='subheading oaktree-green'>Step Four</p>
                                <h5 className='heading'>Choose Your Acessories</h5>
                                <Accessories />
                            </div>
                        </div>
                </div>
                <div className='toc'>
                        <button className='toc-btn'>
                          <p>Reviews</p> 
                            <span className='icon-wrapper'>
                              <Image 
                                src='/buttons/plus-black.svg'
                                alt='Plus'
                                layout='responsive'
                                width={15}
                                height={15} />
                            </span>
                        </button>
                        <div className='product-content'>
                            <div className='content'>
                                <ProductReviews />
                            </div>
                        </div>
                </div>
            </div>
            <div className='request-wrapper'>
                <h6 className='heading'>Book a Home Visit</h6>
                <p className='content'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.</p>
                <div className='image-and-form'>
                    <div className='image-wrapper'>
                        <Image 
                            src='/images/lifestyle/home-visit.png'
                            alt='home visit'
                            layout='responsive'
                            width={900}
                            height={489}
                        />
                    </div>
                    <div className='cta-wrapper'>
                        <button className='main-cta'>
                            <p>Request A Home Visit</p>
                        </button>
                    </div>
                </div>
            </div>
            <div className='other-products'>
            <h6>Our other chairs</h6>
            <div className='product-grid'>
            <Link href="/chairs/the-maple">
                <a className='product'>
                    <div className='image-wrapper'>
                    <Image
                        src='/images/products/chairs/maple/maple-product-1.png'
                        alt='The Maple'
                        layout='responsive'
                        width={303}
                        height={330}
                    />
                    </div>
                    <div className='hover-bg'>
                        <p className='name'>The Maple</p>
                        <p className='view'>View Chair</p>
                        <div className='acting-btn'>
                            <Image 
                                src='/buttons/arrow-yellow.svg'
                                alt='Arrow'
                                // layout='responsive'
                                width={24}
                                height={20}
                            />
                        </div>
                    </div>
                </a>
                </Link>
                <Link href="/chairs/the-tulip">
                <a  className='product'>
                <div className='image-wrapper'>
                    <Image
                        src='/images/products/chairs/tulip/tulip-product-1.png'
                        alt='The Tulip'
                        layout='responsive'
                        width={303}
                        height={330}
                    />
                    </div>
                    <div className='hover-bg'>
                        <p className='name'>The Tulip</p>
                        <p className='view'>View Chair</p>
                        <div className='acting-btn'>
                            <Image 
                                src='/buttons/arrow-yellow.svg'
                                alt='Arrow'
                                // layout='responsive'
                                width={24}
                                height={20}
                            />
                        </div>
                    </div>
                </a>
                </Link>
                <Link href="/chairs/the-rowan">
                <a className='product'>
                    <div className='image-wrapper'>
                    <Image
                        src='/images/products/chairs/rowan/rowan-product-1.png'
                        alt='The Rowan'
                        layout='responsive'
                        width={303}
                        height={330}
                    />
                    </div>
                    <div className='hover-bg'>
                        <p className='name'>The Rowan</p>
                        <p className='view'>View Chair</p>
                        <div className='acting-btn'>
                            <Image 
                                src='/buttons/arrow-yellow.svg'
                                alt='Arrow'
                                // layout='responsive'
                                width={24}
                                height={20}
                            />
                        </div>
                    </div>
                </a>
                </Link>
            </div>
        </div>
        </div>
        </>
    )
}

export default theOak;
