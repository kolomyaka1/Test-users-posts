import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Slider.scss';
import UserCard from "../UserCard/UserCard";
import { useCustomDispatch, useCustomSelector } from "../../hooks/store";
import { User } from "../../store/types/types";
import { setCurrentUser } from "../../store/slices/usersSlice";
import { fetchPosts } from "../../store/thunks/fetchPosts";


type Props = {};

const SliderComponent = (props: Props) => {

  const users = useCustomSelector(state => state.usersSliceReducer.users)
  let { currentCompany, currentUserId } = useCustomSelector(state => state.usersSliceReducer);
  const dispatch = useCustomDispatch();
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  let handleClick = (id: number) => {
    dispatch(setCurrentUser(id));
    dispatch(fetchPosts(id));
  }



  return <div className='slider'>
    <Slider {...settings}>
      {users.map((user: User, index) => {

        return (
          <UserCard handleClick={handleClick} key={user.id} id={user.id} name={user.name} company={user.company.name} currentUserId={currentUserId} />
        )
      })}
    </Slider>
  </div>;
};

export default SliderComponent;
