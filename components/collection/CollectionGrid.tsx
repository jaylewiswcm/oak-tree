import React, { useState } from 'react'

// Components 
import { CollectionItem } from './CollectionItem';
import Modal from '../modal/Modal'
import { FabricSelection } from '../modal/fabrics/FabricSelection';
// Import Swiper
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination"; 
// import swiper modules
import { Pagination, Navigation } from "swiper";

interface ComponentProps {
    products: any
}
export const CollectionGrid = ({products}: ComponentProps) => {
  const [modalShow, setShow] = useState(false)

  return (
    <>
    <div className='collections-grid con-reg'>
      {products.map((product:any, index:number) => 
        <CollectionItem product={product} key={index} setShow={setShow} />
      )}
      { modalShow && <Modal classNames='' setShow={setShow} ><FabricSelection setShow={setShow} /></Modal>}
    </div>

    <div className='collections-carousel con-reg hide'>
              <Swiper
                slidesPerView={"auto"}
                spaceBetween={20}
                centeredSlides={true}
                initialSlide={1}
                speed={500}                   
                modules={[Pagination, Navigation]}
                className="mySwiper"
                >    
      {products.map((product:any, index:number) => 
        <SwiperSlide key={index}>
          <CollectionItem product={product} key={index} setShow={setShow} />
        </SwiperSlide>
      )}
    </Swiper>   
    { modalShow && <Modal classNames='' setShow={setShow} ><FabricSelection setShow={setShow} /></Modal>}
    </div>
    </>
  )
}
