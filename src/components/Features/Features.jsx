import Icon from '../Icon/Icon';
import css from './Features.module.css';

const Features = ({ camper }) => {
  const {
    AC,
    TV,
    bathroom,
    engine,
    gas,
    kitchen,
    microwave,
    radio,
    refrigerator,
    transmission,
    water,
  } = camper;
  return (
    <ul className={css['feature-list']}>
      {AC && (
        <li>
          <div className={css['feature']}>
            <Icon name="wind" />
            <span className={css['feature-title']}>AC</span>
          </div>
        </li>
      )}
      {TV && (
        <li>
          <div className={css['feature']}>
            <Icon name="tv" />
            <span className={css['feature-title']}>TV</span>
          </div>
        </li>
      )}
      {bathroom && (
        <li>
          <div className={css['feature']}>
            <Icon name="shower" />
            <span className={css['feature-title']}>Bathroom</span>
          </div>
        </li>
      )}
      {engine && (
        <li>
          <div className={css['feature']}>
            <Icon name="fuel" />
            <span className={css['feature-title']}>{engine}</span>
          </div>
        </li>
      )}
      {gas && (
        <li>
          <div className={css['feature']}>
            <Icon name="gas" />
            <span className={css['feature-title']}>Gas</span>
          </div>
        </li>
      )}
      {kitchen && (
        <li>
          <div className={css['feature']}>
            <Icon name="cup" />
            <span className={css['feature-title']}>Kitchen</span>
          </div>
        </li>
      )}
      {microwave && (
        <li>
          <div className={css['feature']}>
            <Icon name="microwave" />
            <span className={css['feature-title']}>Microwave</span>
          </div>
        </li>
      )}
      {radio && (
        <li>
          <div className={css['feature']}>
            <Icon name="radio" />
            <span className={css['feature-title']}>Radio</span>
          </div>
        </li>
      )}
      {refrigerator && (
        <li>
          <div className={css['feature']}>
            <Icon name="fridge" />
            <span className={css['feature-title']}>Refrigerator</span>
          </div>
        </li>
      )}
      {transmission && (
        <li>
          <div className={css['feature']}>
            <Icon name="diagram" />
            <span className={css['feature-title']}>{transmission}</span>
          </div>
        </li>
      )}
      {water && (
        <li>
          <div className={css['feature']}>
            <Icon name="water" />
            <span className={css['feature-title']}>Water</span>
          </div>
        </li>
      )}
    </ul>
  );
};

export default Features;
