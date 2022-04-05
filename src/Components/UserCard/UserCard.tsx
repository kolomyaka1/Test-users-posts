import React from 'react'
import userCard from '../../assets/UserCard.png';
import { useCustomDispatch, useCustomSelector } from '../../hooks/store';
import { setCurrentUser } from '../../store/slices/usersSlice';
import { fetchPosts } from '../../store/thunks/fetchPosts';
import s from './UserCard.module.scss';
import classNames from 'classnames';

type Props = {
  id: number
  name: string
  company: string
  currentUserId: number
  handleClick: (id: number) => void
}

const UserCard = ({ id, name, company, currentUserId, handleClick }: Props) => {

  let userImg = `https://i.pravatar.cc/300?img=${id}`


  return (
    <div className={s.card + ' ' + classNames({
      'active': id === currentUserId
    })} onClick={() => handleClick(id)}>
      <img src={userImg} alt="userCard" className={s.card__img} />
      <h5 className={s.card__name}>{name}</h5>
      <span className={s.card__subname}>{company}</span>
    </div>
  )
}

export default UserCard