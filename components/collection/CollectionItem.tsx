import React, {useState} from 'react'
import Image from 'next/image';
import Link from 'next/link';

// icons
import motorGrey from '../../public/icons/collection/icon-motor-grey.svg'
import motorGreen from '../../public/icons/collection/icon-motor-green.svg'
import accessoriesGrey from '../../public/icons/collection/icon-accessories-grey.svg'
import accessoriesGreen from '../../public/icons/collection/icon-accessories-green.svg'
import fabricGrey from '../../public/icons/collection/icon-fabric-grey.svg'
import fabricGreen from '../../public/icons/collection/icon-fabric-green.svg'

interface ComponentProps {
    product: {
        name: string
        collectionImage: string
        subheading: string
        desc: string
        url: string
        icon: string
        swatch: {
            src: string
            name:string
        }
    }
    setShow: any
}

export const CollectionItem = ({product, setShow}: ComponentProps ) => {
    const [itemHover, setItemHover] = useState(false)
   const { name, collectionImage, subheading, desc, url, icon, swatch} = product

  return (
      <div className='collection-item'>
            <Link href={url} >
                <a>
                    <div className='image-wrapper'>
                        <Image 
                            src={collectionImage}
                            alt={name + 'Collections'}
                            layout='responsive'
                            width={1000}
                            height={671}
                            quality={100}
                        />
                         <div className='leaf'>
                            <div className='icon-wrapper'>
                                <Image src={product.icon} alt={product.name} layout='responsive' width='50' height='50'/>
                            </div>
                        </div>
                        <div className='selected-swatch'>
                            
                        <Image src={swatch.src} alt={`Current Swatch - ${swatch.name}`} layout='responsive' width='60px' height='60px'/>
                                {/* <div className='swatch'>
                                    <Image src={swatch.src} alt={`Current Swatch - ${swatch.name}`} layout='responsive' width='60px' height='60px'/>
                                </div>  */}
                                {/* <svg className="svg">
                                    <clipPath id="my-clip-path" clipPathUnits="objectBoundingBox"><path d="M0.577,0.178 C0.439,0.178,0.314,0.234,0.224,0.324 C0.133,0.414,0.077,0.538,0.077,0.675 C0.077,0.829,0.089,0.968,0.147,1 C0.193,1,0.268,1,0.388,1 C0.538,1,0.726,1,0.868,1 C0.989,0.918,1,0.802,1,0.675 C1,0.538,1,0.414,0.931,0.324 C0.84,0.234,0.715,0.178,0.577,0.178"></path></clipPath>
                                    <path d="M51.5,15.9 C39.1834288,15.9 28.0326258,20.8619717 19.9611234,28.8851355 C11.8915835,36.9063486 6.90000004,47.9874214 6.90000004,60.2275098 C6.90000004,73.9162468 7.92111543,86.3511139 13.1337943,94.6817587 C17.2084084,101.193605 23.8906017,105.1 34.6409154,105.1 C47.971902,105.1 64.7440729,99.1623584 77.4205397,89.8576443 C88.2218731,81.9293058 96.1,71.540767 96.1,60.2275098 C96.1,47.9874214 91.1084165,36.9063486 83.0388766,28.8851355 C74.9673742,20.8619717 63.8165712,15.9 51.5,15.9 Z" id="Oval-Copy-11" stroke="#E1E1E1" stroke-width="1.80000007"/>
                                </svg> */}
                                {/* <Image src='/images/fabric/swatch-border.svg' alt={`Swatch border - ${swatch.name}`} layout='responsive' width='60px' height='60px' /> */}
                                <div className='swatch-tooltip'>
                                    <p>This product is shown in: <span className='highlight'>{swatch.name}</span></p>
                                    <div className='arrow'></div>
                                </div>
                        </div>
                    </div>
                </a>
            </Link>
            <div className='col-name-wrapper'>
                <div className='title-and-swatches'>
                <p className='subheading'>{subheading}</p>
                <div className='swatches'>
                    <div className='swatch red'><div className='inner'><Image src='/images/fabric/chairs/boucle-claret.png' alt='Boucle Claret Fabric' layout='fill' objectFit='cover' objectPosition='center' quality="100" /></div></div>
                    <div className='swatch blue'><div className='inner'><Image src='/images/fabric/chairs/boucle-bluebell.png' alt='Boucle Bluebell Fabric' layout='fill' objectFit='cover' objectPosition='center' quality="100" /></div></div>
                    <div className='swatch brown'><div className='inner'><Image src='/images/fabric/chairs/mocca-leather.png' alt='Moca Leather' layout='fill' objectFit='cover' objectPosition='center' quality="100"/></div></div>                
                    <button onClick={() => setShow(true)}>+ 37 more</button>
                </div>
                </div>
                <Link href={url}>
                    <a>
                        <div className='name-wrapper'>
                            <h2>{name}</h2>
                        </div>
                    </a>
                </Link>
            </div>
            <p className='desc'>{desc}</p>
            <ul className='desc-list'>
                <li>
                    <span className='tick'><Image src='/vectors/red-tick.svg' alt='Made to measure tick' layout='responsive' width='30' height='30'/></span>
                    <p>Made-To-Measure</p>
                </li>
                <li>
                    <span className='tick'><Image src='/vectors/red-tick.svg' alt='Selection tick' layout='responsive' width='30' height='30'/></span>
                    <p>Selection of accessories, fabrics and leathers</p>
                </li>
                <li>
                    <span className='tick'><Image src='/vectors/red-tick.svg' alt='Made for you tick' layout='responsive' width='30' height='30'/></span>
                    <p>Made for you in 6 - 10 weeks</p>
                </li>
            </ul>
            <Link href={url} >
                <a>
                    <div className='main-cta'>
                        <p>View Collection</p>
                    </div>
                </a>
            </Link>
        {/* <div className='btn-leaf-wrapper'>
    
            <div className='leaf'>
                <div className='icon-wrapper'>
                    <Image src={product.icon} alt={product.name} layout='responsive' width='50' height='50'/>
                    </div>
                </div>
        </div> */}
     
      </div>
  )
}
