import React from 'react'
import userCard from '../../assets/UserCard.png';
import s from './UserCard.module.scss';



type Props = {
  id: number
  name: string
  company: string
}


const UserCard = ({ id, name, company }: Props) => {

  let userImg = `https://i.pravatar.cc/300?img=${id}`


  return (
    <div className={s.card} onClick={(e) => console.log(id)}>
      <img src={userImg} alt="userCard" className={s.card__img} />
      <h5 className={s.card__name}>{name}</h5>
      <span className={s.card__subname}>{company}</span>
    </div>
  )
}

export default UserCard