import React from 'react'
import userCard from '../../assets/UserCard.png';
import s from './UserCard.module.scss';

type Props = {}

const UserCard = (props: Props) => {
  return (
    <div className={s.card}>
        <img src={userCard} alt="userCard" className={s.card__img}/>        
        <h5 className={s.card__name}>Иванов Сергей</h5>
        <span className={s.card__subname}>Delphine</span>
    </div>
  )
}

export default UserCard