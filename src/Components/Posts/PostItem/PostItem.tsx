import React from 'react'
import s from './PostItem.module.scss';

type Props = {
  userId: number
  id: number
  title: string
  body: string
}

const PostItem = ({ userId, title, body }: Props) => {

  return (
    <div className={s.post__item}>
      <h4 className={s.post__title}>{title}</h4>
      <span className={s.post__text}>{body}</span>
    </div>
  )
}

export default PostItem