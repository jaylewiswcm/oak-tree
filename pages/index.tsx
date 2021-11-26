import React from 'react';
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Link, animateScroll as scroll } from "react-scroll";
// import Link from 'next/link'

type MyProps = { };
type MyState = { requestClassName: string, uspOverlay:string };

class Home extends React.Component<MyProps, MyState> {
  constructor(props: any) {
    super(props);
    this.state = { requestClassName: 'original',  uspOverlay: '' }
    
    // Don't call this.setState() here!
    // this.state = { counter: 0 };
    // this.handleClick = this.handleClick.bind(this);
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
      <div className="container-regular">
        <div className={`usp-overlay ${this.state.uspOverlay} `}>
          <Image 
            src='/images/overlays/british-made-overlay.svg'
            alt='British Made'
            layout='fill'
            objectFit='cover'
            objectPosition='center'
          />  
          <div className='inner-hidden'>
            <button className='learn-more'>Learn More</button>
            <button className='close' onClick={() => this.closeUspOverlay()}>Close</button>
          </div>
        </div>
        <div className='index-hero'>
          <div className='hero-image'>
              <Image 
                src='/images/home/hero.png'
                alt='Home Hero Living Room'
                layout="fill" 
                objectFit='cover' 
                objectPosition='center'
              />
          </div>
          <div className='index-hero-intro' id='index-intro' ref={this.introText}>
            <p className='mobile-subheading'>Oak Tree Mobility</p>
            <h1>Rise, Recline, Relax</h1>
            <h2>With Oak Tree Mobility</h2>
            <button className={this.state.requestClassName}>
              <span className='btb-bg white-bg'></span>
              <span>Request your brochure</span>
            </button>
          </div>
          <Link 
            className='scroll-down' 
            to='index-collections'
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}>
              <div className='arrow'></div>
          </Link>
        </div>
        <div className='index-collections' id='index-collections'>
          <div className='title-wrapper'>
            <p>What we do</p>
            <h3>Our Collections</h3>  
          </div>  
          <div className='collection-grid'>
            <div className='collection-item'>
                <Image 
                    src='/images/home/category-chair.png'
                    alt='Chair Collection'
                    layout="fill" 
                    objectFit='cover' 
                    objectPosition='center'
                />
                <div className='item-overlay'></div>
                <div className='collection-info'>
                  <p>Rise & Recline</p>
                  <h3>Chairs</h3>
                  <div className='acting-button'>
                    <span className='bg-overlay'></span>
                    <p>Explore Collections</p>
                  </div>
                </div>
            </div>
            <div className='collection-item'>
                <Image 
                    src='/images/home/category-bed.png'
                    alt='Chair Collection'
                    layout="fill" 
                    objectFit='cover' 
                    objectPosition='center'
                />
                <div className='item-overlay'></div>
                <div className='collection-info'>
                  <p>Adjustable</p>
                  <h3>Beds</h3>
                  <div className='acting-button'>
                    <span className='bg-overlay'></span>
                    <p>Explore Collections</p>
                  </div>
                </div>
            </div>
            <div className='collection-item'>
                <Image 
                    src='/images/home/category-bathlift.png'
                    alt='Chair Collection'
                    layout="fill" 
                    objectFit='cover' 
                    objectPosition='center'
                />
                <div className='item-overlay'></div>
                <div className='collection-info'>
                  <p>Oak Tree</p>
                  <h3>Bath Lifts</h3>
                  <div className='acting-button'>
                    <span className='bg-overlay'></span>
                    <p>Explore Collections</p>
                  </div>
                </div>
            </div>
          </div>
        </div> 


        <div className='index-intro'>
          <div className='title-wrapper'>
            <p>Why Oak Tree</p>
            <h3>The UKs's Leading<br/>Mobility Specialist</h3>  
          </div>  
          <p className='index-p'>At Oak Tree, we make beautiful products that help people live independently. We believe everyone should be free to live a rich and fulfilling life and this belief affects everything we do. It is reflected in our range of handmade rise and recline chairs, adjustable beds and bath lifts, which have already empowered thousands nationwide to enjoy the independence they deserve.</p>
        </div>

        <div className='index-banner'>
          <div className='banner-wrapper'></div>
        </div>

        <div className='index-usps'>
          <div className='title-wrapper'>
            <p>Why Oak Tree</p>
            <h3>The Oak Tree Experience</h3>  
          </div>  
          <div className='usp-grid'>
            <div className="usp-item">
              <div className='image-wrapper'></div>
              <p className='usp-title'>Handmade in Great Britain</p>
              <p className='usp-info'>At Oak Tree, we believe in Britain. We are proud that all our chairs, beds and bath lifts are designed and manufactured in Great Britain.</p>
              <a href="/">About Us</a>
            </div>
            <div className="usp-item">
              <div className='image-wrapper'></div>
              <p className='usp-title'>Five Star Satisfaction</p>
              <p className='usp-info'>Our vision for a different kind of mobility company means we have a five-star customer satisfaction rating from our customers.</p>
              <a href="/">Our Service</a>
            </div>
            <div className="usp-item">
              <div className='image-wrapper'></div>
              <p className='usp-title'>Occupational Therapist Approved</p>
              <p className='usp-info'>All our products are occupational therapist approved by an experienced medical expert, offering you complete peace of mind.</p>
              <a href="/">Our Partners</a>
            </div>
            <div className="usp-item">
              <div className='image-wrapper'></div>
              <p className='usp-title'>Supporting British Heart foundation</p>
              <p className='usp-info'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam.</p>
              <a href="/">Support BHF</a>
            </div>
          </div>
          <div className='carousel-buttons'>
            <button className='prev'>
              <Image 
                src='/images/icons/prev-arrow-green.svg'
                alt='Prev arrow'
                width='30'
                height='30'
              />
            </button>
            <button className='next'>
              <Image 
                src='/images/icons/next-arrow-white.svg'
                alt='Next arrow'
                width='30'
                height='30'
              />
            </button>
          </div>
        </div>

        <div className='index-enviroments'>
          <div className='col-1 col'>
            <Image 
              src='/images/home/hero.png'
              alt='Chair Collection'
              layout="fill"  
              objectFit='cover' 
              objectPosition='center'
            />
            <div className='product-indicator'>
              <div className='indicator-outer'>
                <div className='indicator-inner'></div>
              </div>
              <div className='product-info-modal'>
                <p className='name'>The Oak</p>
                <p className='type'>Rise & Recline Chair</p>
              </div>
            </div>
          </div>
          <div className='col-2 col row-1'>
            <Image 
              src='/images/home/hero.png'
              alt='Chair Collection'
              layout="fill" 
              objectFit='cover' 
              objectPosition='center'
            />
            <div className='product-indicator indicator-2'>
              <div className='indicator-outer'>
                <div className='indicator-inner'></div>
              </div>
              <div className='product-info-modal'>
                <p className='name'>The Lilac</p>
                <p className='type'>Adjustable Bed</p>
              </div>
            </div>
          </div>
          <div className='col-2 col row-2'>
          <Image 
              src='/images/home/hero.png'
              alt='Chair Collection'
              layout="fill" 
              objectFit='cover' 
              objectPosition='center'
            />
            <div className='product-indicator indicator-3'>
              <div className='indicator-outer'>
                <div className='indicator-inner'></div>
              </div>
              <div className='product-info-modal'>
                <p className='name'>The Maple</p>
                <p className='type'>Rise & Recline Chair</p>
              </div>
            </div>
          </div>
        </div>

    <div className='index-reviews'>
      <div className='title-wrapper'>
        <p>Rate Excellent on Trustpilot</p>
        <h3>Hear What Our<br/>Customers Have to Say</h3>  
      </div>  
      <div className='review-capsule'>
        <div className='button-wrapper'>
          <button>
            <Image src='/images/icons/button-left.svg' alt='Previous' width='50' height='50' />
          </button>
        </div>
        <div className='review-carousel'>
          <div className='review'>
            <div className='review-head'>
              <div className='avatar'></div>
              <div className='review-info'>
                <p className='name'>Doris Holland</p>
                <p className='date'>2 days ago</p>
              </div>
              <div className='rating'>
                <Image src='/trustpilot/stars-5-green.svg' alt='5 Star' width='120' height='20'/>
              </div>
            </div>
            <div className='review-content'>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea.
            </div>
          </div>

        </div>
        <div className='button-wrapper'>
          <button>
            <Image src='/images/icons/button-right.svg' alt='Next' width='50' height='50' />
          </button>
        </div>
      </div>
    </div>

    <div className='index-testimonials'>
      <div className='title-wrapper'>
        <p>Our Testimonials</p>
        <h3>Oak Tree Customer Stories</h3>  
      </div> 
      <p className='index-p'>We believe in the power of individuality. We love that every Oak Tree customer has his or her own story to tell, and we build products to fit many different people. If you’d like to hear the stories of some our customers, take a look at the testimonial videos below.</p>
        <div className='testimonial-grid'>
          <div className='testimonial-item'>
            <div className='image-wrapper'>
              <Image src='/images/testimonials/testimonial-1.png' alt='Mr Groger'
                  layout="fill"  
                  objectFit='cover' 
                  objectPosition='center'
              />
            </div>
            <div className='item-overlay'></div>
            <div className='button-wrapper'>
              <Image src='/images/icons/play-white.svg' alt='play button' width='60' height='60'/>
            </div>
            <div className='testimonial-info'>
              <p className='name'>Mr Groger</p>
              <p className='place'>London</p>
              <p className='date'>12th September 2021</p>
            </div>
          </div>
          <div className='testimonial-item'>
          <div className='image-wrapper'>
            <Image src='/images/testimonials/testimonial-2.png' alt='Mrs Atkins'
                  layout="fill"  
                  objectFit='cover' 
                  objectPosition='center'
              />
            </div>
            <div className='item-overlay'></div>
            <div className='button-wrapper'>
              <Image src='/images/icons/play-white.svg' alt='play button' width='60' height='60'/>
            </div>
            <div className='testimonial-info'>
              <p className='name'>Mrs Atkins</p>
              <p className='place'>Bristol</p>
              <p className='date'>25th September 2021</p>
            </div>
          </div>
          <div className='testimonial-item'>
          <div className='image-wrapper'>
            <Image src='/images/testimonials/testimonial-3.png' alt='Mr Andrews'
                  layout="fill"  
                  objectFit='cover' 
                  objectPosition='center'
              />
            </div>
            <div className='item-overlay'></div>
            <div className='button-wrapper'>
              <Image src='/images/icons/play-white.svg' alt='play button' width='60' height='60'/>
            </div>
            <div className='testimonial-info'>
              <p className='name'>Mr Andrews</p>
              <p className='place'>Solihul</p>
              <p className='date'>7th October 2021</p>
            </div>
          </div>
        </div>
        <div className='mobile-button-wrapper'>
              <div className='carousel-dots'>
                <div className='dot active-dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
              </div>
              <div className='carousel-buttons'>
            <button className='prev'>
              <Image 
                src='/images/icons/prev-arrow-green.svg'
                alt='Prev arrow'
                width='30'
                height='30'
              />
            </button>
            <button className='next'>
              <Image 
                src='/images/icons/next-arrow-white.svg'
                alt='Next arrow'
                width='30'
                height='30'
              />
            </button>
          </div>
        </div>
    </div>
      </div>
  )
}
}

export default Home
