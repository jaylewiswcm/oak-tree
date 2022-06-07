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
                                <div className='swatch-tooltip'>
                                    <p>This product is shown in: <span className='highlight'>{swatch.name}</span></p>
                                    <div className='arrow'></div>
                                </div>
                        </div>
                    </div>
                </a>
            </Link>

            <div className='col-details'>
            <div className='col-name-wrapper'>
                <div className='title-and-swatches'>
                <p className='subheading'>{subheading}</p>
                <div className='swatches'>
                    <div className='swatch red'><div className='inner'><Image src='/images/fabric/chairs/boucle-claret.png' alt='Boucle Claret Fabric' layout='fill' objectFit='cover' objectPosition='center' quality="100" /></div></div>
                    <div className='swatch blue'><div className='inner'><Image src='/images/fabric/chairs/boucle-bluebell.png' alt='Boucle Bluebell Fabric' layout='fill' objectFit='cover' objectPosition='center' quality="100" /></div></div>
                    <div className='swatch brown'><div className='inner'><Image src='/images/fabric/chairs/mocca-leather.png' alt='Moca Leather' layout='fill' objectFit='cover' objectPosition='center' quality="100"/></div></div>                
                    <button onClick={() => setShow(true)}>Many more</button>
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
                    <span className='icon'><Image src='/icons/collection-usps/icon-measure.svg' alt='Made to measure' layout='responsive' width='29' height='21'/></span>
                    <p>Sized to fit you perfectly</p>
                </li>
                <li>
                    <span className='icon'><Image src='/icons/collection-usps/icon-leg-lift.svg' alt='High Leg Lift' layout='responsive' width='29' height='21'/></span>
                    <p>Unique High-leg lift</p>
                </li>
                <li>
                    <span className='icon'><Image src='/icons/collection-usps/icon-circulation.svg' alt='Circulation Heart' layout='responsive' width='29' height='21'/></span>
                    <p>Improves circulation</p>
                </li>
                <li>
                    <span className='icon'><Image src='/icons/collection-usps/icon-fabrics.svg' alt='Fabric Swatch' layout='responsive' width='29' height='21'/></span>
                    <p>Selection of accessories, fabrics and leathers</p>
                </li>
            </ul>
            <Link href={url} >
                <a>
                    <div className='main-cta'>
                        <p>View Collection</p>
                    </div>
                </a>
            </Link>
            </div>
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
