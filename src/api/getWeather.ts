import { fetchData } from "./fetchData";

type Coordinates = {
  lat: number;
  lon: number;
};

export const getWeather = (coordinates: Coordinates) => {
  const url = `${import.meta.env.VITE_KLYMATE_BASE}/weather?lat=${
    coordinates.lat
  }&lon=${coordinates.lon}&appId=${import.meta.env.VITE_KLYMATE_API_KEY}`;
  return fetchData(url);
};
