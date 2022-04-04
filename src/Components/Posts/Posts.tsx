import React, { useEffect } from 'react'
import { useCustomDispatch, useCustomSelector } from '../../hooks/store';
import { fetchUsers } from '../../store/thunks/fetchUsers';
import PostItem from './PostItem/PostItem';
import s from './Posts.module.scss';

type Props = {}

const Posts = (props: Props) => {
  const dispatch = useCustomDispatch();
  const isLoading = useCustomSelector(state => state.usersSliceReducer.isLoading);

  useEffect(() => {
    dispatch(fetchUsers())
  }, [])

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