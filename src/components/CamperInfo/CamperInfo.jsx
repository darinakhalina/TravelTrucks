import clsx from 'clsx';
import { formatLocation } from '../../utils/formatLocation';
import { formatPrice } from '../../utils/formatPrice';
import ReviewsRating from '../ReviewsRating/ReviewsRating';
import Icon from '../Icon/Icon';
import css from './CamperInfo.module.css';

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
      <div className={css['camper-info-gallery-holder']}>
        <ul className={css['camper-info-gallery']}>
          {camper.gallery.map(({ thumb }, index) => {
            return (
              <li key={thumb}>
                <img
                  width={292}
                  height={312}
                  className={css['camper-info-gallery-image']}
                  src={thumb}
                  alt={`${camper.name} - image ${index}`}
                />
              </li>
            );
          })}
        </ul>
      </div>
      <p className={css['camper-info-description']}>{camper.description}</p>
    </div>
  );
};

export default CamperInfo;
