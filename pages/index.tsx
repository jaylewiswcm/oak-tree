import React from 'react';
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import {  animateScroll as scroll } from "react-scroll";
import Link from 'next/link'
import { NextSeo } from 'next-seo';
// Component
import IndexCollections from '../components/pages/index/collections/IndexCollections';
import OTExperience from '../components/pages/index/experience/OTExperience';
import ReviewCapsule from '../components/elements/reviews/ReviewCapsule';
import Testimonials from '../components/elements/testimonials/Testimonials'
import CategoryTag from '../components/elements/product-tags/CategoryTag';

type MyProps = { };
type MyState = { requestClassName: string, uspOverlay:string };

class Home extends React.Component<MyProps, MyState> {
  constructor(props: any) {
    super(props);
    this.state = { requestClassName: 'original',  uspOverlay: '' }

  }
  
  private introText = React.createRef<HTMLDivElement>()

  componentDidMount() {
    window.addEventListener('scroll', this.listenScrollEvent, true);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.listenScrollEvent);
  }


  isElementInViewport (el: any) {
    var rect = el.getBoundingClientRect();

    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /* or $(window).height() */
        rect.right <= (window.innerWidth || document.documentElement.clientWidth) /* or $(window).width() */
    );
}

  listenScrollEvent = () => {
    const node = this.introText.current
    if(node !== null) {
      const inView = this.isElementInViewport(node);
      if(inView) {
        this.setState({
          requestClassName: 'original'
        })
      } else {
        this.setState({
          requestClassName: 'corner'
        })
      }
    }
  }

closeUspOverlay = () => {
  this.setState({uspOverlay : 'overlay-hide'})
}

  render() {
    return (
      <>
      <NextSeo 
            title="Oak Tree Mobility | Your Comfort is Our Strength"
            description="Oak Tree Mobility is the UK's leading mobility specialist helping people live independently. Handmade by skilled craftsmen to order in the UK ..."
      />

      <div className='hero-fs'>
      <div className='hero-image'></div>
      <div className='hero-content'>
          <h1>Your Comfort is Our Strength</h1>
          <h2>Find your new <Link href='/chairs'><a>Rise and Recline Chair</a></Link>, <Link href='/adjustable-beds'><a>Adjustable Bed</a></Link> or <Link href='/bath-lifts'><a>Bath Lifts</a></Link></h2>
          <button className='main-cta'>
            <p>Request Free Brochure</p>
           </button>
      </div>
      </div>
      {/* <div className='fullscreen-hero con-reg'>
        <div className='hero-image'></div>
        <div className='hero-content-center'>
          <h1>Your Comfort is Our Strength</h1>
          <h2>Find your new <a href='/chairs'>Rise and Recline Chair</a>, <a href='/adjustable-beds'>Adjustable Bed</a> or <a href='/bath-lifts'>Bath Lifts</a></h2>
          <button className='cta main-cta'>Request Your Free Brochure</button>
        </div>
      </div> */}
      <div className='section-heading main-heading'>Our Categories</div>
      <div className='home-cat'>
        <div className='cat-item'>
          <div className='img-wrap'>
           <Image 
              src='/images/home/category-chairs.png'
              alt='Rise and Recline Chairs'
              layout='fill'
              objectFit='cover'
              objectPosition='center'
            />
          </div>
          <Link href='/'>
            <a className='cat-link'>
              <h3>Explore Chairs</h3>
              <div className='icon-wrapper'>
                <Image 
                  src='/images/vectors/cat-link-arrow.svg'
                  alt='Link arrow'
                  width='27'
                  height='16'
                />
              </div>
            </a>
          </Link>
          <div className='tag-flex'>
            <CategoryTag tagName='British Made' imgSrc='/images/icons/british-made/british-made-green.svg' imgAlt='British Made' imgWidth='25' imgHeight='25'/>
            <CategoryTag tagName='Supports Joints' imgSrc='/images/icons/health/supports-joints.svg' imgAlt='Supports Joints' imgWidth='25' imgHeight='25'/>
          </div>
        </div>
        <div className='cat-item'>
          <div className='img-wrap'>
           <Image 
              src='/images/home/category-beds.png'
              alt='Adjustable Beds'
              layout='fill'
              objectFit='cover'
              objectPosition='center'
            />
          </div>
          <Link href='/'>
            <a className='cat-link'>
              <h3>Explore Beds</h3>
              <div className='icon-wrapper'>
                <Image 
                  src='/images/vectors/cat-link-arrow.svg'
                  alt='Link arrow'
                  width='27'
                  height='16'
                />
              </div>
            </a>
          </Link>
          <div className='tag-flex'>
            <CategoryTag tagName='British Made' imgSrc='/images/icons/british-made/british-made-green.svg' imgAlt='British Made' imgWidth='25' imgHeight='25'/>
            <CategoryTag tagName='Improves Sleep' imgSrc='/images/icons/health/improves-sleep.svg' imgAlt='Improves Sleep' imgWidth='25' imgHeight='25'/>
          </div>
        </div>
        <div className='cat-item'>
          <div className='img-wrap'>
           <Image 
              src='/images/home/category-bathlifts.png'
              alt='Bath Lifts'
              layout='fill'
              objectFit='cover'
              objectPosition='center'
            />
          </div>
          <Link href='/'>
            <a className='cat-link'>
              <h3>Explore Bath Lifts</h3>
              <div className='icon-wrapper'>
                <Image 
                  src='/images/vectors/cat-link-arrow.svg'
                  alt='Link arrow'
                  width='27'
                  height='16'
                />
              </div>
            </a>
          </Link>
          <div className='tag-flex'>
            <CategoryTag tagName='British Made' imgSrc='/images/icons/british-made/british-made-green.svg' imgAlt='British Made' imgWidth='25' imgHeight='25'/>
          </div>
        </div>
      </div>
      {/* <div className='con-reg home-categories'>
        <div className='category'>
          <div className='image-wrapper'>
            <Image 
              src='/images/home/category-chairs.png'
              alt='Rise and Recline Chairs'
              layout='fill'
              objectFit='cover'
              objectPosition='center'
            />
          </div>
          <h3>Rise and Recline Chairs</h3>
          <p className='cat-desc'>Luxurious and well-made allowing supreme comfort at the touch of a button</p>
          <Link href="/chairs"><a className='button main-button'>View Collection</a></Link>
        </div>
        <div className='category'>
          <div className='image-wrapper'>
            <Image 
              src='/images/home/category-beds.png'
              alt='Adjustable Beds'
              layout='fill'
              objectFit='cover'
              objectPosition='center'
            />
          </div>
          <h3>Adjustable Beds</h3>
          <p className='cat-desc'>Sophistication and comfort, choose from our wide collection of adjustable beds.</p>
          <Link href="/adjustable-beds"><a className='button main-button'>View Collection</a></Link>
        </div>
        <div className='category'>
          <div className='image-wrapper'>
            <Image 
              src='/images/home/category-bathlifts.png'
              alt='Bath Lifts'
              layout='fill'
              objectFit='cover'
              objectPosition='center'
            />
          </div>
          <h3>Bath Lifts</h3>
          <p className='cat-desc'>Rediscover the joys and health benefits of a nice warm bath with our amazing bath lift.</p>
          <Link href="/bath-lifts"><a className='button main-button'>View Collection</a></Link>
        </div>
      </div> */}
      <div className='ot-intro'>
        <h4>The UKs Leading Mobility Specialists</h4>
        <p className='intro-p'>At Oak Tree, we make beautiful products that help people live independently. We believe everyone should be free to live a rich and fulfilling life and this belief affects everything we do.</p>
        <button className='main-cta'>
          <p>Request Your Free Brochure</p>
        </button>
      </div>
      {/* <div className='home-ot-intro con-reg flex-col-center'>
        <div className='logo'>
          <Image 
            src='/logo/logo.svg'
            alt='Oak Tree Mobility'
            width='300'
            height='62'
          />
        </div>
        <h4>The UK's Leading Mobility Specialists</h4>
        <p>At Oak Tree, we make beautiful products that help people live independently. We believe everyone should be free to live a rich and fulfilling life and this belief affects everything we do.</p>
        <div className='cta-wrapper'>
          <button className='main-cta'>Request Your Free Brochure</button>
          <Link href='#'><a>What makes us different?</a></Link>
        </div>
      </div> */}

      <div className='banner-flex-2'>
        <div className='horizontal-banner'>
          <div className='img-wrap'></div>
          <div className='banner-content'>
            <p className='sub-heading dark-green-1'>Limited Time Only</p>
            <h5 className='heading'>Buy one get one half price</h5>
            <p className='banner-p'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore</p>
            <button className='learn-more-btn'>
              <p>Learn More</p>
            </button>
          </div>
        </div>
        <div className='horizontal-banner'>
          <div className='img-wrap'></div>
          <div className='banner-content'>
            <p className='sub-heading bhf-red'>Supporting<br />The British Heart Foundation</p>
            <h5 className='heading'>Minimum £200 Trade in Offer </h5>
            <p className='banner-p'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore</p>
            <button className='learn-more-btn bg-bhf-red'>
              <p>Learn More</p>
            </button>
          </div>
        </div>
      </div>

      <div className='as-seen-on'>
        <p className='section-heading'>As seen on</p>
        <div className='item-slider'>
          <div className='item'>
            <Image 
              src='/images/as-seen-on/telegraph.svg'
              alt='The Telegraph'
              width='290'
              height='104'
            />
          </div>
        </div>
        <div className='slider-dots'>
          <div className='dot'></div>
          <div className='dot'></div>
          <div className='dot active'></div>
          <div className='dot'></div>
        </div>
      </div>

      <div className='ot-difference-selection'>
      <p className='section-heading'>The Oak Tree Difference</p>
        <Link href='/'>
          <a className='selection'>
            <div className='icon-wrapper'>
              <Image 
                src='/images/icons/british-made/british-made.svg'
                alt='British Made'
                width='99'
                height='81'
              />
            </div>
            <div className='selection-content'>
              <p className='selection-title'>British Made</p>
              <p className='acting-link'>Find out more <Image src='/images/icons/arrows/small-green-arrow.svg' alt='arrow' width='15' height='10'/></p>
            </div>
          </a>
        </Link>
        <Link href='/'>
          <a className='selection light-grey-bg'>
            <div className='icon-wrapper'>
              <Image 
                src='/trustpilot/trustpilot-logo-grey-bg.svg'
                alt='Trustpilot logo'
                width='99'
                height='81'
              />
            </div>
            <div className='selection-content'>
              <p className='selection-title'>Five Star Rated</p>
              <p className='acting-link'>Find out more <Image src='/images/icons/arrows/small-green-arrow.svg' alt='arrow' width='15' height='10'/></p>
            </div>
          </a>
        </Link>
        <Link href='/'>
          <a className='selection'>
            <div className='icon-wrapper'>
              <Image 
                src='/images/occupational-therapist/ot-logo-icon.svg'
                alt='Occupational Therapist - UK Therapy Services'
                width='99'
                height='81'
              />
            </div>
            <div className='selection-content'>
              <p className='selection-title'>Occupational Therapist</p>
              <p className='acting-link'>Find out more <Image src='/images/icons/arrows/small-green-arrow.svg' alt='arrow' width='15' height='10'/></p>
            </div>
          </a>
        </Link>
        <Link href='/'>
          <a className='selection light-grey-bg'>
            <div className='icon-wrapper'>
              <Image 
                src='/images/icons/express-delivery-grey-bg.svg'
                alt='Express Delivery'
                width='99'
                height='81'
              />
            </div>
            <div className='selection-content'>
              <p className='selection-title'>Express Delivery</p>
              <p className='acting-link'>Find out more <Image src='/images/icons/arrows/small-green-arrow.svg' alt='arrow' width='15' height='10'/></p>
            </div>
          </a>
        </Link>
      </div>

      <div className='home-reviews'>
        <p className='section-subheading'>Rated Excellent on Trustpilot</p>
        <p className='section-heading'>Hear what our customers<br />have to say</p>
        <div className='review-carousel'>
          <div className='review'>
            <div className='review-header'>
              <div className='review-avatar'>
                <p>DH</p>
              </div>
              <div className='review-details'>
                <p className='review-name'>Doris Holland</p>
                <p className='review-loc'>London</p>
              </div>
              <div className='review-stars'>
                <Image 
                  src='/trustpilot/stars-4_5.svg'
                  alt='4.5 stars'
                  width='80'
                  height='15'
                />
              </div>
            </div>
            <div className='review-content'>
              <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
            </div>
            <div className='review-footer'>
              <div className='review-date'>2 Days ago</div>
              <div className='review-logo'>
                <Image 
                  src='/trustpilot/trustpilot-logo.svg'
                  alt='Trustpilot'
                  width='103'
                  height='25'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className='grid-col-2'>
        <div className='horizontal-banner'>
          <p className='sub-heading'>Limited Time Only</p>
          <h5>Buy one get one half price</h5>
          <p className='banner-p'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna</p>
          <button className=''></button>
        </div>
        <div className='horizontal-banner'>
          <p className='sub-heading'>Limited Time Only</p>
          <h5>Buy one get one half price</h5>
          <p className='banner-p'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna</p>
          <button className=''></button>
        </div>
      </div> */}
      </>
  )
}
}

export default Home
