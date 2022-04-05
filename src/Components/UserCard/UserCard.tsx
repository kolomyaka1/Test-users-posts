import React from 'react'
import userCard from '../../assets/UserCard.png';
import { useCustomDispatch } from '../../hooks/store';
import { setCurrentUser } from '../../store/slices/usersSlice';
import { fetchPosts } from '../../store/thunks/fetchPosts';
import s from './UserCard.module.scss';



type Props = {
  id: number
  name: string
  company: string
}


const UserCard = ({ id, name, company }: Props) => {

  const dispatch = useCustomDispatch();
  let userImg = `https://i.pravatar.cc/300?img=${id}`

  let handleClick = () => {

    dispatch(setCurrentUser(id));
    dispatch(fetchPosts(id));
  }

  return (
    <div className={s.card} onClick={handleClick}>
      <img src={userImg} alt="userCard" className={s.card__img} />
      <h5 className={s.card__name}>{name}</h5>
      <span className={s.card__subname}>{company}</span>
    </div>
  )
}

export default UserCard