import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectIsFavorite } from '../../redux/selectors';
import { addFavorite, removeFavorite } from '../../redux/favoritesSlice';
import Icon from '../Icon/Icon';
import { formatPrice } from '../../utils/formatPrice';
import { formatLocation } from '../../utils/formatLocation';
import ReviewsRating from '../ReviewsRating/ReviewsRating';
import Button from '../Button/Button';
import css from './CamperCard.module.css';
import Features from '../Features/Features';

const CamperCard = ({ camper }) => {
  const dispatch = useDispatch();
  const isFavorite = useSelector(selectIsFavorite(camper.id));
  const navigate = useNavigate();

  const handleNavigation = id => {
    navigate(`/catalog/${id}`);
  };

  const handleReviewsNavigation = id => {
    navigate(`/catalog/${id}?tab=reviews`);
  };

  const handleFavoriteClick = id => {
    if (isFavorite) {
      dispatch(removeFavorite(id));
    } else {
      dispatch(addFavorite(id));
    }
  };

  return (
    <div className={css['camper-card']}>
      <img
        className={css['camper-card-image']}
        src={camper.gallery[0]?.thumb}
        width={292}
        height={320}
        alt={camper.name}
      />
      <div className={css['camper-card-info']}>
        <div className={css['camper-card-main-info']}>
          <h2 className={clsx(css['camper-card-name'], 'text-lg')}>{camper.name}</h2>
          <div className={css['camper-card-main-additional-info']}>
            <div className={clsx(css['camper-card-price'], 'text-lg')}>
              {formatPrice(camper.price)}
            </div>
            <div>
              <button
                className={clsx(css['camper-card-favorive-btn'], {
                  [css['is-favorite']]: isFavorite,
                })}
                onClick={() => handleFavoriteClick(camper.id)}
              >
                <Icon
                  className={clsx(css['camper-card-favorive'], {
                    [css['is-favorite']]: isFavorite,
                  })}
                  name="heart"
                  size={24}
                />
              </button>
            </div>
          </div>
        </div>
        <div className={css['camper-card-main-details-info']}>
          <ReviewsRating
            rating={camper.rating}
            reviews={camper.reviews}
            onClick={() => handleReviewsNavigation(camper.id)}
          />
          <div className={css['camper-card-main-details-location']}>
            <Icon name="map" size={16} />
            <span>{formatLocation(camper.location)}</span>
          </div>
        </div>
        <p className={css['camper-card-info-description']}>{camper.description}</p>
        <div>
          <Features camper={camper} />
        </div>
        <div className={css['camper-card-actions']}>
          <Button onClick={() => handleNavigation(camper.id)}>Show more</Button>
        </div>
      </div>
    </div>
  );
};

export default CamperCard;
