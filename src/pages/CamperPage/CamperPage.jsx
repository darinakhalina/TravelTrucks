import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchCamper } from '../../redux/campersOps';
import { selectSelectedCamper, clearSelectedItem } from '../../redux/campersSlice';

const CamperPage = () => {
  const dispatch = useDispatch();
  const selectedCamper = useSelector(selectSelectedCamper);
  const { id } = useParams();

  useEffect(() => {
    console.log('hello');
    const fetchCamperLocal = async () => {
      try {
        await dispatch(fetchCamper(id));
      } catch (e) {
        console.log(e);
      }
    };
    fetchCamperLocal();

    return () => {
      console.log('bye');
      dispatch(clearSelectedItem());
    };
  }, [dispatch, id]);

  return (
    <div>
      <div>Camper page</div>
      <div>{selectedCamper?.id}</div>
      <div>{selectedCamper?.name}</div>
    </div>
  );
};

export default CamperPage;
