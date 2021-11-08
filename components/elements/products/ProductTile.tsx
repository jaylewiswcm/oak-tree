import React from 'react'

interface ComponentProps {
    product : {
                id: string,
                handle: string,
                title: string,
                description: string
                images : [{
                    id: string,
                    src: string,
                    altText: string
                }]
             }
    collection : {
        id: string,
        handle: string,
        title: string,
        description: string
    }
}

const ProductTile = ({product, collection} : ComponentProps) => {
    return (
        <li key={product.id} className="product-tile"> 
            <a href={`/${collection.handle}/${product.handle}`}>
                <img src={product.images[0].src} alt={product.title} />
                <h3>{product.title} Collection</h3>
                <p>{product.description}</p>
            </a>
      </li>
    )
}


export default ProductTile;