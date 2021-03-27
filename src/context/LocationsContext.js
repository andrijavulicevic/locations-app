import { useState, createContext } from 'react';
import PropTypes from 'prop-types';

const LocationsContext = createContext();

const LocationsStore = ({ children }) => {
  const [locations, setLocations] = useState([]);
  return (
    <LocationsContext.Provider value={{
      locations, setLocations,
    }}
    >
      {children}
    </LocationsContext.Provider>
  );
};

LocationsStore.propTypes = {
  children: PropTypes.element.isRequired,
};

export { LocationsContext, LocationsStore };
