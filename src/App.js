import React from 'react';
import { UserLocationContextProvider } from './context/userLocation';
import SearchPlace from './pages/searchPlace';

const App = () => {
  return (
    <UserLocationContextProvider>
      <SearchPlace />
    </UserLocationContextProvider>
  );
};

export default App;
