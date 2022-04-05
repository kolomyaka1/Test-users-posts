import React, { useEffect, useState } from 'react'
import { useCustomSelector } from '../../hooks/store';
import { Post } from '../../store/types/types';
import PostItem from './PostItem/PostItem';
import s from './Posts.module.scss';

type Props = {}

const Posts = (props: Props) => {

  let posts = useCustomSelector(state => state.postsSliceReducer.posts);
  let users = useCustomSelector(state => state.usersSliceReducer.users)
  let currentUser = useCustomSelector(state => state.usersSliceReducer.currentUserId)
  let userId = currentUser - 1;


  return (
    <div className={s.posts__wrapper}>
      <div className={s.posts__body}>
        <h2 className={s.posts__title}>{users[userId] && `3 актуальных поста ${users[userId].company.name}`}</h2>
        {posts.map((post: Post) => {
          return <PostItem key={post.id} id={post.id} userId={post.userId} title={post.title} body={post.body} />
        })}
      </div>
    </div>
  )
}

export default Posts