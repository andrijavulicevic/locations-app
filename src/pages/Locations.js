import { useState, useEffect, useContext } from 'react';

import { API_URL } from '../config';
import { LocationsContext } from '../context/LocationsContext';

import Spinner from '../components/Spinner';
import LocationCard from '../components/LocationCard';

const Locations = () => {
  const { locations, setLocations } = useContext(LocationsContext);

  const [isLoading, setIsLoading] = useState(true);
  useEffect(async () => {
    const response = await fetch(API_URL);
    const locationsResponse = await response.json();
    setIsLoading(false);
    setLocations(locationsResponse);
  }, []);

  return (
    <div>
      {isLoading && <Spinner />}
      <h1>All locations</h1>

      {!!locations.length && (
        <div className="flex flex-wrap">
          {locations.map((location) => (
            <div key={location.id} className="w-full md:w-1/3 xl:w-1/5 p-3">
              <LocationCard location={location} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Locations;
