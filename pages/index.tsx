import React from 'react';
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { NextSeo } from 'next-seo';
// Component
import Testimonials from '../components/sections/Testimonials/Testimonials'
import FooterCollections from '../components/sections/FooterCollections';
import Reviews from '../components/sections/reviews/Reviews';

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
      <Head>
        <script type="text/javascript" src="//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js" async></script>
      </Head>
      <div className='home-intro con-reg'>
        <div className='intro-content'>
          <h1>The Uk’s Leading Mobility Specialists</h1>
          <p className='subheading'>At Oak Tree, we make beautiful products that help people live independently.</p>
          <div className="button-wrapper">
            <button className='bg-green'>
              <span className='bg-hover'></span>
              <p>Request a Free Brochure</p>
            </button>
            <button className='outline-green'>
              <span className='bg-hover'></span>
              <p>What Makes us Different?</p>
            </button>
          </div>
        </div>
        <div className='intro-image'>
          <video  autoPlay loop muted>
            <source src="videos/oaktree-ad-cut.mp4"
            type="video/mp4"/>
          </video>
        </div>
      </div>
      <div className='green-strip'>
        <div className='inner-wrapper con-reg'>
        <div className="trustpilot-widget" data-locale="en-GB" data-template-id="53aa8807dec7e10d38f59f32" data-businessunit-id="56607bac0000ff00058643ac" data-style-height="100px" data-style-width="180px" data-theme="dark" data-font-family="Source Sans Pro" data-text-color="#ffffff">
          <a href="https://uk.trustpilot.com/review/www.oaktreemobility.co.uk" target="_blank" rel="noopener">Trustpilot</a>
        </div>
        <div className='seen-on-tv-icon'>
          <Image 
            src='/icons/seen-on-tv.svg'
            alt='Seen on tv'
            width='152.26'
            height='101.39'
          />
        </div>
        </div>
      </div>
      <div className='home-collections con-reg'>
        <h2 className='heading'>Oak Tree Catalogue</h2>
        <div className='collections'>
          <Link href='/'>
            <a className='collection-item'>
              <div className='image-wrapper'>
                <Image 
                  src='/images/collections/collection-chairs.png'
                  alt='Rise and Recline Chairs'
                  layout='fill'
                  objectFit='cover'
                  objectPosition='center'
                />
              </div>
              <h3 className='collection-title'>Rise and Recline Chairs</h3>
              <p className='desc'>Luxurious and well made allowing comfort at the touch of a button.</p>
              <div className='acting-btn'>
                <div className='hover-bg'></div>
                <p>View Chairs</p>
             </div>
            </a>
          </Link>
          <Link href='/'>
            <a className='collection-item'>
              <div className='image-wrapper'>
                <Image 
                  src='/images/collections/collection-beds.png'
                  alt='Adjustable Beds'
                  layout='fill'
                  objectFit='cover'
                  objectPosition='center'
                />
              </div>
              <h3 className='collection-title'>Adjustable Beds</h3>
              <p className='desc'>The ultimate in sophistication and comfort, offering a wide collection.</p>
              <div className='acting-btn'>
                <div className='hover-bg'></div>
                <p>View Beds</p>
             </div>
            </a>
          </Link>
          <Link href='/'>
            <a className='collection-item'>
              <div className='image-wrapper'>
                <Image 
                  src='/images/collections/collection-bathlifts.png'
                  alt='Bath Lifts'
                  layout='fill'
                  objectFit='cover'
                  objectPosition='center'
                />
              </div>
              <h3 className='collection-title'>Bath Lifts</h3>
              <p className='desc'>Rediscover the joys and health benefits of a nice warm bath with our bath lift.</p>
              <div className='acting-btn'>
                <div className='hover-bg'></div>
                <p>View Bath Lifts</p>
             </div>
            </a>
          </Link>
        </div>
      </div>
      <div className='banners con-reg'>
        <div className='banner-vertical'>
          <p className='subheading'>Limited Time Only</p>
          <p className='heading'>Buy one get one half price</p>
          <button>Learn More</button>
        </div>
        <div className='banner-vertical'>
          <p className='subheading'>Supporting the British Heart Foundation</p>
          <p className='heading'>Minimum £200 Trade in Offer </p>
          <button className='bg-yellow3'>Learn More</button>
        </div>
      </div>
      <div className='occupational-therapist-wrapper con-reg'>
        <div className='image-wrapper'>
          <Image
            src='/occupational-therapist/sam-shann-1.png'
            alt='Sam Shann'
            layout='fill'
            objectFit='cover'
            objectPosition='top'
          />
        </div>
        <div className='content'>
          <p className='subheading'>Meet Samantha Shann</p>
          <p className='heading'>Our Occupational Therapist</p>
          <p className='info'>All of our products are approved by Samantha Shann, occupational therapist and co-founder of UK Therapy Services Ltd. She fully tests and evaluates everything we offer, ensuring it satisfies the high standards of an independent health professional.</p>
          <div className='bottom'>
            <p>In Partnership with</p>
            <Image 
              src='/occupational-therapist/ukts-logo.png'
              alt='UK Therapy Services'
              width='264'
              height='42'
            />
          </div>
        </div>
      </div>
      <Reviews />
      <Testimonials />
      <FooterCollections />

      </>
  )
}
}

export default Home
