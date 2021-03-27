import { LocationsStore } from './context/LocationsContext';

import Locations from './pages/Locations';

function App() {
  return (
    <LocationsStore>
      <div className="max-w-5xl h-screen mx-auto p-5">
        <Locations />
      </div>
    </LocationsStore>
  );
}

export default App;
