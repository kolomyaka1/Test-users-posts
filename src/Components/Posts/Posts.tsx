import React from 'react'
import PostItem from './PostItem/PostItem';
import s from './Posts.module.scss';

type Props = {}

const Posts = (props: Props) => {
  return (
    <div className={s.posts__wrapper}>
        <h2 className={s.posts__title}>3 актуальных поста Moriah.Stanton</h2>
        <PostItem />
        <PostItem />
        <PostItem />
    </div>
  )
}

export default Posts