import { LocationsStore } from './context/LocationsContext';

import Locations from './pages/Locations';

function App() {
  return (
    <LocationsStore>
      <div className="max-w-7xl h-screen flex mx-auto p-5">
        <Locations />
      </div>
    </LocationsStore>
  );
}

export default App;
