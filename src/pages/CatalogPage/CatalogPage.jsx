import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchCampers } from '../../redux/campersOps';
import {
  selectCampers,
  clearItemsState,
  selectTotal,
  selectIsLoading,
  resetCurrentPage,
  setCurrentPage,
  selectCurrentPage,
} from '../../redux/campersSlice';
import { setFilters, selectFilters, clearFilters } from '../../redux/filtersSlice';
import FiltersForm from '../../components/FiltersForm/FiltersForm';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const campers = useSelector(selectCampers);
  const total = useSelector(selectTotal);
  const isLoading = useSelector(selectIsLoading);
  const filtersFromStore = useSelector(selectFilters);
  const cuttentPage = useSelector(selectCurrentPage);
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
    await dispatch(fetchCampers({ page: nextPage, limit: 5, params: filtersFromStore }));
  };

  const handleNavigation = id => {
    navigate(`/catalog/${id}`);
  };

  return (
    <div>
      <FiltersForm onSubmit={onSubmit} />
      <div>
        {campers.map(item => (
          <div key={item.id}>
            {item.name} - {item.id}
            <button onClick={() => handleNavigation(item.id)}>Show more</button>
          </div>
        ))}
      </div>
      {campers.length < total && !isLoading && <button onClick={onMore}>More</button>}
    </div>
  );
};

export default CatalogPage;
