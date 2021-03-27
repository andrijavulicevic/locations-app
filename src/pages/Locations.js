import { useState, useEffect, useContext } from 'react';

import { API_URL } from '../config';

import Spinner from '../components/Spinner';
import { LocationsContext } from '../context/LocationsContext';

const Locations = () => {
  const { setLocations } = useContext(LocationsContext);

  const [isLoading, setIsLoading] = useState(true);
  useEffect(async () => {
    const response = await fetch(API_URL);
    const locations = await response.json();
    setIsLoading(false);
    setLocations(locations);
  }, []);

  return (
    <div>
      {isLoading && <Spinner />}
      <h1>All locations</h1>
    </div>
  );
};

export default Locations;
