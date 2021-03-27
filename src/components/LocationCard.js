import PropTypes from 'prop-types';

const LocationCard = ({
  location,
}) => (
  <div className="border rounded-sm p-3 bg-gray-50 hover:bg-gray-100 cursor-pointer">
    <h3>{location.name}</h3>
    <p>{location.userCount}</p>
    <p>{location.createdAt}</p>
  </div>
);

LocationCard.propTypes = {
  location: PropTypes.shape({
    name: PropTypes.string.isRequired,
    userCount: PropTypes.number.isRequired,
    createdAt: PropTypes.string.isRequired,
  }).isRequired,
};

export default LocationCard;
