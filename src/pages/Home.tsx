import React from "react";
import SliderComponent from "../Components/Slider/Slider";
import s from "./Home.module.scss";

type Props = {};

const Home = (props: Props) => {
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
    </>
  );
};

export default Home;
