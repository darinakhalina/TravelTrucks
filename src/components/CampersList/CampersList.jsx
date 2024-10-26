import { useSelector } from 'react-redux';
import { selectCampers, selectIsLoading } from '../../redux/selectors';
import Loader from '../Loader/Loader';
import CamperCard from '../CamperCard/CamperCard';

const CampersList = () => {
  const campers = useSelector(selectCampers);
  const isLoading = useSelector(selectIsLoading);

  if (isLoading && campers.length === 0) {
    return <Loader />;
  }

  if (campers.length === 0) {
    return <p className="text-md">We didn&apos;t find any campers that fit your search.</p>;
  }

  return (
    <>
      {campers.map(item => (
        <CamperCard key={item.id} camper={item} />
      ))}
      {isLoading && <Loader />}
    </>
  );
};

export default CampersList;
