import { Card } from "./ui/card";

type TodayTempProps = {
  error: string | null;
};
const TodayTemp = ({ error }: TodayTempProps) => {
  return (
    <Card className="h-48 col-span-1 p-4">
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

export default TodayTemp;
