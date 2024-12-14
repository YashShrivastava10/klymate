import { Card } from "./ui/card";

type CityWeatherProps = {
  error: string | null;
};
const CityWeather = ({ error }: CityWeatherProps) => {
  return (
    <Card className="col-span-1 p-4 min-h-56">
      {error ? (
        <h3 className="font-bold text-center md:text-xl text-destructive">
          {error}
        </h3>
      ) : (
        <div className="flex flex-col h-full gap-4">
          <div className="text-2xl font-bold">Anuppur</div>
          <div className="flex justify-around">
            <div className="flex flex-col gap-4">
              <div className="flex items-start">
                <label className="font-bold text-7xl">23&deg;</label>
                <div className="flex flex-col">
                  <label>Feels like 22&deg;</label>
                  <div className="flex justify-between">
                    <label>23&deg;</label>
                    <label>23&deg;</label>
                  </div>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-5 h-5 bg-blue-300"></div>
                  <div className="flex flex-col">
                    <label>Humidity</label>
                    <label>15%</label>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-5 h-5 bg-blue-300"></div>
                  <div className="flex flex-col">
                    <label>Humidity</label>
                    <label>15%</label>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center h-full gap-6">
              <div className="w-20 bg-red-200 rounded-full aspect-square" />
              <label>Clear Sky</label>
            </div>
          </div>
        </div>
      )}
    </Card>
  );
};

export default CityWeather;
