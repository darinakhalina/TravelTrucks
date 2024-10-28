import clsx from 'clsx';
import css from './CamperDetails.module.css';
import { formatMeasurement } from '../../utils/formatMeasurement';

const CamperDetails = ({ camper }) => {
  return (
    <div className={css['camper-details']}>
      <h3 className={clsx('text-md', css['camper-details-title'])}>Vehicle details</h3>
      <hr className="hr" />
      <ul className={css['camper-details-list']}>
        <li className={css['camper-details-item']}>
          <span>Form</span>
          <span className={css['camper-details-item-data']}>{camper.form}</span>
        </li>
        <li className={css['camper-details-item']}>
          <span>Length</span>
          <span className={css['camper-details-item-data']}>
            {formatMeasurement(camper.length)}
          </span>
        </li>
        <li className={css['camper-details-item']}>
          <span>Width</span>
          <span className={css['camper-details-item-data']}>{formatMeasurement(camper.width)}</span>
        </li>
        <li className={css['camper-details-item']}>
          <span>Heigth</span>
          <span className={css['camper-details-item-data']}>
            {formatMeasurement(camper.height)}
          </span>
        </li>
        <li className={css['camper-details-item']}>
          <span>Tank</span>
          <span className={css['camper-details-item-data']}>{formatMeasurement(camper.tank)}</span>
        </li>
        <li className={css['camper-details-item']}>
          <span>Consumption</span>
          <span className={css['camper-details-item-data']}>{camper.consumption}</span>
        </li>
      </ul>
    </div>
  );
};

export default CamperDetails;
