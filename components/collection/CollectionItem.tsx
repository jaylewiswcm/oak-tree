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

type Image = {
    node: {
        originalSrc: string
        altText: string | null
    }
  }
  
  type Product = {
    node : {
      handle: string
      id: string
      images: {
        edges: Array<Image>
      }
      description: string
      title: string
      productLeaf: {
        type: string
        value: string
      }
      productSubheading:  {
        type: string
        value: string
      }
      productSwatch:  {
        type: string
        value: string
      }
      productURL:  {
        type: string
        value: string
      }
      productType:  {
        type: string
        value: string
      }
      productSwatches: {
        type: string
        value: string
      }
    }
  }

interface ComponentProps {
    product: Product
    setShow: any
}

export const CollectionItem = ({product, setShow}: ComponentProps ) => {
    const [itemHover, setItemHover] = useState(false)

   const { id, title, handle, description, images, productURL, productSwatch, productSubheading, productLeaf, productType, productSwatches } = product.node;

   const swatch = JSON.parse(productSwatch.value);

   const productImage = images.edges[0].node;

    const availableSwatches = JSON.parse(productSwatches.value);

   const myLoader = ({src, width, quality}:any) => {
        return `${src}?w=${width}&q=${quality || 75}`
  }
  
  return (
    <Link href={productURL.value} >
    <a className='collection-item'>
                    <div className='image-wrapper'>
                        <Image 
                            loader={myLoader}
                            src={productImage!.originalSrc}
                            alt={title + 'collection'}
                            layout='responsive'
                            width={1500}
                            height={1006}
                            quality={100}
                        />
                         <div className='leaf'>
                            <div className='icon-wrapper'>
                                <Image src={`/icons/collection/leaves/${productLeaf.value}`} alt={`The ${handle} leaf`} layout='responsive' width='50' height='50'/>
                            </div>
                        </div>
                        { productType.value === 'Rise and Recline Chair' && 
                        <div className='selected-swatch'>
                            <div className="image">
                                <Image src={swatch.src} alt={`Current Swatch - ${swatch.name}`} layout='responsive' width='60px' height='60px'/>
                            </div>
                                <div className='swatch-tooltip'>
                                    <p>This product is shown in: <span className='highlight'>{swatch.name}</span></p>
                                    <div className='arrow'></div>
                                </div>
                        </div>
                        }
                    </div>

            <div className='col-details'>
            <div className='col-name-wrapper'>
                <div className='title-and-swatches'>
                <p className='product-type'>{productType.value}</p>
                    <div className='swatches'>
                        {  availableSwatches && availableSwatches.map((swatch:any, index:any) => 
                            <div className='swatch' key={index}><div className='inner'><Image src={swatch.src} alt={swatch.alt} layout='fill' objectFit='cover' objectPosition='center' quality="100" /></div></div> 
                        )}
                       
                        {/* <div className='swatch'><div className='inner'><Image src='/images/fabric/chairs/boucle-bluebell.png' alt='Boucle Bluebell Fabric' layout='fill' objectFit='cover' objectPosition='center' quality="100" /></div></div>
                        <div className='swatch'><div className='inner'><Image src='/images/fabric/chairs/mocca-leather.png' alt='Moca Leather' layout='fill' objectFit='cover' objectPosition='center' quality="100"/></div></div>                 */}
                        <button onClick={() => setShow(true)}>+ More</button>
                    </div>
                </div> 
                        <div className='name-wrapper'>
                            <h2>The {title}</h2>
                            <p className='subheading'>{productSubheading.value}</p>
                        </div>
            </div>
            <p className='desc'>{description}</p>
            <ul className='desc-list'>
            { productType.value === 'Rise and Recline Chair' && chairUsps.map((item, index) => 
                <li key={index}>
                    <span className='icon'><Image src={item.icon} alt={item.alt} layout='responsive' width='29' height='29'/></span>
                    <p>{item.usp}</p>
                </li>
            )}

            { productType.value === 'Adjustable Bed' && bedUsps.map((item, index) => 
                <li key={index}>
                    <span className='icon'><Image src={item.icon} alt={item.alt} layout='responsive' width='29' height='29'/></span>
                    <p>{item.usp}</p>
                </li>
            )}             
            </ul>
                    <div className='main-cta'>
                        <p>View Collection</p>
                    </div>
            </div>
        </a>
    </Link>
  )
}


const chairUsps = [{
    'icon' : '/icons/collection-usps/icon-measure.svg',
    'alt' : 'Tape measure',
    'usp': 'Sized to fit you perfectly'
},{
    'icon' : '/icons/collection-usps/icon-leg-lift.svg',
    'alt' : 'High leg lift',
    'usp': 'Unique High-leg lift'
},{
    'icon' : '/icons/collection-usps/icon-circulation.svg',
    'alt' : 'Heart Circulation',
    'usp': 'Improves circulation'
}, {
    'icon' : '/icons/collection-usps/icon-fabrics.svg',
    'alt' : 'Fabric Swatch',
    'usp': 'Selection of accessories, fabrics and leathers'
}]

const bedUsps = [{
    'icon' : '/icons/collection-usps/icon-measure.svg',
    'alt' : 'Tape measure',
    'usp': 'Sized to fit you perfectly'
},{
    'icon' : '/icons/collection-usps/icon-5-point.svg',
    'alt' : '5 Point adjustable bed',
    'usp': '5 Point Adjustable Bed'
},{
    'icon' : '/icons/collection-usps/icon-circulation.svg',
    'alt' : 'Heart Circulation',
    'usp': 'Improves circulation'
}, {
    'icon' : '/icons/collection-usps/icon-mattress.svg',
    'alt' : 'Mattress',
    'usp': 'Choose between Single, Double or Dual'
}]