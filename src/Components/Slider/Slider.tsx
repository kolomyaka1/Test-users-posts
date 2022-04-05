import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Slider.scss';
import UserCard from "../UserCard/UserCard";
import { useCustomSelector } from "../../hooks/store";
import { User } from "../../store/types/types";


type Props = {};

const SliderComponent = (props: Props) => {

  const users = useCustomSelector(state => state.usersSliceReducer.users)

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };



  return <div className='slider'>
    <Slider {...settings}>
      {users.map((user: User) => {

        return (
          <UserCard key={user.id} id={user.id} name={user.name} company={user.company.name} />
        )
      })}
    </Slider>
  </div>;
};

export default SliderComponent;
