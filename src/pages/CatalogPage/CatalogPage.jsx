import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCampers } from '../../redux/campersOps';
import { selectCampers, clearItems } from '../../redux/campersSlice';
import { setFilter, selectNameFilter } from '../../redux/filtersSlice';
import FiltersForm from '../../components/FiltersForm/FiltersForm';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const campers = useSelector(selectCampers);

  useEffect(() => {
    const fetchCampersLocal = async () => {
      dispatch(clearItems());
      try {
        dispatch(await fetchCampers({ p: 1, l: 5 }));
      } catch (error) {
        console.error('Error:', error);
      }
    };
    fetchCampersLocal();

    return () => {
      dispatch(clearItems());
    };
  }, [dispatch]);

  // ? move to component
  const onSubmit = filters => {
    dispatch(setFilter(filters.name));

    dispatch(clearItems());
    try {
      dispatch(fetchCampers({ p: 1, l: 5, name: filters.name }));
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const filtersFromStore = useSelector(selectNameFilter);

  const onMore = () => {
    try {
      dispatch(fetchCampers({ p: 2, l: 5, name: filtersFromStore }));
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
      <button onClick={onMore}>More</button>
    </div>
  );
};

export default CatalogPage;
