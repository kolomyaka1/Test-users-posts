import React, { useEffect, useState } from 'react'
import { useCustomSelector } from '../../hooks/store';
import { Post } from '../../store/types/types';
import PostItem from './PostItem/PostItem';
import s from './Posts.module.scss';

type Props = {}

const Posts = (props: Props) => {

  let posts = useCustomSelector(state => state.postsSliceReducer.posts);
  let users = useCustomSelector(state => state.usersSliceReducer.users)



  return (
    <div className={s.posts__wrapper}>
      <h2 className={s.posts__title}>{users[0] && `3 актуальных поста ${users[0].company.name}`}</h2>
      {posts.map((post: Post) => {
        return <PostItem key={post.id} id={post.id} userId={post.userId} title={post.title} body={post.body} />
      })}
    </div>
  )
}

export default Posts