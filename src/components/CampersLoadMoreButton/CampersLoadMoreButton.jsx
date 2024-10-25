import { useDispatch, useSelector } from 'react-redux';
import { fetchMoreCampers } from '../../redux/campersOps';
import { setCurrentPage } from '../../redux/campersSlice';
import {
  selectCampers,
  selectTotal,
  selectCurrentPage,
  selectIsLoading,
  selectFilters,
} from '../../redux/selectors';
import Button from '../Button/Button';
import css from './CampersLoadMoreButton.module.css';

const CampersLoadMoreButton = () => {
  const dispatch = useDispatch();
  const campers = useSelector(selectCampers);
  const total = useSelector(selectTotal);
  const isLoading = useSelector(selectIsLoading);
  const filtersFromStore = useSelector(selectFilters);
  const cuttentPage = useSelector(selectCurrentPage);

  const onMore = async () => {
    const nextPage = cuttentPage + 1;
    dispatch(setCurrentPage(nextPage));
    await dispatch(fetchMoreCampers({ page: nextPage, limit: 5, params: filtersFromStore }));
  };

  if (campers.length >= total) {
    return null;
  }

  return (
    <div className={css['campers-load-more-btn-holder']}>
      <Button isLoading={isLoading} skin="secondary" onClick={onMore}>
        Load More
      </Button>
    </div>
  );
};

export default CampersLoadMoreButton;
