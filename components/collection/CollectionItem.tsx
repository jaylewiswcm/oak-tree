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
    }
  }

interface ComponentProps {
    product: Product
    setShow: any
}

export const CollectionItem = ({product, setShow}: ComponentProps ) => {
    const [itemHover, setItemHover] = useState(false)

   const { id, title, handle, description, images, productURL, productSwatch, productSubheading, productLeaf } = product.node;

   const swatch = JSON.parse(productSwatch.value);

   const productImage = images.edges[0].node;

   const myLoader = ({src, width, quality}:any) => {
        return `${src}?w=${width}&q=${quality || 75}`
  }
  
  return (
    <Link href={productURL.value} >
    <a className='collection-item'>
            {/* <Link href={url} >
                <a> */}
                    <div className='image-wrapper'>
                        <Image 
                            loader={myLoader}
                            src={productImage!.originalSrc}
                            alt={title + 'collection'}
                            layout='responsive'
                            width={1000}
                            height={671}
                            quality={100}
                        />
                         <div className='leaf'>
                            <div className='icon-wrapper'>
                                <Image src={`/icons/collection/leaves/${productLeaf.value}`} alt={`The ${handle} leaf`} layout='responsive' width='50' height='50'/>
                            </div>
                        </div>
                        <div className='selected-swatch'>
                            <div className="image">
                                <Image src={swatch.src} alt={`Current Swatch - ${swatch.name}`} layout='responsive' width='60px' height='60px'/>
                            </div>
                                <div className='swatch-tooltip'>
                                    <p>This product is shown in: <span className='highlight'>{swatch.name}</span></p>
                                    <div className='arrow'></div>
                                </div>
                        </div>
                    </div>
                {/* </a>
            </Link> */}

            <div className='col-details'>
            <div className='col-name-wrapper'>
                <div className='title-and-swatches'>
                <p className='subheading'>{productSubheading.value}</p>
                <div className='swatches'>
                    <div className='swatch red'><div className='inner'><Image src='/images/fabric/chairs/boucle-claret.png' alt='Boucle Claret Fabric' layout='fill' objectFit='cover' objectPosition='center' quality="100" /></div></div>
                    <div className='swatch blue'><div className='inner'><Image src='/images/fabric/chairs/boucle-bluebell.png' alt='Boucle Bluebell Fabric' layout='fill' objectFit='cover' objectPosition='center' quality="100" /></div></div>
                    <div className='swatch brown'><div className='inner'><Image src='/images/fabric/chairs/mocca-leather.png' alt='Moca Leather' layout='fill' objectFit='cover' objectPosition='center' quality="100"/></div></div>                
                    <button onClick={() => setShow(true)}>Many more</button>
                </div>
                </div>
                {/* <Link href={url}>
                    <a> */}
                        <div className='name-wrapper'>
                            <h2>{title}</h2>
                        </div>
                    {/* </a>
                </Link> */}
            </div>
            <p className='desc'>{description}</p>
            <ul className='desc-list'>
                <li>
                    <span className='icon'><Image src='/icons/collection-usps/icon-measure.svg' alt='Made to measure' layout='responsive' width='29' height='21'/></span>
                    <span className='icon icon-colour'><Image src='/icons/collection-usps/icon-measure-colour.svg' alt='Made to measure in colour' layout='responsive' width='29' height='21'/></span>
                    <p>Sized to fit you perfectly</p>
                </li>
                <li>
                    <span className='icon'><Image src='/icons/collection-usps/icon-leg-lift.svg' alt='High Leg Lift' layout='responsive' width='29' height='21'/></span>
                    <span className='icon icon-colour'><Image src='/icons/collection-usps/icon-leg-lift-colour.svg' alt='High Leg Lift Colour' layout='responsive' width='29' height='21'/></span>
                    <p>Unique High-leg lift</p>
                </li>
                <li>
                    <span className='icon'><Image src='/icons/collection-usps/icon-circulation.svg' alt='Circulation Heart' layout='responsive' width='29' height='21'/></span>
                    <span className='icon icon-colour'><Image src='/icons/collection-usps/icon-circulation-colour.svg' alt='Circulation Heart Colour' layout='responsive' width='29' height='21'/></span>
                    <p>Improves circulation</p>
                </li>
                <li>
                    <span className='icon'><Image src='/icons/collection-usps/icon-fabrics.svg' alt='Fabric Swatch' layout='responsive' width='29' height='21'/></span>
                    <span className='icon icon-colour'><Image src='/icons/collection-usps/icon-fabrics-colour.svg' alt='Fabric Swatch Colour' layout='responsive' width='29' height='21'/></span>
                    <p>Selection of accessories, fabrics and leathers</p>
                </li>
            </ul>
            {/* <Link href={url} >
                <a> */}
                    <div className='main-cta'>
                        <p>View Collection</p>
                    </div>
                {/* </a>
            </Link> */}
            </div>
        {/* <div className='btn-leaf-wrapper'>
    
            <div className='leaf'>
                <div className='icon-wrapper'>
                    <Image src={product.icon} alt={product.name} layout='responsive' width='50' height='50'/>
                    </div>
                </div>
        </div> */}
        </a>
    </Link>
  )
}
