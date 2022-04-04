import React from 'react'
import s from './PostItem.module.scss';

type Props = {}

const PostItem = (props: Props) => {
  return (
    <div className={s.post__item}>
      <h4 className={s.post__title}>Заголовок поста</h4>
      <span className={s.post__text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis nec platea ipsum ornare interdum.
        Aliquet metus suscipit ornare aliquet accumsan, massa risus quisque ac. Pellentesque risus
        mauris mattis viverra amet sed elit. Pellentesque dui vitae amet diam convallis nisi nec.</span>
    </div>
  )
}

export default PostItem