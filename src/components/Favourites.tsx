import { Loader2, X } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const favorites = [
  {
    cityName: "Delhi",
    cityNation: "IN",
    temp: 17,
    tempStatus: "Clear Sky",
  },
  {
    cityName: "Hyderabad",
    cityNation: "IN",
    temp: 17,
    tempStatus: "Clear Sky",
  },
  {
    cityName: "Pune",
    cityNation: "IN",
    temp: 17,
    tempStatus: "Clear Sky",
  },
  {
    cityName: "Bangalore",
    cityNation: "IN",
    temp: 17,
    tempStatus: "Clear Sky",
  },
  {
    cityName: "Lucknow",
    cityNation: "IN",
    temp: 17,
    tempStatus: "Clear Sky",
  },
  {
    cityName: "New York",
    cityNation: "US",
    temp: 17,
    tempStatus: "Snowflake",
  },
  {
    cityName: "Shibuya",
    cityNation: "JP",
    temp: 17,
    tempStatus: "Sunny",
  },
];

const Favourites = () => {
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000);
  }, []);

  const handleX = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    console.log("x clicked");
  };

  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-xl font-bold tracking-wider">Favourites</h3>
      <ScrollArea className="w-full pb-4">
        <div className="flex gap-4">
          {favorites.map((item) => (
            <Card
              key={item.cityName}
              className="relative flex items-center justify-around gap-4 p-4 cursor-pointer min-w-64"
              onClick={() => navigate(`/city/${item.cityName}`)}
            >
              {isLoading ? (
                <Loader2 className="w-3 h-3 animate-spin" />
              ) : (
                <>
                  <div className="flex items-center gap-4">
                    <div className="w-3 bg-white rounded-full aspect-square" />
                    <div className="flex flex-col justify-center">
                      <label className="font-bold">{item.cityName}</label>
                      <label className="text-sm">{item.cityNation}</label>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <label className="font-bold">{item.temp}&deg;</label>
                    <label className="text-sm">{item.tempStatus}</label>
                  </div>
                </>
              )}
              <Button
                variant="ghost"
                className="absolute w-6 h-6 p-0 rounded-full right-1 top-1"
                disabled={isLoading}
                onClick={handleX}
              >
                <X />
              </Button>
            </Card>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
};

export default Favourites;
