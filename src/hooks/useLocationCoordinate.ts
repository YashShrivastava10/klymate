import { getCoordinates } from "@/api/getCoordinates";
import { QUERY_KEY } from "@/api/utils";
import { useQuery } from "@tanstack/react-query";

const useLocationCoordinate = (cityName: string) => {
  return useQuery({
    queryKey: QUERY_KEY.search(cityName),
    queryFn: () => getCoordinates(cityName),
    enabled: cityName.length >= 3,
  });
};

export default useLocationCoordinate;
