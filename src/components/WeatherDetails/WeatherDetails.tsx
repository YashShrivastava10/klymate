import { Card } from "../ui/card";

type WeatherDetailsProps = {
  error: string | null;
};

const WeatherDetails = ({ error }: WeatherDetailsProps) => {
  return (
    <Card className="grid h-48 p-4">
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

export default WeatherDetails;
