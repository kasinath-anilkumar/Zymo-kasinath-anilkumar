import { createContext, useContext, useState, useEffect } from "react";

export const LocationContext = createContext();

export const useLocationContext = () => {
  return useContext(LocationContext);
};

export const LocationProvider = ({ children }) => {
  const [location, setLocation] = useState(() => {
    return localStorage.getItem("location") || "Default";
  });

  const [locationShow, setLocationShow] = useState(false);

  useEffect(() => {
    if (location) {
      localStorage.setItem("location", location);
    }
  }, [location]);

  return (
    <LocationContext.Provider
      value={{
        location,
        setLocation,
        locationShow,
        setLocationShow,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};
