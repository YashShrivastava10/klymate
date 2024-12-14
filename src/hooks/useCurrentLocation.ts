import { useEffect, useState } from "react";

type Coordinate = {
  lat: number;
  lon: number;
};

type Geolocation = {
  coordinates: Coordinate | null;
  error: string | null;
  isFetching: boolean;
};

const useCurrentLocation = () => {
  const [location, setLocation] = useState<Geolocation>({
    coordinates: null,
    isFetching: true,
    error: null,
  });

  useEffect(() => {
    getCurrentLocation();
  }, []);

  const getCurrentLocation = () => {
    if (!navigator.geolocation) {
      console.error("Geolocation is not supported by this browser.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        setLocation({
          coordinates: { lat: latitude, lon: longitude },
          isFetching: false,
          error: null,
        });
      },
      (error) => {
        const errorMessageMap: Record<number, string> = {
          [error.PERMISSION_DENIED]:
            "Location permission denied. Please enable location access.",
          [error.POSITION_UNAVAILABLE]: "Location information is unavailable.",
          [error.TIMEOUT]: "Location request timed out.",
        };

        const errorMessage =
          errorMessageMap[error.code] || "An unknown error occurred.";

        setLocation({
          coordinates: null,
          isFetching: false,
          error: errorMessage,
        });
      },
      {
        enableHighAccuracy: true,
      }
    );
  };

  return { ...location, getCurrentLocation };
};

export default useCurrentLocation;
