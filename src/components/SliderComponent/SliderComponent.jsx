import React from 'react'
import Slider from 'react-slick';
import {Image} from 'antd';

const SliderComponent = ({arrImages}) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slideToShow: 1,
    slideToScroll: 1,
    autoPlaySpeed: 1000,
    autoplay: true
  };
  return (
    <Slider {...settings}>
      {arrImages.map((images)=>{
        return (
          <Image src={images} alt="slider" preview={false}width="100%" height="274px"/> 
        )
      })}
    </Slider>
  )
}

export default SliderComponent