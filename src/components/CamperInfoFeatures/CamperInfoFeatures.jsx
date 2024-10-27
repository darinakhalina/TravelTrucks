import CamperDetails from '../CamperDetails/CamperDetails';
import Features from '../Features/Features';
import css from './CamperInfoFeatures.module.css';

const CamperInfoFeatures = ({ camper }) => {
  return (
    <div className={css['camper-info-features']}>
      <Features camper={camper} />
      <CamperDetails camper={camper} />
    </div>
  );
};

export default CamperInfoFeatures;
