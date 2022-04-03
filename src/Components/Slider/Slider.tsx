import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Slider.scss';
import UserCard from "../UserCard/UserCard";

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
              <UserCard />
            )
          })}
        </Slider>
  </div>;
};

export default SliderComponent;
