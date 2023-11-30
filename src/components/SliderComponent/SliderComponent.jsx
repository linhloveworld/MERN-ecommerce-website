import React from 'react'
import Slider from 'react-slick';
const SliderComponent = () => {
  const Setting = {
    dots: true,
    infinite: true,
    speed: 500,
    slideToShow: 1,
    slideToScroll: 1
  };
  return (
    <Slider Setting></Slider>
  )
}

export default SliderComponent