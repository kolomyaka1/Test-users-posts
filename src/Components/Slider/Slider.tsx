import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Slider.scss';

type Props = {};

const SliderComponent = (props: Props) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return <div className='slider'>
        <Slider {...settings}>
          {[1,2,3,4,5,6,7,8,9].map((item,index) => {
            return (
              <div key={index}>
              <h1 style={{ color: 'red', fontSize: '48px', textAlign: 'center'}}>
                {item}
              </h1>
            </div>
            )
          })}
        </Slider>
  </div>;
};

export default SliderComponent;
