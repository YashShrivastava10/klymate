import { fetchData } from "./fetchData";

export const getCoordinates = (city: string) => {
  const url = `${import.meta.env.VITE_KLYMATE_GEO}/direct?q=${city}&appId=${
    import.meta.env.VITE_KLYMATE_API_KEY
  }`;
  return fetchData(url);
};
