import clsx from 'clsx';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchCampers, fetchMoreCampers } from '../../redux/campersOps';
import { clearItemsState, resetCurrentPage, setCurrentPage } from '../../redux/campersSlice';
import {
  selectCampers,
  selectTotal,
  selectCurrentPage,
  selectIsLoading,
  selectFilters,
  selectFavorites,
} from '../../redux/selectors';
import { setFilters, clearFilters } from '../../redux/filtersSlice';
import { addFavorite, removeFavorite } from '../../redux/favoritesSlice';
import FiltersForm from '../../components/FiltersForm/FiltersForm';
import css from './CatalogPage.module.css';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const campers = useSelector(selectCampers);
  const total = useSelector(selectTotal);
  const isLoading = useSelector(selectIsLoading);
  const filtersFromStore = useSelector(selectFilters);
  const cuttentPage = useSelector(selectCurrentPage);
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

  // ? move to component
  const onSubmit = async filters => {
    dispatch(clearItemsState());
    dispatch(setFilters(filters));
    dispatch(setCurrentPage(1));
    await dispatch(fetchCampers({ page: 1, limit: 5, params: filters }));
  };

  const onMore = async () => {
    const nextPage = cuttentPage + 1;
    dispatch(setCurrentPage(nextPage));
    await dispatch(fetchMoreCampers({ page: nextPage, limit: 5, params: filtersFromStore }));
  };

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
        <FiltersForm onSubmit={onSubmit} />
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
        {campers.length < total && !isLoading && <button onClick={onMore}>More</button>}
      </div>
    </div>
  );
};

export default CatalogPage;
