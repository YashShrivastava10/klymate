import CityWeather from "@/components/CityWeather";
import Favourites from "@/components/Favourites";
import Forecast from "@/components/Forecast/Forecast";
import TodayTemp from "@/components/TodayTemp";
import { Button } from "@/components/ui/button";
import WeatherDetails from "@/components/WeatherDetails/WeatherDetails";
import useCurrentLocation from "@/hooks/useCurrentLocation";
import { RefreshCcw } from "lucide-react";

const WeatherDashboard = () => {
  const {
    coordinates,
    isFetching: isLocationFetching,
    error: locationError,
  } = useCurrentLocation();
  const isLoading = false;

  console.log(coordinates, isLocationFetching, locationError);

  if (isLocationFetching) return <div>Loading....</div>;

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4">
        <Favourites />
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex justify-between">
          <h3 className="text-xl font-bold tracking-wider">My Location</h3>
          <Button variant="outline" size="icon" disabled={!!locationError}>
            <RefreshCcw
              className={`${
                isLoading
                  ? "animate-spin pointer-events-none cursor-not-allowed"
                  : "cursor-pointer pointer-events-auto"
              }`}
            />
          </Button>
        </div>
        <div className="grid gap-4 lg:grid-cols-[2fr_3fr]">
          <CityWeather error={locationError} />
          <TodayTemp error={locationError} />
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <WeatherDetails error={locationError} />
          <Forecast error={locationError} />
        </div>
      </div>
    </div>
  );
};

export default WeatherDashboard;
