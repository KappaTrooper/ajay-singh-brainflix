import "./CommentList.scss";
import React from 'react'

export default function CommentList({ comments }) {
  // const { comments } = props; 

  return (
    <ul className='comment-list'>
      {comments.map((comment) => (
        <li key={comment.id} className='comment-list__item'>
         
       <div className="comment-list__container">

        <div className="comment-list__containericon">
        <img className="comment-list__avatar"/>
        </div>



          <div className="comment-list-containeritem">
          <div className='comment-list__namedate'>
            <h3 className='comment-list__name'>{comment.name}</h3>
            <p className="comment-list__date">{new Date(comment.timestamp).toLocaleDateString()}</p>
          </div>
          <p className='comment-list__comment'>{comment.comment}</p>
          </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
