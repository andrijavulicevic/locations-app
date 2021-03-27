import { useState } from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';

const LocationCard = ({
  location,
}) => {
  const [showIcon, setShowIcon] = useState(false);
  return (
    <div className="relative border rounded-sm shadow-sm px-5 py-4 bg-gray-50 hover:bg-gray-100 cursor-pointer" onMouseOverCapture={() => setShowIcon(true)} onMouseLeave={() => setShowIcon(false)}>
      <h3 className="font-semibold text-lg mb-3">{location.name}</h3>
      <div className="mb-1">
        <p className="inline-flex items-center">
          <span className="mr-2"><img src="/images/Users.svg" alt="users" /></span>
          {location.userCount}
          {' '}
          Users
        </p>
      </div>
      <div className="mb-1">
        <p className="inline-flex items-center">
          <span className="mr-2"><img src="/images/Timezone.svg" alt="users" /></span>
          {format(new Date(location.createdAt), 'h:mmaaa (OOOO)')}
        </p>
      </div>
      <div className="mb-1">
        <p className="inline-flex items-center">
          <span className="mr-2"><img src="/images/Views.svg" alt="users" /></span>
          {location.views}
          {' '}
          Views
        </p>
      </div>
      <span className={`${showIcon ? 'block' : 'hidden'} absolute top-3 right-3 flex justify-center items-center w-8 h-8 bg-white rounded-full`}>
        <img src="/images/Edit.svg" alt="users" />
      </span>
    </div>
  );
};

LocationCard.propTypes = {
  location: PropTypes.shape({
    name: PropTypes.string.isRequired,
    userCount: PropTypes.number.isRequired,
    createdAt: PropTypes.string.isRequired,
    views: PropTypes.number.isRequired,
  }).isRequired,
};

export default LocationCard;
