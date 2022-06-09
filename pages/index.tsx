import React, { useContext }  from 'react';
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { NextSeo } from 'next-seo';
import { motion } from 'framer-motion';
// Context
import { useAppContext } from '../context/state'
// Component
import Testimonials from '../components/sections/Testimonials/Testimonials';
import HomeCollections from '../components/sections/collections/HomeCollections';
import FooterCollections from '../components/sections/collections/FooterCollections';
import Reviews from '../components/sections/reviews/Reviews';
import OccupationalTherapistSection from '../components/sections/occupationalTherapist/OccupationalTherapistSection';
import { OfferBanners } from '../components/sections/banners/OfferBanners';
// images 
import homeHeroGraphic from '../public/graphics/home-hero.png'
import { Partners } from '../components/sections/partners/Partners';

type MyProps = {setFormModal: any};
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
  <div className='home-intro'>
    <div className='hero-image'>
      <div className='hero-content'>
         <h1>Life Is For Living</h1>
         <p>Change is the one certainty in life. It's all part of life's rich experience. Over time your mobility changes too. What we once took for granted feels out of reach. This can be hard. As the UK's leading mobility specialist, we're here to help</p>
        <MainRequestButton />
      </div>
    </div>
    <div className='as-seen-on-tv'>
         <Image
            src='/icons/seen-on-tv.svg'
            alt='As seen on tv'
            layout='responsive'
            width='150'
            height='100'
         />
    </div>
    {/* <div className='hero-content'>
         <h1>Life Is For Living</h1>
         <p>Change is the one certainty in life. It's all part of life's rich experience. Over time your mobility changes too. What we once took for granted feels out of reach. This can be hard. As the UK's leading mobility specialist, we're here to help</p>
        <MainRequestButton />
    </div> */}
  </div>
      {/* <div className='home-intro hide'>
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
      </div> */}

      <div className='home-collections con-reg'>
        <h2 className='heading'>Introducing Our Products</h2>
        <HomeCollections />
      </div>
      <OfferBanners />
      <OccupationalTherapistSection />
      <Reviews orphan={false} />
      <Testimonials pageType='normal' />
      <FooterCollections />
      <div className='over-13-years'>
        <Image 
          src='/vectors/over-13-years.svg'
          alt='Over 13 years in business'
          layout='responsive'
          width='216'
          height='85'
        />
      </div>
      <Partners />
      </div>
  )
}
}

export default Home

export const MainRequestButton = () => {
  const { setFormModal } = useAppContext()
   return (
    <button className='main-cta' onClick={() => setFormModal(true)}>
           <div className='bg'></div>
           <p>Request a Free Brochure</p>
    </button>
  )
}