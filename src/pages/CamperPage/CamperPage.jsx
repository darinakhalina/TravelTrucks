import clsx from 'clsx';
import { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { fetchCamper } from '../../redux/campersOps';
import { clearSelectedItem } from '../../redux/campersSlice';
import { selectSelectedCamper, selectIsLoading } from '../../redux/selectors';
import CamperInfo from '../../components/CamperInfo/CamperInfo';
import Loader from '../../components/Loader/Loader';
import css from './CamperPage.module.css';

const tabsData = [
  { id: 'features', label: 'Features' },
  { id: 'reviews', label: 'Reviews' },
];

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
    <div className={clsx('container', css['camper-page-container'])}>
      <CamperInfo camper={camper} onClick={handleButtonClick} />
      <div ref={tabSectionRef}>
        <nav>
          <ul className={css['camper-page-tabs']}>
            {tabsData.map(tab => (
              <li key={tab.id}>
                <div
                  tabIndex={0}
                  className={clsx(
                    css['camper-page-tabs-item'],
                    activeTab === tab.id && css['is-active']
                  )}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                </div>
              </li>
            ))}
          </ul>
        </nav>
        <div className={css['camper-page-content']}>
          <div className={css['camper-page-content-block']}>
            {activeTab === 'features' ? <div>feat</div> : <div>rew</div>}
          </div>
          <div className={css['camper-page-content-block']}>FORM</div>
        </div>
      </div>
    </div>
  );
};

export default CamperPage;
