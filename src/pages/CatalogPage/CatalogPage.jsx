import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCampers } from '../../redux/campersOps';
import { selectCampers, clearState, selectTotal, selectIsLoading } from '../../redux/campersSlice';
import { setFilter, selectNameFilter } from '../../redux/filtersSlice';
import FiltersForm from '../../components/FiltersForm/FiltersForm';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const campers = useSelector(selectCampers);
  const total = useSelector(selectTotal);
  const isLoading = useSelector(selectIsLoading);
  const filtersFromStore = useSelector(selectNameFilter);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    console.log('hello');
    const fetchCampersLocal = async () => {
      dispatch(clearState());
      try {
        await dispatch(fetchCampers({ p: 1, l: 5, name: filtersFromStore }));
      } catch (e) {
        console.log(e);
      }
    };
    fetchCampersLocal();

    return () => {
      console.log('bye');
      dispatch(clearState());
    };
  }, [dispatch, filtersFromStore]);

  // ? move to component
  const onSubmit = async filters => {
    dispatch(setFilter(filters.name));

    dispatch(clearState());
    try {
      await dispatch(fetchCampers({ p: 1, l: 5, name: filters.name }));
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const onMore = async () => {
    setCurrentPage(currentPage + 1);
    try {
      await dispatch(fetchCampers({ p: currentPage + 1, l: 5, name: filtersFromStore }));
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <FiltersForm onSubmit={onSubmit} />
      <div>
        {campers.map(item => (
          <div key={item.id}>
            {item.name} - {item.id}
          </div>
        ))}
      </div>
      {campers.length < total && !isLoading && <button onClick={onMore}>More</button>}
    </div>
  );
};

export default CatalogPage;
