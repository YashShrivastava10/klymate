type Coordinates = {
  lat: number;
  lon: number;
};

export const QUERY_KEY = {
  search: (cityName: string) => ["city", cityName] as const,
  weather: (coords: Coordinates) => ["weather", coords] as const,
};
