import React from 'react';
import Head from 'next/head'
import Image from 'next/image'
import { getCookie } from 'cookies-next';
import { NextSeo } from 'next-seo';
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
import OurValues from '../components/sections/our-values/OurValues';

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
      <div className='index'>
      <NextSeo 
            title="Oak Tree Mobility | Your Comfort is Our Strength"
            description="Oak Tree Mobility is the UK's leading mobility specialist helping people live independently. Handmade by skilled craftsmen to order in the UK ..."
      />
      <Head>
        <script type="text/javascript" src="//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js" async></script>
      </Head>
      <div className='home-intro'>
        <div className='hero-image'></div>
        <div className='con-reg'>
          <div className='hero-content'>
            <h1>Life Is For Living</h1>
            <p className='mobile-p'>Change is the one certainty in life. As the UK’s leading mobility specialist, we’re here to help</p>  
            <p className='desktop-p'>Change is the one certainty in life. It's all part of life's rich experience. Over time your mobility changes too. What we once took for granted feels out of reach. This can be hard. As the UK's leading mobility specialist, we're here to help</p>
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
      </div>
      <HomeCollections />
      <OfferBanners orphan={false}/>
      <OccupationalTherapistSection />
      <Reviews orphan={false} />
      <Testimonials pageType='normal' />
      <OurValues />
      <FooterCollections />
      <div className='years-in-business'>
        <Image 
          src='/vectors/years-in-business.svg'
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