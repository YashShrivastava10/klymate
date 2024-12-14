import { Card } from "../ui/card";

type ForecastProps = {
  error: string | null;
};

const Forecast = ({ error }: ForecastProps) => {
  return (
    <Card className="grid h-64 p-4">
      {error ? (
        <h3 className="font-bold text-center md:text-xl text-destructive">
          {error}
        </h3>
      ) : (
        <></>
      )}
    </Card>
  );
};

export default Forecast;
