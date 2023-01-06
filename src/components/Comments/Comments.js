import React from 'react'
import Comment from '../Comment/Comment'
import CommentForm from '../CommentForm/CommentForm'
import './Comments.scss'


const Comments = () => {
  return (
    <div className='comments'>
        <CommentForm />
        <div className='comments__list'>
            <Comment />

        </div>
    </div>
  )
}

export default Comments