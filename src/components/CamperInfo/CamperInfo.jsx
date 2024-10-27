import clsx from 'clsx';
// import { useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { selectIsFavorite } from '../../redux/selectors';
// import { addFavorite, removeFavorite } from '../../redux/favoritesSlice';
// import Icon from '../Icon/Icon';
// import { formatPrice } from '../../utils/formatPrice';
// import { formatLocation } from '../../utils/formatLocation';
// import ReviewsRating from '../ReviewsRating/ReviewsRating';
// import Button from '../Button/Button';
import css from './CamperInfo.module.css';
import { formatLocation } from '../../utils/formatLocation';
import { formatPrice } from '../../utils/formatPrice';
import ReviewsRating from '../ReviewsRating/ReviewsRating';
import Icon from '../Icon/Icon';

const CamperInfo = ({ camper, onClick }) => {
  return (
    <div className={css['camper-info']}>
      <div className={css['camper-info-details']}>
        <h2 className={clsx(css['camper-info-name'], 'text-lg')}>{camper.name}</h2>
      </div>
      <div className={css['camper-info-details-data']}>
        <ReviewsRating rating={camper.rating} reviews={camper.reviews} onClick={onClick} />
        <div className={css['camper-info-details-location']}>
          <Icon name="map" size={16} />
          <span>{formatLocation(camper.location)}</span>
        </div>
      </div>
      <div className={clsx(css['camper-info-details-price'], 'text-lg')}>
        {formatPrice(camper.price)}
      </div>
    </div>
  );
};

export default CamperInfo;

/* const dispatch = useDispatch();
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
  }; */
