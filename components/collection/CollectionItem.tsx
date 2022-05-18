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
    product: any
}

export const CollectionItem = ({product}: ComponentProps ) => {
    const [itemHover, setItemHover] = useState(false)
  return (
    <Link href={product!.url} >
      <a className='collection-item' onMouseOver={() => setItemHover(true)} onMouseOut={() => setItemHover(false)}>
          <div className='image-wrapper'>
              <Image 
                  src={product!.collectionImage}
                  alt={product!.name + 'Collections'}
                  layout='responsive'
                  width={1000}
                  height={671}
                  quality={100}
              />
              <div className='selected-swatch'>
                  <Image src={`/images/fabric/swatches/${product!.swatch.src}`} alt={`Current Swatch - ${product!.swatch.name}`} layout='responsive' width='60px' height='60px' quality={100}/>
                  <div className='swatch-tooltip'>
                  <p>This product is shown in: <span className='highlight'>{product.swatch.name}</span></p>
                  <div className='arrow'></div>
              </div>
              </div>
        
          </div>
          <div className='col-name-wrapper'>
            <div className='title-and-swatches'>
              <p className='subheading'>{product!.subheading}</p>
              <div className='swatches'>
                <div className='swatch red'><div className='inner'><Image src='/images/fabric/chairs/boucle-claret.png' alt='Boucle Claret Fabric' layout='fill' objectFit='cover' objectPosition='center' /></div></div>
                <div className='swatch blue'><div className='inner'><Image src='/images/fabric/chairs/boucle-bluebell.png' alt='Boucle Bluebell Fabric' layout='fill' objectFit='cover' objectPosition='center' /></div></div>
                <div className='swatch brown'><div className='inner'><Image src='/images/fabric/chairs/mocca-leather.png' alt='Moca Leather' layout='fill' objectFit='cover' objectPosition='center' /></div></div>                
                <button>+ 37 more</button>
              </div>
            </div>
            
              <div className='name-wrapper'>
                  <h2>{product!.name}</h2>
              </div>
              {/* <span className='icon-wrapper'>
                  <Image src={product.icon} alt={product.name} layout='responsive' width={40} height={40}/>
              </span> */}
          </div>
 
          <p className='desc'>{product!.desc}</p>
          <div className='choose-from'>
            <p>Choose from:</p>
            <div className='options-grid'>
                <div className='item'>
                    <div className='icon'>
                        <div className='grey'>
                            <Image src={motorGrey} alt='Motor' layout='responsive' width='50' height='50'/>
                        </div>
                        <div className='green'>
                            <Image src={ motorGreen } alt='Motor' layout='responsive' width='50' height='50'/>
                        </div>
                    </div>
                    <p className='option-p'>3 Motors</p>
                </div>
                <div className='item'>
                    <div className='icon'>
                        <div className='grey'>
                            <Image src={accessoriesGrey} alt='Accessories' layout='responsive' width='50' height='50'/>
                        </div>
                        <div className='green'>
                            <Image src={accessoriesGreen} alt='Accessories' layout='responsive' width='50' height='50'/>
                        </div>
                    </div>
                    <p className='option-p'>6 Accessories</p>
                </div>
                <div className='item'>
                    <div className='icon'>
                        <div className='grey'>
                        <Image src={fabricGrey} alt='Fabric' layout='responsive' width='50' height='50'/>
                        </div>
                        <div className='green'>
                        <Image src={ fabricGreen} alt='Fabric' layout='responsive' width='50' height='50'/>
                        </div>
                    </div>
                    <p className='option-p'>40 Fabrics</p>
                </div>
            </div>
          </div>
        <div className='btn-leaf-wrapper'>
            <div className='main-cta'>
                <p>View Collection</p>
            </div>
            <div className='leaf'>
                <div className='icon-wrapper'>
                    <Image src={product.icon} alt={product.name} layout='responsive' width='50' height='50'/>
                    </div>
                </div>
        </div>
      </a>
      </Link>
  )
}
