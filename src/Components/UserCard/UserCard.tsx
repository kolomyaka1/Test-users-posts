import React from 'react'
import userCard from '../../assets/UserCard.png';
import s from './UserCard.module.scss';



type Props = {
  id: number
  name: string
  company: string
}

const UserCard = ({ id, name, company }: Props) => {
  return (
    <div className={s.card}>
      <img src={userCard} alt="userCard" className={s.card__img} />
      <h5 className={s.card__name}>{name}</h5>
      <span className={s.card__subname}>{company}</span>
    </div>
  )
}

export default UserCard