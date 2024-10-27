import Review from '../Review/Review';
import css from './CamperInfoReviews.module.css';

const CamperInfoReviews = ({ reviews = [] }) => {
  return (
    <ul className={css['reviews']}>
      {reviews.map((review, i) => (
        <li className={css['review-item']} key={`${i}-${review.reviewer_name}`}>
          <Review review={review} />
        </li>
      ))}
    </ul>
  );
};

export default CamperInfoReviews;
