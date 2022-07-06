// import React from 'react'
// import { NextSeo } from 'next-seo'
// import Image from 'next/image';
// import Link from 'next/link';
//  // Components
//  import CollectionForm from '../../components/forms/brochure/CollectionForm';
// import OurProcess from '../../components/sections/process/OurProcess';
// import Reviews from '../../components/sections/reviews/Reviews';
// import Resources from '../../components/sections/resources/Resources';
// import FooterCollections from '../../components/sections/collections/FooterCollections';
// import { Video } from '../../components/video/Video';
// // images 
// import heroImage from '../../public/images/heros/bath-lift-collection-hero.jpg'
// import tech1 from '../../public/images/products/bath-lifts/the-riviera/tech-1.png'
// import tech2 from '../../public/images/products/bath-lifts/the-riviera/tech-2.png'
// import tech3 from '../../public/images/products/bath-lifts/the-riviera/tech-3.png'

// const index = () => {
//     return (
//         <div>
//             <NextSeo  
//                 title="Bath Lifts | Oak Tree Mobility"
//                 description="An Oak Tree bath lift gently lowers you in and out of the bath, helping you enjoy a relaxing and therapeutic soak again. Take a look at our bath lifts."
//             />
//              <div className='product-collections'>
//              <div className='col-hero'>
//                 <div className='hero-image bath-lift-hero'>
//                     <Image 
//                         src={heroImage}
//                         alt='Our Rise and Recline Chairs'
//                         layout='fill'
//                         objectFit='cover'
//                         objectPosition='left'
//                         quality={100}
//                         placeholder='blur'
//                         priority
//                     />
//                 </div>
//                 <div className='hero-inner con-reg'>
//                 <button className='mobile-cta main-cta'>
//                   <p>Request a Free Brochure</p>
//                 </button>
//                 <div className='hero-form'>
//                     <div className='form-top'>
//                         <h2>Request Your <span className='yellow-3'>Free</span> Brochure</h2>
//                     </div>
//                     <div className='brochure-form-usps'>
//                   <ul>
//                     <li>
//                       <span className='tick'><Image src='/vectors/green-tick.svg' alt='green tick' width={20} height={20}/></span>
//                       <p>See our full collections</p>
//                     </li>
//                     <li>
//                       <span className='tick'><Image src='/vectors/green-tick.svg' alt='green tick' width={20} height={20}/></span>
//                       <p>Brand new products</p>
//                     </li>
//                     <li>
//                       <span className='tick'><Image src='/vectors/green-tick.svg' alt='green tick' width={20} height={20}/></span>
//                       <p>Useful help & advice</p>
//                     </li>
//                     <li>
//                       <span className='tick'><Image src='/vectors/green-tick.svg' alt='green tick' width={20} height={20}/></span>
//                       <p>Completely FREE!</p>
//                     </li>
//                   </ul>
//                 <div className="brochure-section">
//                   <div className='brochure-image'>
//                     <Image 
//                       src='/brochures/bath-lift-brochure.png'
//                       alt='Brochure'
//                       layout='responsive'
//                       width={1000}
//                       height={1412}
//                     />
//                   </div>
//                   <div className='brochure-open'>
//                   <Image 
//                       src='/brochures/bath-lift-brochure-open.png'
//                       alt='Brochure'
//                       layout='responsive'
//                       width={1000}
//                       height={708}
//                     />
//                   </div>
//                 </div>
//               </div>
//                    <CollectionForm productType='chair'/>
//                 </div>
//                 </div>
//               </div>  
//               <h2 className='heading'>Enjoy a Bath Like You Used To</h2>
//               <div className='collections-grid single-grid con-reg'>
//                   <Link href='/bath-lifts/the-riviera-plus'>
//                     <a className='collection-item bath-lift-collection-item'>
//                         <div className='image-wrapper'>
//                             <Image 
//                                 src='/images/products/bath-lifts/the-riviera/the-riviera-collection.png'
//                                 alt='The Riviera Plus'
//                                 layout='responsive'
//                                 width={580}
//                                 height={325.07}
//                                 quality='100'
//                             />
//                         </div>
//                         <div className='col-content-wrapper'>
//                             <div className='col-name-wrapper'>
//                                 <div className='name-wrapper'>
//                                     <p className='subheading blue-3'>Enjoy a Nice Hot Bath Again</p>
//                                     <h2>The Riviera Plus</h2>
//                                 </div>
//                                 {/* <span className='icon-wrapper'>
//                                     <Image src='/icons/products/icon-riviera.svg' alt='The riviera icon' layout='responsive' width={40} height={40}/>
//                                 </span> */}
//                             </div>
//                             <p className='desc'>If you are looking for a more comfortable way to bathe, the Oak Tree Riviera bath lift could change your life. The Riviera relies on state-of-the-art technology to gently aid the elderly, disabled and those with limited mobility into and out of the bath.</p>
//                         <div className='main-cta blue-cta'><p>View Bath Lift</p></div>
//                        </div>
//                     </a>
//                     </Link>
//               </div>
//               <div className='collection-details con-reg'>
//                   <div className='detail'>
//                       <div className="image-wrapper">
//                           <Image 
//                             src={tech1}
//                             alt='The Best Technology'
//                             layout='responsive'
//                             width={593}
//                             height={355}
//                             quality='100'
//                             placeholder='blur'
//                           />
//                       </div>
//                       <div className='content'>
//                           <h3>The Best Technology</h3>
//                           <p>Our bath lifts use state-of-the-art technology to ensure reliability and safety. Unlike other bath lifts, the belt of the Riviera stays taught, reducing wobble and ensuring that you can easily stay balanced. This makes it incredibly simple to enter and leave the bath.</p>
//                       </div>
//                   </div>
//                   <div className='detail'>
//                       <div className="image-wrapper">
//                           <Image 
//                             src={tech2}
//                             alt='Remote Control'
//                             layout='responsive'
//                             width={593}
//                             height={355}
//                             quality='100'
//                             placeholder='blur'
//                           />
//                       </div>
//                       <div className='content'>
//                           <h3>Keeping You Safe</h3>
//                           <p>Every bath lift is thoroughly tested before it leaves our factory and a range of safety features come as standard. The lift is powered from the mains, but has a back-up battery in case of a power cut. The floating remote control is waterproof and the belt itself is extremely strong.</p>
//                       </div>
//                   </div>
//                   <div className='detail'>
//                       <div className="image-wrapper">
//                           <Image 
//                             src={tech3}
//                             alt='Customer Service'
//                             layout='responsive'
//                             width={593}
//                             height={355}
//                             quality='100'
//                             placeholder='blur'
//                           />
//                       </div>
//                       <div className='content'>
//                           <h3>Incredible Customer Service</h3>
//                           <p>The Riviera is available with a 2-year warranty and 14-day satisfaction guarantee. Our UK-based call centre is on hand if you ever need any help, and in the rare instance that you need a technician to visit your home, we offer a 24/7 local call out, 365 days a year.</p>
//                       </div>
//                   </div>
//               </div>
//                 <Reviews orphan={false}/>
//                 <div className='product-testimonial con-reg'>
//                     <h6>Our Customers View</h6>
//                     <div className='inner-wrapper'>
//                         <Video videoId='YpIhtPvr76M' title='Mr Parks Bath Lift Testimonial' placeholder='/images/testimonials/mr-parks-placeholder.png'/>
//                         <div className='customer-details'>
//                             <p className='name'>Mr Parks</p>
//                             <p className='location'>Cornwall</p>
//                             <p className='statement'>After suffering a mini stroke which affected his balance, Richard Parks hadn't had a bath in years. Now, thanks to his Oak Tree Mobility bath lift, he can enjoy a relaxing bath once again.</p>
//                             <Link href='/bath-lifts/the-riviera-plus'><a className='blue-3'>View The Riviera Plus</a></Link>
//                         </div>
//                     </div>
//                 </div>
//                 <OurProcess />
//                 <Resources pageType='bathlifts'/>
//           </div>
//         </div>
//     )
// }

// export default index;

import React from 'react'
import { NextSeo } from 'next-seo'
import Image from 'next/image';
import Link from 'next/link';
 // Components
 import CollectionForm from '../../components/forms/brochure/CollectionForm';
 import { HealthBenfits } from '../../components/sections/health-benefits/HealthBenfits';

import OurProcess from '../../components/sections/process/OurProcess';
import Reviews from '../../components/sections/reviews/Reviews';
import Resources from '../../components/sections/resources/Resources';
import FooterCollections from '../../components/sections/collections/FooterCollections';
import { Video } from '../../components/video/Video';
// images 
import heroImage from '../../public/images/heros/bath-lift-collection-hero.jpg'
import tech1 from '../../public/images/products/bath-lifts/the-riviera/tech-1.png'
import tech2 from '../../public/images/products/bath-lifts/the-riviera/tech-2.png'
import tech3 from '../../public/images/products/bath-lifts/the-riviera/tech-3.png'
import { WisitiaVideo } from '../../components/modal/video/Video';

const index = () => {
    return (
        <div>
            <NextSeo  
                title="Bath Lifts | Oak Tree Mobility"
                description="An Oak Tree bath lift gently lowers you in and out of the bath, helping you enjoy a relaxing and therapeutic soak again. Take a look at our bath lifts."
            />
             <div className='product-collections'>
             <div className='col-hero'>
                <div className='hero-image bath-lift-hero'>
                    <Image 
                        src={heroImage}
                        alt='Our Rise and Recline Chairs'
                        layout='fill'
                        objectFit='cover'
                        objectPosition='left'
                        quality={100}
                        placeholder='blur'
                        priority
                    />
                </div>
                <div className='hero-inner con-reg'>
                <button className='mobile-cta main-cta'>
                  <p>Request a Free Brochure</p>
                </button>
                <div className='hero-form'>
                    <div className='form-top'>
                        <h2>Request Your <span className='yellow-3'>Free</span> Brochure</h2>
                    </div>
                    <div className='brochure-form-usps'>
                  <ul>
                    <li>
                      <span className='tick'><Image src='/vectors/green-tick.svg' alt='green tick' width={20} height={20}/></span>
                      <p>See our full collections</p>
                    </li>
                    <li>
                      <span className='tick'><Image src='/vectors/green-tick.svg' alt='green tick' width={20} height={20}/></span>
                      <p>Brand new products</p>
                    </li>
                    <li>
                      <span className='tick'><Image src='/vectors/green-tick.svg' alt='green tick' width={20} height={20}/></span>
                      <p>Useful help & advice</p>
                    </li>
                    <li>
                      <span className='tick'><Image src='/vectors/green-tick.svg' alt='green tick' width={20} height={20}/></span>
                      <p>Completely FREE!</p>
                    </li>
                  </ul>
                <div className="brochure-section">
                  <div className='brochure-image'>
                    <Image 
                      src='/brochures/bath-lift-brochure.png'
                      alt='Brochure'
                      layout='responsive'
                      width={1000}
                      height={1412}
                    />
                  </div>
                  <div className='brochure-open'>
                  <Image 
                      src='/brochures/bath-lift-brochure-open.png'
                      alt='Brochure'
                      layout='responsive'
                      width={1000}
                      height={708}
                    />
                  </div>
                </div>
              </div>
                   <CollectionForm productType='chair'/>
                </div>
                </div>
              </div>  
              <div className='bath-lift-container con-reg'> 
                <h2 className='heading'>Enjoy a Bath Like You Used To</h2>
                <p className='sub-heading'>Do you miss relaxing in a nice warm bath? An Oak Tree electric powered bath lift gently lowers you in and out of the bath, helping you enjoy a relaxing and therapeutic soak again. Say goodbye to fussy plastic seats, expensive renovations or baths with doors… With the Riviera, you’ll enjoy bathing just like you used to.</p>
                <div className='images-and-content'>
                  <div className='image-grid'>
                    <div className='video-wrapper'>

                      <WisitiaVideo videoId='sxqz4v1emd'/>
                      {/* <Image
                              src='/images/products/bath-lifts/riviera/video-placeholder.jpg'
                              alt='Bath lift with bath'
                              layout='responsive'
                              width='1500'
                              height='814'
                          /> */}
                          {/* <div className='play-btn'>
                              <div className='icon'>
                                   <Image
                                   src='/buttons/play-btn-white.svg'
                                   alt='play button'
                                   layout='responsive'
                                   width='35'
                                   height='31'
                               />
                              </div>
                          </div> */}
                    </div>
                    <div className='image-wrapper'>
                      <Image
                          src='/images/products/bath-lifts/riviera/remote-control.jpg'
                          alt='Remote Control'
                          layout='responsive'
                          width='1344'
                          height='1500'
                      />
                    </div>
                    <div className='image-wrapper'>
                    <Image
                          src='/images/products/bath-lifts/riviera/belt-in-place.jpg'
                          alt='Bath lift belt in place'
                          layout='responsive'
                          width='1344'
                          height='1500'
                      />
                    </div>
                    <div className='image-wrapper'>
                      <Image
                            src='/images/products/bath-lifts/riviera/bath-lift-no-model.jpg'
                            alt='Bath lift with bath'
                            layout='responsive'
                            width='1500'
                            height='814'
                        />
                    </div>
                  </div>
                  <div className='content'>
                    <div className='inner-wrapper'>
                    <h3>Experience the <br/>Revolutionary New Bath Lift</h3>
                    <p className=''>If you are looking for a more comfortable way to bathe, the Oak Tree Riviera Plus bath lift could change your life. The Riviera Plus relies on state-of-the-art technology to gently lower you into and out of the bath.</p>
                    <ul>
                      <li>
                        <div className="icon"><Image src='/icons/yellow-tick.svg' alt='yellow tick 1' layout='responsive' width='30' height='30' /></div>
                        <p>Fits in most baths</p>                        
                      </li>
                      <li>
                        <div className="icon"><Image src='/icons/yellow-tick.svg' alt='yellow tick 2' layout='responsive' width='30' height='30' /></div>
                        <p>Floating Controller</p>
                      </li>
                      <li>
                        <div className="icon"><Image src='/icons/yellow-tick.svg' alt='yellow tick 3' layout='responsive' width='30' height='30' /></div>
                         <p>Wall Mount Controls</p>
                      </li>
                      <li>
                        <div className="icon"><Image src='/icons/yellow-tick.svg' alt='yellow tick 4' layout='responsive' width='30' height='30' /></div>
                        <p>Comfortable Saddleboard</p>
                      </li>
                    </ul>
                  </div>
                  </div>
                </div>
              </div>
              <div className='bath-lift-container full-width-blue'>
                <HealthBenfits product='Bath Lifts'/>
              </div>
              <div className='bath-lift-container con-reg'>
                <h4 className='heading'>Features of The Riviera Bath Lift</h4>
                  <div className='features'>
                  <div className='feature'>
                      <div className="image-wrapper">
                          <Image 
                            src='/images/products/bath-lifts/riviera/remote-control-2.jpg'
                            alt='Remote control 2'
                            layout='responsive'
                            width={1059}
                            height={635}
                          />
                      </div>
                      <div className='content'>
                          <h3>Two Button <br/>Remote Control</h3>
                          <p>The fully waterproof and floating remote control is a standard feature on the Riviera Plus Bath Lift. Two simple buttons allow you to descend and rise gently in complete safety.</p>
                      </div>
                  </div>
                  <div className='feature'>
                      <div className="image-wrapper">
                          <Image 
                                  src='/images/products/bath-lifts/riviera/bath-lift-belt.jpg'
                                  alt='Bath lift belt'
                                  layout='responsive'
                                  width={1059}
                                  height={635}
                          />
                      </div>
                      <div className='content'>
                          <h3>Comfort Slider <br/>Levelling Belt</h3>
                          <p>The unique levelling belt with a built in ‘comfort slider’ to maintain balance is extremely strong and made from superior seat belt material.</p>
                      </div>
                  </div>
                  <div className='feature'>
                      <div className="image-wrapper">
                          <Image 
                         src='/images/products/bath-lifts/riviera/lithium-battery.jpg'
                         alt='Lithium battery'
                         layout='responsive'
                         width={1059}
                         height={635}
                          />
                      </div>
                      <div className='content'>
                            <h3>State Of The Art <br/>Lithium Battery</h3>
                            <p>Our bath lift uses state of the art lithium battery technology to provide a reliable and safe way to keep the motor powered. It also makes installation easier than ever.</p>
                      </div>
                  </div>
              </div>
              <div className='how-it-works'>
                          <h5 className='heading'>How It Works</h5>
                          <div className='step-grid'>
                            <div className='step'>
                              <div className='image-wrapper'>
                                <Image
                                  src='/images/products/bath-lifts/riviera/step-1.jpg'
                                  alt='Lady sitting on bath belt'
                                  layout='responsive'
                                  width='1000'
                                  height='630'
                                />
                                <div className="number">1.</div>
                              </div>
                              <div className='content'>
                              <div className="number">1.</div>
                              <p className='step-title'>Sit on the bath belt</p>
                              <p>When the saddleband is taut across the top of the bath, simply sit on the saddleband on the comfort slider. You don’t need to worry about tightening the saddleband. Once the saddleband is at the top of the bath, the unit will take over and automatically tighten for you, making it ready to sit on.</p>
                              </div>
                            </div>
                            <div className='step'>
                              <div className='image-wrapper'>
                                <Image
                                  src='/images/products/bath-lifts/riviera/step-2.jpg'
                                  alt='Lady lowering in bath'
                                  layout='responsive'
                                  width='1000'
                                  height='630'
                                />
                                <div className="number">2.</div>
                              </div>
                              <div className='content'>
                              <div className="number">2.</div>
                              <p className='step-title'>Lower yourself into the bath</p>
                             <p>When you are sitting comfortably on the saddleband, press the down button on the unit or remote control. The saddleband will begin gently lowering you into the bath. If you need to, you can stop and settle yourself on the comfort slider to get comfortable at anytime.</p>
                            </div>
                            </div>
                            <div className='step'>
                              <div className='image-wrapper'>
                                <Image
                                  src='/images/products/bath-lifts/riviera/step-3.jpg'
                                  alt='Lady lying in bath'
                                  layout='responsive'
                                  width='1000'
                                  height='630'
                                />
                                <div className="number">3.</div>
                              </div>
                              <div className='content'>
                              <div className="number">3.</div>
                              <p className='step-title'>Relax and enjoy a proper soak</p>
                              <p>Once at the bottom of your bath, relax and bathe as normal. This is what it’s all about – having a nice long bath and enjoying a deep soak with nothing in the way. This is what the Oak Tree Riviera Plus was invented for.</p>
                            </div>
                            </div>
                            <div className='step'>
                              <div className='image-wrapper'>
                                <Image
                                  src='/images/products/bath-lifts/riviera/step-4.jpg'
                                  alt='Lady rising from bath'
                                  layout='responsive'
                                  width='1000'
                                  height='630'
                                />
                                <div className="number">4.</div>
                              </div>
                              <div className='content'>
                              <div className="number">4.</div>
                              <p className='step-title'>Raise yourself out of the bath</p>
                              <p>After you’ve finished bathing, simply press the up button and be safely returned to the top of your bath.</p>
                            </div>
                            </div>
                          </div>
                  </div> 
              <Reviews orphan={false}/>
                <div className='product-testimonial con-reg'>
                    <h6>Our Customers View</h6>
                    <div className='inner-wrapper'>
                        <Video videoId='YpIhtPvr76M' title='Mr Parks Bath Lift Testimonial' placeholder='/images/testimonials/mr-parks-placeholder.png'/>
                        <div className='customer-details'>
                            <p className='name'>Mr Parks</p>
                            <p className='location'>Cornwall</p>
                            <p className='statement'>After suffering a mini stroke which affected his balance, Richard Parks hadn't had a bath in years. Now, thanks to his Oak Tree Mobility bath lift, he can enjoy a relaxing bath once again.</p>
                            <Link href='/bath-lifts/the-riviera-plus'><a >View The Riviera Plus</a></Link>
                        </div>
                    </div>
                </div>
                <OurProcess /> 
              </div>
              {/* <h2 className='heading'>Enjoy a Bath Like You Used To</h2>
               <div className='collections-grid single-grid con-reg'>
                  <Link href='/bath-lifts/the-riviera-plus'>
                    <a className='collection-item bath-lift-collection-item'>
                        <div className='image-wrapper'>
                            <Image 
                                src='/images/products/bath-lifts/the-riviera/the-riviera-collection.png'
                                alt='The Riviera Plus'
                                layout='responsive'
                                width={580}
                                height={325.07}
                                quality='100'
                            />
                        </div>
                        <div className='col-content-wrapper'>
                            <div className='col-name-wrapper'>
                                <div className='name-wrapper'>
                                    <p className='subheading blue-3'>Enjoy a Nice Hot Bath Again</p>
                                    <h2>The Riviera Plus</h2>
                                </div>
                            </div>
                            <p className='desc'>If you are looking for a more comfortable way to bathe, the Oak Tree Riviera bath lift could change your life. The Riviera relies on state-of-the-art technology to gently aid the elderly, disabled and those with limited mobility into and out of the bath.</p>
                        <div className='main-cta blue-cta'><p>View Bath Lift</p></div>
                       </div>
                    </a>
                    </Link>
              </div>
              <div className='collection-details con-reg'>
                  <div className='detail'>
                      <div className="image-wrapper">
                          <Image 
                            src={tech1}
                            alt='The Best Technology'
                            layout='responsive'
                            width={593}
                            height={355}
                            quality='100'
                            placeholder='blur'
                          />
                      </div>
                      <div className='content'>
                          <h3>The Best Technology</h3>
                          <p>Our bath lifts use state-of-the-art technology to ensure reliability and safety. Unlike other bath lifts, the belt of the Riviera stays taught, reducing wobble and ensuring that you can easily stay balanced. This makes it incredibly simple to enter and leave the bath.</p>
                      </div>
                  </div>
                  <div className='detail'>
                      <div className="image-wrapper">
                          <Image 
                            src={tech2}
                            alt='Remote Control'
                            layout='responsive'
                            width={593}
                            height={355}
                            quality='100'
                            placeholder='blur'
                          />
                      </div>
                      <div className='content'>
                          <h3>Keeping You Safe</h3>
                          <p>Every bath lift is thoroughly tested before it leaves our factory and a range of safety features come as standard. The lift is powered from the mains, but has a back-up battery in case of a power cut. The floating remote control is waterproof and the belt itself is extremely strong.</p>
                      </div>
                  </div>
                  <div className='detail'>
                      <div className="image-wrapper">
                          <Image 
                            src={tech3}
                            alt='Customer Service'
                            layout='responsive'
                            width={593}
                            height={355}
                            quality='100'
                            placeholder='blur'
                          />
                      </div>
                      <div className='content'>
                          <h3>Incredible Customer Service</h3>
                          <p>The Riviera is available with a 2-year warranty and 14-day satisfaction guarantee. Our UK-based call centre is on hand if you ever need any help, and in the rare instance that you need a technician to visit your home, we offer a 24/7 local call out, 365 days a year.</p>
                      </div>
                  </div>
              </div>
                <Reviews orphan={false}/>
                <div className='product-testimonial con-reg'>
                    <h6>Our Customers View</h6>
                    <div className='inner-wrapper'>
                        <Video videoId='YpIhtPvr76M' title='Mr Parks Bath Lift Testimonial' placeholder='/images/testimonials/mr-parks-placeholder.png'/>
                        <div className='customer-details'>
                            <p className='name'>Mr Parks</p>
                            <p className='location'>Cornwall</p>
                            <p className='statement'>After suffering a mini stroke which affected his balance, Richard Parks hadn't had a bath in years. Now, thanks to his Oak Tree Mobility bath lift, he can enjoy a relaxing bath once again.</p>
                            <Link href='/bath-lifts/the-riviera-plus'><a className='blue-3'>View The Riviera Plus</a></Link>
                        </div>
                    </div>
                </div>
                <OurProcess /> */}
                <Resources pageType='bathlifts'/>
          </div>
        </div>
    )
}

export default index;