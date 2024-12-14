import CityWeather from "@/components/CityWeather";
import Forecast from "@/components/Forecast/Forecast";
import TodayTemp from "@/components/TodayTemp";
import { Card } from "@/components/ui/card";
import WeatherDetails from "@/components/WeatherDetails/WeatherDetails";
import { useParams } from "react-router-dom";

const CityPage = () => {
  const params = useParams();

  const { cityName } = params;

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between">
        <h3 className="text-2xl font-bold tracking-wider">{cityName}</h3>
      </div>
      <div className="grid gap-4">
        {[CityWeather, TodayTemp].map((Component, index) => (
          <Card key={index} className="col-span-1 p-4 min-h-56">
            <Component />
          </Card>
        ))}
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {[WeatherDetails, Forecast].map((Component, index) => (
          <Card key={index} className="grid h-48 p-4">
            <Component />
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CityPage;
