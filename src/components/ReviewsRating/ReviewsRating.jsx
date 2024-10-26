import Icon from '../Icon/Icon';
import css from './ReviewsRating.module.css';

const ReviewsRating = ({ rating, reviews, onClick }) => {
  const numberOfReviews = reviews ? reviews.length : 0;
  return (
    <div className={css['rating']}>
      <Icon className={css['rating-icon']} name="star" size={16} />
      <button className={css['rating-link']} onClick={onClick}>
        <span>{rating}</span>
        <span>({numberOfReviews} reviews)</span>
      </button>
    </div>
  );
};

export default ReviewsRating;
