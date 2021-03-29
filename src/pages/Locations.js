import { useState, useEffect, useContext } from 'react';

import { API_URL } from '../config';
import { LocationsContext } from '../context/LocationsContext';

import Spinner from '../components/Spinner';
import LocationCard from '../components/LocationCard';
import Modal from '../components/Modal';
import LocationDetails from '../components/LocationDetails';

const Locations = () => {
  const { locations, setLocations } = useContext(LocationsContext);

  const [isLoading, setIsLoading] = useState(true);
  useEffect(async () => {
    const response = await fetch(API_URL);
    const locationsResponse = (await response.json()).map((loc) => ({
      ...loc,
      views: 0,
    }));

    setIsLoading(false);
    setLocations(locationsResponse);
  }, []);

  const [selectedLocation, setSelectedLocation] = useState(null);
  const onLocationViewedHandler = (locationId) => {
    const updatedLocations = locations.map((loc) => {
      if (loc.id === locationId) {
        const updatedLocation = { ...loc };
        updatedLocation.views += 1;
        setSelectedLocation(updatedLocation);
        return updatedLocation;
      }
      return loc;
    });
    setLocations(updatedLocations);
  };

  const onLocationDetailsCloseHandler = () => {
    setSelectedLocation(null);
  };

  return (
    <div>
      {isLoading && <Spinner />}
      <div className="py-4 mb-4 border-b">
        <p className="text-gray-600">All locations</p>
        <h1 className="text-xl font-bold">Acme locations</h1>
      </div>

      {!!locations.length && (
        <div className="flex flex-wrap px-5">
          {locations.map((location) => (
            <div
              key={location.id}
              className="w-full md:w-1/2 lg:w-1/4 2xl:w-1/5 pb-5 pr-5"
            >
              <LocationCard
                location={location}
                onLocationViewed={onLocationViewedHandler}
              />
            </div>
          ))}
        </div>
      )}

      {selectedLocation && (
        <Modal
          isOpen={!!selectedLocation}
          onClose={onLocationDetailsCloseHandler}
        >
          <div className="w-80">
            <h3 className="font-semibold text-lg mb-3">
              {selectedLocation.name}
            </h3>
            <LocationDetails
              userCount={selectedLocation.userCount}
              createdAt={selectedLocation.createdAt}
              views={selectedLocation.views}
            />
            <div className="mt-4 mb-1">
              <p className="font-semibold">Description</p>
              <p>{selectedLocation.description}</p>
            </div>
            <div className="flex justify-end mt-6">
              <button
                type="button"
                className="inline-flex items-center px-4 py-2 shadow-sm text-sm font-medium rounded-full text-white bg-green-500 hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-400"
                onClick={onLocationDetailsCloseHandler}
              >
                Done
              </button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Locations;
