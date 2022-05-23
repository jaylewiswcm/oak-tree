import React from 'react'
// Components 
import { CollectionItem } from './CollectionItem';
 
interface ComponentProps {
    products: any
}
export const CollectionGrid = ({products}: ComponentProps) => {


  return (
    <div className='collections-grid con-reg'>
    {products.map((product:any, index:number) => 
        <CollectionItem product={product} key={index} />
      )}
</div>

  )
}
