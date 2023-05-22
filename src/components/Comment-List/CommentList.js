import "./CommentList.scss";
import React from 'react'

export default function CommentList(props) {
  const { comments } = props; // Destructure the comments prop

  return (
    <ul className='comment-list'>
      {comments.map((comment) => (
        <li key={comment.id} className='comment-list__item'>
          <div className='comment-list__namedate'>
            <h3 className='comment0list__name'>{comment.name}</h3>
            <p>{new Date(comment.timestamp).toLocaleDateString()}</p>
          </div>
          <p className='comment-list__comment'>{comment.comment}</p>
          <img/>
        </li>
      ))}
    </ul>
  );
}
