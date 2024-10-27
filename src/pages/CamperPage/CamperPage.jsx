import { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { fetchCamper } from '../../redux/campersOps';
import { clearSelectedItem } from '../../redux/campersSlice';
import { selectSelectedCamper, selectIsLoading } from '../../redux/selectors';
import CamperInfo from '../../components/CamperInfo/CamperInfo';
import Loader from '../../components/Loader/Loader';

const CamperPage = () => {
  const dispatch = useDispatch();
  const camper = useSelector(selectSelectedCamper);
  const isLoading = useSelector(selectIsLoading);
  const tabSectionRef = useRef(null);

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
    if (isLoading) return;
    const params = new URLSearchParams(location.search);
    if (params.get('tab') === 'reviews') {
      setActiveTab('reviews');
      scrollToSection();
    }
  }, [id, isLoading]);

  const handleButtonClick = () => {
    if (activeTab !== 'reviews') {
      setActiveTab('reviews');
    }
    scrollToSection();
  };

  if (isLoading) {
    return <Loader />;
  }

  if (!camper) {
    return (
      <div className="align-block">
        <p className="text-md">
          Unfortunately, there&apos;s no information available for this camper. Try refreshing the
          page or choosing another one.
        </p>
        <p>
          <Link className="text-md" to="/catalog">
            Go to catalog page
          </Link>
        </p>
      </div>
    );
  }

  return (
    <div>
      <CamperInfo camper={camper} onClick={handleButtonClick} />
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
