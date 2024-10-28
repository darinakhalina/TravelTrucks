import clsx from 'clsx';
import Icon from '../Icon/Icon';
import css from './Rating.module.css';

const Rating = ({ rating }) => {
  const stars = Array.from({ length: 5 }, (_, index) => index + 1);

  return (
    <div className={css['rating']}>
      {stars.map(star => (
        <Icon
          size={16}
          name="star"
          key={star}
          className={clsx(css['star'], { [css['is-selected']]: star <= rating })}
        />
      ))}
    </div>
  );
};

export default Rating;
