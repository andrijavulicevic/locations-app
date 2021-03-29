import PropTypes from 'prop-types';

import { formatDate } from '../utils';

const LocationDetails = ({
  userCount,
  createdAt,
  views,
}) => (
  <>
    <div className="mb-1">
      <p className="inline-flex items-center">
        <span className="mr-2 opacity-60"><img src="/images/Users.svg" alt="users" /></span>
        {userCount}
        {' '}
        Users
      </p>
    </div>
    <div className="mb-1">
      <p className="inline-flex items-center">
        <span className="mr-2 opacity-60"><img src="/images/Timezone.svg" alt="users" /></span>
        {formatDate(createdAt)}
      </p>
    </div>
    <div className="mb-1">
      <p className="inline-flex items-center">
        <span className="mr-2 opacity-60"><img src="/images/Views.svg" alt="users" /></span>
        {views}
        {' '}
        Views
      </p>
    </div>
  </>
);

LocationDetails.propTypes = {
  userCount: PropTypes.number.isRequired,
  createdAt: PropTypes.string.isRequired,
  views: PropTypes.number.isRequired,
};

export default LocationDetails;
