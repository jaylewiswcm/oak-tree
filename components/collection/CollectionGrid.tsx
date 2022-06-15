import React, { useState } from 'react'
// Utils
import { client } from "../../utils/shopify/shopify-client";

// Components 
import { CollectionItem } from './CollectionItem';
import Modal from '../modal/Modal'
import { FabricSelection } from '../modal/fabrics/FabricSelection';

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
  }
}

interface ComponentProps {
    products: Array<Product>
}


export const CollectionGrid = ({ products }: ComponentProps) => {
  const [modalShow, setShow] = useState(false)
  return (
    <>
    <div className='collections-grid con-reg'>
      {products.map((product:any, index:number) => 
        <CollectionItem product={product} key={index} setShow={setShow} />
      )}
      { modalShow && <Modal classNames='' setShow={setShow} ><FabricSelection setShow={setShow} /></Modal>}
    </div>
    </>
  )
}