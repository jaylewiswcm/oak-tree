import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link';
// axios
import axios from 'axios';

interface ComponentProps {
    products: {
            edges: CollectionArray[] 
    }
    productHandle : string
    productType: string
}

type CollectionArray = {
    node: {
        products: {
            edges:ProductNode[]
        }
    }
}

type ProductNode = {
    node: {
        handle: string
        id:string
        images:{
            edges: ImageNode[]
        }
        title: string
        productType: {
            value:string
        }
    }
}

type ImageNode = {
    node: {
        altText: string
        originalSrc: string
    }
}

const RecommendedProducts = ({products, productHandle, productType}:ComponentProps) => {
    const [recommendedProducts, setRecommendedProducts] = useState<ProductNode[]>([])

    useEffect(() => {

        
        removeCurrentProductFromCollectionArray();

        
    },[productHandle])


    const removeCurrentProductFromCollectionArray = () => {
        let index = 0;
        const productsInCollection = [...products.edges[0].node.products.edges]
        let filteredProducts;

        productsInCollection.map((product:ProductNode) => {
            if(product.node.handle === productHandle) {    
                filteredProducts  = productsInCollection.filter(x => x !== product);
               
                const shuffle = (arr:any) => [...arr].sort(() => Math.random() - 0.5);
                const shuffledArray = shuffle(filteredProducts);
                setRecommendedProducts(shuffledArray);
            }
        })

    }


   const imageLoader = ({src, width, quality}:any) => {
    return `${src}?w=${width}&q=${quality || 75}`
}

  return (
    <div className='other-products con-reg'>
    <h6>You may also like</h6>

    <div className='product-grid'>
        { recommendedProducts.slice(0, 3).map((product:ProductNode, index:number) => 
            <Link href={`/${productType === 'chair' ? 'rise-and-recline-chairs' : 'adjustable-beds'}/the-${product.node.handle}`} key={index}>
            <a className='product'>
                <div className='image-wrapper'>
                    <Image
                        loader={imageLoader}
                        src={product.node.images.edges[0].node.originalSrc}
                        alt={product.node.title}
                        layout='responsive'
                        width={1000}
                        height={671}
                    />
                    <div className='hover-bg'>
                        <p>View Chair</p>
                    </div>
                </div>
                <div className='product-name-wrapper'>
                    <p className='name'>The {product.node.title}</p>
                    <p className='type'>{product.node.productType.value}</p>
                </div>
            </a>
            </Link>
        )}
{/* 
        <Link href="/rise-and-recline-chairs/the-oak">
        <a  className='product'>
        <div className='image-wrapper'>
            <Image
                src='/images/products/chairs/tulip/tulip-collection.png'
                alt='The Tulip'
                layout='responsive'
                width={1000}
                height={671}
            />
               <div className='hover-bg'>
                    <p>View Chair</p>
                </div>
            </div>
            <div className='product-name-wrapper'>
                <p className='name'>The Tulip</p>
                <p className='type'>Rise and Recline Chair</p>
            </div>
        </a>
        </Link>
        <Link href="/rise-and-recline-chairs/the-oak">
        <a className='product'>
            <div className='image-wrapper'>
            <Image
                src='/images/products/chairs/rowan/rowan-collection.png'
                alt='The Rowan'
                layout='responsive'
                width={1000}
                height={671}
            />
               <div className='hover-bg'>
                    <p>View Chair</p>
                </div>
            </div>
            <div className='product-name-wrapper'>
                <p className='name'>The Rowan</p>
                <p className='type'>Rise and Recline Chair</p>
            </div>
        </a>
        </Link> */}
    </div>
{/* 
    <div className='product-grid'>
    <Link href="/adjustable-beds/the-hazel">
        <a className='product'>
            <div className='image-wrapper'>
            <Image
               src='/images/products/beds/birch/birch-collection.png'
                alt='The Birch'
                layout='responsive'
                width={1000}
                height={671}
            />
               <div className='hover-bg'>
                    <p>View Bed</p>
                </div>
            </div>
            <div className='product-name-wrapper'>
                <p className='name'>The Birch</p>
                <p className='type'>Adjustable Bed</p>
            </div>
        </a>
    </Link>
    <Link href="/adjustable-beds/the-hazel">
        <a className='product'>
            <div className='image-wrapper'>
            <Image
                src='/images/products/beds/hesper/hesper-collection.png'
                alt='The Hesper'
                layout='responsive'
                width={1000}
                height={671}
            />
               <div className='hover-bg'>
                    <p>View Bed</p>
                </div>
            </div>
            <div className='product-name-wrapper'>
                <p className='name'>The Hesper</p>
                <p className='type'>Adjustable Bed</p>
            </div>
        </a>
    </Link>
    <Link href="/adjustable-beds/the-hazel">
        <a className='product'>
            <div className='image-wrapper'>
            <Image
                src='/images/products/beds/poplar/poplar-collection.png'
                alt='The Poplar'
                layout='responsive'
                width={1000}
                height={671}
            />
               <div className='hover-bg'>
                    <p>View Bed</p>
                </div>
            </div>
            <div className='product-name-wrapper'>
                <p className='name'>The Poplar</p>
                <p className='type'>Adjustable Bed</p>
            </div>
        </a>
    </Link>

    </div> */}
    
    </div>
  )
}
export default RecommendedProducts;
  
  