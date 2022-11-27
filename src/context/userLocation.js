import React, { useContext, useEffect, useState } from 'react';

const UserLocationContext = React.createContext();

export function useUserLocationContextConsumer() {
  return useContext(UserLocationContext);
}

export function UserLocationContextProvider({ children }) {
  const [position, setPosition] = useState({
    latitude: '',
    longitude: '',
  });
  const [permission, setPermission] = useState(false);

  const getLocation = () => {
    navigator.permissions
      .query({ name: 'geolocation' })
      .then(function (PermissionStatus) {
        if (PermissionStatus.state === 'granted') {
          setPermission(true);
        } else {
          setPermission(false);
        }
      });
    navigator.geolocation.getCurrentPosition((pos) => {
      setPosition({
        ...position,
        latitude: pos.coords.latitude,
        longitude: pos.coords.longitude,
      });
    });
  };

  useEffect(() => {
    if (navigator.geolocation) getLocation();
  }, []);

  return (
    <UserLocationContext.Provider
      value={{
        latitude: position.latitude,
        longitude: position.longitude,
        isPosition: !!position.latitude && !!position.longitude,
        permission: permission,
      }}
    >
      {children}
    </UserLocationContext.Provider>
  );
}

export default UserLocationContext;
