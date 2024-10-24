import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCampers } from '../../redux/campersOps';
import { selectCampers, clearState, selectTotal } from '../../redux/campersSlice';
import { setFilter, selectNameFilter } from '../../redux/filtersSlice';
import FiltersForm from '../../components/FiltersForm/FiltersForm';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const campers = useSelector(selectCampers);
  const total = useSelector(selectTotal);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchCampersLocal = async () => {
      dispatch(clearState());
      try {
        dispatch(await fetchCampers({ p: 1, l: 5 }));
      } catch (e) {
        console.log(e);
      }
    };
    fetchCampersLocal();

    return () => {
      dispatch(clearState());
    };
  }, [dispatch]);

  // ? move to component
  const onSubmit = filters => {
    dispatch(setFilter(filters.name));

    dispatch(clearState());
    try {
      dispatch(fetchCampers({ p: 1, l: 5, name: filters.name }));
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const filtersFromStore = useSelector(selectNameFilter);

  const onMore = () => {
    setCurrentPage(currentPage + 1);
    try {
      dispatch(fetchCampers({ p: currentPage + 1, l: 5, name: filtersFromStore }));
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
      {campers.length < total && <button onClick={onMore}>More</button>}
    </div>
  );
};

export default CatalogPage;
