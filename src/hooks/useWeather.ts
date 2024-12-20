import { getWeather } from "@/api/getWeather";
import { QUERY_KEY } from "@/api/utils";
import { useQuery } from "@tanstack/react-query";

type Coordinates = {
  lat: number;
  lon: number;
};

const useWeather = (coordinates: Coordinates) => {
  return useQuery({
    queryKey: QUERY_KEY.weather(coordinates),
    queryFn: () => getWeather(coordinates),
  });
};

export default useWeather;
