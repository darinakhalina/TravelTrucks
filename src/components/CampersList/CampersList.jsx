import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectCampers, selectFavorites, selectIsLoading } from '../../redux/selectors';
import { addFavorite, removeFavorite } from '../../redux/favoritesSlice';
import Loader from '../Loader/Loader';

const CampersList = () => {
  const dispatch = useDispatch();
  const campers = useSelector(selectCampers);
  const isLoading = useSelector(selectIsLoading);
  const favorites = useSelector(selectFavorites);
  const navigate = useNavigate();

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

  if (isLoading && campers.length === 0) {
    return <Loader />;
  }

  if (campers.length === 0) {
    return <p className="text-md">We didn&apos;t find any campers that fit your search.</p>;
  }

  return (
    <>
      {campers.map(item => (
        <div key={item.id}>
          <button onClick={() => handleFavoriteClick(item.id)}>
            {favorites?.some(favoriteId => favoriteId === item.id) ? 'YES - fav' : 'NO'}
          </button>
          {item.name} - {item.id}
          <button onClick={() => handleNavigation(item.id)}>Show more</button>
        </div>
      ))}
      {isLoading && <Loader />}
    </>
  );
};

export default CampersList;
