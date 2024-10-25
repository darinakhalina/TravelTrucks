import { lazy, Suspense } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import css from './App.module.css';
import logo from '../../assets/logo.svg';
import Navigation from '../Navigation/Navigation';
import Loader from '../Loader/Loader';

const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
const CatalogPage = lazy(() => import('../../pages/CatalogPage/CatalogPage'));
const CamperPage = lazy(() => import('../../pages/CamperPage/CamperPage'));
const NotFoundPage = lazy(() => import('../../pages/NotFoundPage/NotFoundPage'));

function App() {
  return (
    <div className="campers-scope">
      <header className={css['header']}>
        <div className="container flex-container">
          <Link className={css['logo']} to="/">
            <img src={logo} width={136} height={16} alt="Travel Trucks" />
          </Link>
          <Navigation />
        </div>
      </header>
      <main>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/catalog" element={<CatalogPage />} />
            <Route path="/catalog/:id" element={<CamperPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </main>
      <Toaster position="top-right" toastOptions={{ duration: 3000 }} />
    </div>
  );
}

export default App;
