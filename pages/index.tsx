import React from 'react';
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { NextSeo } from 'next-seo';
import { motion } from 'framer-motion';
// Component
import Testimonials from '../components/sections/Testimonials/Testimonials';
import HomeCollections from '../components/sections/collections/HomeCollections';
import FooterCollections from '../components/sections/collections/FooterCollections';
import Reviews from '../components/sections/reviews/Reviews';
import OccupationalTherapistSection from '../components/sections/occupationalTherapist/OccupationalTherapistSection';
// images 
import homeHeroGraphic from '../public/graphics/home-hero.png'

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
      <div >
      <NextSeo 
            title="Oak Tree Mobility | Your Comfort is Our Strength"
            description="Oak Tree Mobility is the UK's leading mobility specialist helping people live independently. Handmade by skilled craftsmen to order in the UK ..."
      />
      <Head>
        <script type="text/javascript" src="//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js" async></script>
      </Head>

      <div className='mobile-usp-banner'>
        <div className='bhf-banner'>
            <div className='logo-wrapper'>
              <Image 
                src='/bhf/bhf-white.svg'
                alt='The British Heart Foundation'
                layout='responsive'
                width={108.13}
                height={29.7}
                quality="100"
              />
            </div>
            <div className='support-text'>
              <p>Proudly Working</p>
              <p>In Partnership</p>
            </div>
        </div>
        <div className='usps'>
          <div className='usp'>
            <div className='icon'>
              <Image 
                  src='/icons/home-usp-british-made.svg'
                  alt='British Made'
                  layout='responsive'
                  width={32}
                  height={32}
              />
            </div>
            <p>British Made</p>
          </div>
          <div className='usp'>
            <div className='icon'>
              <Image 
                  src='/icons/home-usp-trustpilot.svg'
                  alt='4.5 Star Rated'
                  layout='responsive'
                  width={32}
                  height={32}
              />
            </div>
            <p>4.5 Star Rated</p>
          </div>
          <div className='usp'>
            <div className='icon'>
              <Image 
                  src='/icons/home-usp-trade-in.svg'
                  alt='Trade In'
                  layout='responsive'
                  width={32}
                  height={32}
              />
            </div>
            <p>£250 Trade-in</p>
          </div>
        </div>
      </div>
      {/* <div className='index-usp-banner'>
          <div className='inner-div'>
            <div className='usp-item'>
              <div className='icon-wrapper'>
                <Image 
                  src='/icons/collection-usps/made-in-britain-new.svg'
                  alt='British Design'
                  layout='responsive'
                  width='60'
                  height='60'
                />
              </div>
              <p>British Design</p>
            </div>
            <div className='usp-item'>
              <div className='icon-wrapper'>
                <Image 
                  src='/icons/collection-usps/trade-in-new.svg'
                  alt='Trade In Offer'
                  layout='responsive'
                  width='60'
                  height='60'
                />
              </div>
              <p>Trade In Offer</p>
            </div>
            <div className='usp-item'>
              <div className='icon-wrapper'>
                <Image 
                  src='/icons/collection-usps/free-delivery.svg'
                  alt='Free Delivery'
                  layout='responsive'
                  width='60'
                  height='60'
                />
              </div>
              <p>Free Delivery</p>
            </div>
            <div className='usp-item'>
              <div className='icon-wrapper'>
                <Image 
                  src='/icons/collection-usps/warranty.svg'
                  alt='10 Year Warranty'
                  layout='responsive'
                  width='60'
                  height='60'
                />
              </div>
              <p>10 Year Warranty</p>
            </div>
          </div>
      </div> */}
      {/* <div className='stand-in-hero'>
        <h1>Hero section in progress</h1>
      </div> */}
  <div className='home-intro'>
    <Image 
       src='/images/heros/home-hero.png'
       alt='Man dancing in kitchen'
       layout='responsive'
       width={1600}
       height={598}
       quality={100}
       priority
       />
  </div>
      <div className='home-intro hide'>
        <div className='intro-content'>
          <div className='hero-bg'>
            <Image 
              src={homeHeroGraphic}
              alt='Home Hero'
              layout='fill'
              objectFit='cover'
              objectPosition='left'
              placeholder='blur'        
            />
          </div>
          <div className='title-wrapper'>
            <h1>Britian's Leading Mobility Specialists</h1>
            <p className='subheading'>At Oak Tree, we make beautiful products that help people live independently.</p>
          </div>
        </div>
        <div className='intro-image'>
          <video height="100%" autoPlay loop muted>
            <source src="videos/advert-hero.mp4"
            type="video/mp4"/>
          </video>
          <span className='mobile-image'>
            <span className='as-seen-on-tv'>
              <Image src='/icons/as-seen-on-tv/as-seen-on-tv.svg' alt='as seen on tv' layout='responsive' width={110} height={73}/> 
            </span>
            <Image src='/images/heros/home-mobile-hero.png' alt='Oak Tree Advert' layout='responsive' width={1262} height={751}/>
          </span>
        </div>
      </div>
      <div className='green-strip hide'>
        <div className='inner-wrapper con-reg'>
        {/* <div className="trustpilot-widget" data-locale="en-GB" data-template-id="53aa8807dec7e10d38f59f32" data-businessunit-id="56607bac0000ff00058643ac" data-style-height="100px" data-style-width="180px" data-theme="dark" data-font-family="Source Sans Pro" data-text-color="#ffffff">
          <a href="https://uk.trustpilot.com/review/www.oaktreemobility.co.uk" target="_blank" rel="noreferrer" >Trustpilot</a>
        </div> */}
        <div className='seen-on-tv-icon'>
          <Image 
            src='/icons/seen-on-tv.svg'
            alt='Seen on tv'
            layout='responsive'
            width={152.26}
            height={101.39}
          />
        </div>
        </div>
      </div>
      <div className='mobile-usps'>
        <div className='usp'>
          <div className='tick-wrapper'>
            <Image 
              src='/icons/green-tick.svg'
              alt='Green Tick 1'
              layout='responsive'
              width={30}
              height={30}
            />
          </div>
          <p>Handmade by skilled craftsmen to order in the UK</p>
        </div>
        <div className='usp'>
          <div className='tick-wrapper'>
            <Image 
              src='/icons/green-tick.svg'
              alt='Green Tick 2'
              layout='responsive'
              width={30}
              height={30}
            />
          </div>
          <p>A minimum £250 off when you trade in your old furniture</p>
        </div>
        <div className='usp'>
          <div className='tick-wrapper'>
            <Image 
              src='/icons/green-tick.svg'
              alt='Green Tick 3'
              layout='responsive'
              width={30}
              height={30}
            />
          </div>
          <p>Huge choice of fabris & leather to match your style</p>
        </div>
      </div>
      <div className='home-collections con-reg'>
        <h2 className='heading'>Oak Tree Catalogue</h2>
        <HomeCollections />
      </div>
      <div className='banners con-reg'>
        <Link href='/offers'>
          <a className='banner-vertical'>
            <Image 
              src='/graphics/half-price-sale.svg'
              alt='Half Price Sale'
              width='568'
              height='577'
              layout='responsive'
            />          
          </a>
        </Link>
        <div className='plus'>
          <Image src='/vectors/plus-yellow-and-red.svg' alt='Plus' layout='responsive' width='20' height='20' />
        </div>
        <Link href='/trade-in'>
          <a className='banner-vertical'>
            <Image 
                src='/graphics/trade-in.svg'
                alt='Trade In'
                width='568'
                height='577'
                layout='responsive'
              />   
          </a>
        </Link>
      </div>
      <OccupationalTherapistSection />
      <Reviews orphan={false} />
      <Testimonials pageType='normal' />
      <FooterCollections />
      </div>
  )
}
}

export default Home
