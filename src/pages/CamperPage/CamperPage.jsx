import { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchCamper } from '../../redux/campersOps';
import { clearSelectedItem } from '../../redux/campersSlice';
import { selectSelectedCamper } from '../../redux/selectors';

const CamperPage = () => {
  const dispatch = useDispatch();
  const tabSectionRef = useRef(null);
  const selectedCamper = useSelector(selectSelectedCamper);
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('features');

  const scrollToSection = () => {
    if (tabSectionRef.current) {
      tabSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const fetchCamperLocal = async () => {
      await dispatch(fetchCamper(id));
    };
    fetchCamperLocal();

    return () => {
      dispatch(clearSelectedItem());
    };
  }, [dispatch, id]);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    if (params.get('tab') === 'reviews') {
      setActiveTab('reviews');
      scrollToSection();
    }
  }, [id]);

  const handleButtonClick = () => {
    if (activeTab !== 'reviews') {
      setActiveTab('reviews');
    }
    scrollToSection();
  };

  return (
    <div>
      <div>
        <button onClick={handleButtonClick}> GO </button>
      </div>
      <div>Camper page</div>
      <div>{selectedCamper?.id}</div>
      <div>{selectedCamper?.name}</div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div ref={tabSectionRef}>active tab - {activeTab}</div>
    </div>
  );
};

export default CamperPage;
