import React from 'react';
import Rating from '@material-ui/lab/Rating';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import '../styles/challenge/Review.scss';
const Review = (props) => {
  const { item } = props;
  return (
    <article className="review-container">
      <section className="review-user">
        <AccountCircleIcon fontSize="large" style={{color:"#c8c8c8"}} />
        <section className="review-user-info">
          <section className="review-user-id">{item.userId}</section>
          <section className="review-user-bottom">
            <Rating size="small" value={item.rate} readOnly />
            <span className="review-user-date">{item.date}</span>
          </section>
        </section>        
      </section>
      <section className="review-text">
      {item.content}
      </section>
    </article>
  );
};

export default Review;