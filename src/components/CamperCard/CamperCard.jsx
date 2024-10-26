import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectIsFavorite } from '../../redux/selectors';
import { addFavorite, removeFavorite } from '../../redux/favoritesSlice';

const CamperCard = ({ camper }) => {
  const dispatch = useDispatch();
  const isFavorite = useSelector(selectIsFavorite(camper.id));
  const navigate = useNavigate();

  const handleNavigation = id => {
    navigate(`/catalog/${id}`);
  };

  const handleFavoriteClick = id => {
    if (isFavorite) {
      dispatch(removeFavorite(id));
    } else {
      dispatch(addFavorite(id));
    }
  };

  return (
    <div>
      <button onClick={() => handleFavoriteClick(camper.id)}>
        {isFavorite ? 'YES - fav' : 'NO'}
      </button>
      {camper.name} - {camper.id}
      <button onClick={() => handleNavigation(camper.id)}>Show more</button>
    </div>
  );
};

export default CamperCard;
