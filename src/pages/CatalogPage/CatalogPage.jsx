import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchCampers } from '../../redux/campersOps';
import {
  selectCampers,
  clearItemsState,
  selectTotal,
  selectIsLoading,
} from '../../redux/campersSlice';
import { setFilter, selectNameFilter } from '../../redux/filtersSlice';
import FiltersForm from '../../components/FiltersForm/FiltersForm';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const campers = useSelector(selectCampers);
  const total = useSelector(selectTotal);
  const isLoading = useSelector(selectIsLoading);
  const filtersFromStore = useSelector(selectNameFilter);
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1); // fix - create slice for ui

  useEffect(() => {
    console.log('hello');
    const fetchCampersLocal = async () => {
      try {
        await dispatch(fetchCampers({ p: 1, l: 5 }));
      } catch (e) {
        console.log(e);
      }
    };
    fetchCampersLocal();

    return () => {
      console.log('bye');
      // test - if nedded here
      dispatch(clearItemsState());
    };
  }, [dispatch]);

  // ? move to component
  const onSubmit = async filters => {
    dispatch(setFilter(filters.name));

    dispatch(clearItemsState());
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
