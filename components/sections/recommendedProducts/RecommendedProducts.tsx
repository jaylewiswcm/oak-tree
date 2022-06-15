import React, { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link';
// axios
import axios from 'axios';

interface ComponentProps {
    product: string
    productId: string
}

const RecommendedProducts = ({product, productId}: ComponentProps) => {

    console.log(productId);
    const fetchRecommendedProducts = () => {

        const url = `https://oak-tree-mobility.myshopify.com/recommendations/products.json?product_id=${productId}&limit=3`
        axios.get(url).then(response => {
            console.log(response);
        });
    }

    useEffect(() => {
        fetchRecommendedProducts()
    }, [fetchRecommendedProducts])



        // fetch(url +  "recommendations/products.json?product_id=1234567890123&limit=3")
        // .then(response => response.json())
        // .then(({ products }) => {
        //     if (products.length > 0) {
        //     const firstRecommendedProduct = products[0];
    
        //     alert(
        //         `The title of the first recommended product is: ${firstRecommendedProduct.title}`
        //     );
        //     }
        // }
        // );

  return (
    <div className='other-products con-reg'>
    <h6>You may also like</h6>
    {product === 'chairs' && 
    <div className='product-grid'>
    <Link href="/chairs/the-oak">
        <a className='product'>
            <div className='image-wrapper'>
                <Image
                    src='/images/products/chairs/maple/maple-collection.png'
                    alt='The Maple'
                    layout='responsive'
                    width={1000}
                    height={671}
                />
                <div className='hover-bg'>
                    <p>View Chair</p>
                </div>
            </div>
            <div className='product-name-wrapper'>
                <p className='name'>The Maple</p>
                <p className='type'>Rise and Recline Chair</p>
            </div>
        </a>
        </Link>
        <Link href="/chairs/the-oak">
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
        <Link href="/chairs/the-oak">
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
        </Link>
    </div>
    }
    {product === 'beds' && 
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

    </div>
    }
    </div>
  )
}
export default RecommendedProducts