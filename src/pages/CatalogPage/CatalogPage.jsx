import clsx from 'clsx';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCampers } from '../../redux/campersOps';
import { clearItemsState, resetCurrentPage, setCurrentPage } from '../../redux/campersSlice';
import { clearFilters } from '../../redux/filtersSlice';
import CatalogFiltersForm from '../../components/CatalogFiltersForm/CatalogFiltersForm';
import CampersLoadMoreButton from '../../components/CampersLoadMoreButton/CampersLoadMoreButton';
import CampersList from '../../components/CampersList/CampersList';
import css from './CatalogPage.module.css';

const CatalogPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchCampersLocal = async () => {
      dispatch(setCurrentPage(1));
      await dispatch(fetchCampers({ page: 1, limit: 5 })); // add consts for first page and limits
    };
    fetchCampersLocal();

    return () => {
      dispatch(clearItemsState());
      dispatch(clearFilters());
      dispatch(resetCurrentPage());
    };
  }, [dispatch]);

  return (
    <div className={clsx('container', css['catalog-page-container'])}>
      <div className={css['catalog-page-filters-holder']}>
        <CatalogFiltersForm />
      </div>
      <div className={css['catalog-page-campers-list-holder']}>
        <CampersList />
        <CampersLoadMoreButton />
      </div>
    </div>
  );
};

export default CatalogPage;
