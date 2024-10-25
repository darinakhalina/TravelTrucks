import clsx from 'clsx';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import css from './HomePage.module.css';

const HomePage = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/catalog');
  };

  return (
    <section className={css['hero']}>
      <div className="container">
        <div className={css['hero-content']}>
          <h1 className={clsx('text-xl', css['hero-content-title'])}>Campers of your dreams</h1>
          <h2 className={clsx('text-lg', css['hero-content-subtitle'])}>
            You can find everything you want in our catalog
          </h2>
          <Button onClick={handleButtonClick}>View Now</Button>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
