import React, { useEffect } from "react";
import Posts from "../Components/Posts/Posts";
import SliderComponent from "../Components/Slider/Slider";
import { useCustomDispatch } from "../hooks/store";
import { fetchPosts } from "../store/thunks/fetchPosts";
import { fetchUsers } from "../store/thunks/fetchUsers";
import s from "./Home.module.scss";


type Props = {};

const Home = (props: Props) => {

  const dispatch = useCustomDispatch();

  useEffect(() => {
    dispatch(fetchUsers())
    dispatch(fetchPosts(1));
  }, [])


  return (
    <>
      <div className={s.wrapper}>
        <div className={s.header_title}>
          <h2 className={s.top_title}>Наши топ-блогеры</h2>
          <h3 className={s.bot_title}>
            Лучше специалисты в своем деле,
            <br /> средний опыт работы в профессии - 27 лет
          </h3>
        </div>
      </div>
      <SliderComponent />
      <Posts />
    </>
  );
};

export default Home;
