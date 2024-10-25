import clsx from 'clsx';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchCampers } from '../../redux/campersOps';
import { clearItemsState, resetCurrentPage, setCurrentPage } from '../../redux/campersSlice';
import { selectCampers, selectFavorites } from '../../redux/selectors';
import { clearFilters } from '../../redux/filtersSlice';
import { addFavorite, removeFavorite } from '../../redux/favoritesSlice';
import FiltersForm from '../../components/FiltersForm/FiltersForm';
import CampersLoadMoreButton from '../../components/CampersLoadMoreButton/CampersLoadMoreButton';
import css from './CatalogPage.module.css';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const campers = useSelector(selectCampers);
  const favorites = useSelector(selectFavorites);
  const navigate = useNavigate();

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

  const handleNavigation = id => {
    navigate(`/catalog/${id}`);
  };

  const handleFavoriteClick = id => {
    // move to component and get from store by id
    const isFavorite = favorites?.some(favoriteId => favoriteId === id);
    if (isFavorite) {
      dispatch(removeFavorite(id));
    } else {
      dispatch(addFavorite(id));
    }
  };

  return (
    <div className={clsx('container', css['catalog-page-container'])}>
      <div className={css['catalog-page-filters-holder']}>
        <FiltersForm />
      </div>
      <div className={css['catalog-page-campers-list-holder']}>
        {campers.map(item => (
          <div key={item.id}>
            <button onClick={() => handleFavoriteClick(item.id)}>
              {favorites?.some(favoriteId => favoriteId === item.id) ? 'YES - fav' : 'NO'}
            </button>
            {item.name} - {item.id}
            <button onClick={() => handleNavigation(item.id)}>Show more</button>
          </div>
        ))}
        <CampersLoadMoreButton />
      </div>
    </div>
  );
};

export default CatalogPage;
