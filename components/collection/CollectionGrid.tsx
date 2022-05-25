import React, { useState } from 'react'
// Components 
import { CollectionItem } from './CollectionItem';
import Modal from '../modal/Modal'
import { FabricSelection } from '../modal/fabrics/FabricSelection';

interface ComponentProps {
    products: any
}
export const CollectionGrid = ({products}: ComponentProps) => {
  const [modalShow, setShow] = useState(false)

  return (
    <div className='collections-grid con-reg'>
      {products.map((product:any, index:number) => 
        <CollectionItem product={product} key={index} setShow={setShow} />
      )}
      { modalShow && <Modal classNames='' setShow={setShow} ><FabricSelection setShow={setShow} /></Modal>}
</div>

  )
}
