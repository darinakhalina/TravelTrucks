import Rating from '../Rating/Rating';
import css from './Review.module.css';

const Review = ({ review }) => {
  return (
    <div className={css['review']}>
      <div className={css['review-info']}>
        <div className={css['review-avatar']}>{review.reviewer_name.charAt(0)}</div>
        <div className={css['review-additional-info']}>
          <p className={css['review-info-name']}>{review.reviewer_name}</p>
          <Rating rating={review.reviewer_rating} />
        </div>
      </div>
      <p className={css['review-comment']}>{review.comment}</p>
    </div>
  );
};

export default Review;
