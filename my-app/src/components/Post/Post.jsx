import React from 'react'
import s from './Post.module.css';

const Post = (props) =>{
    return(
        <div className={s.wrapper}>
            <div className={s.creator}>
                <strong>{props.userName}</strong>
            </div>
            <div className={s.content}>
                <p>
                    {props.text}
                </p>
            </div>
            <div>
            <p>{ new Date().toDateString() }</p>
            </div>
        </div>
    )
}

export default Post;