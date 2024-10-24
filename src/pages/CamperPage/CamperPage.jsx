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
    const fetchCamperLocal = async () => {
      await dispatch(fetchCamper(id));
    };
    fetchCamperLocal();

    return () => {
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
