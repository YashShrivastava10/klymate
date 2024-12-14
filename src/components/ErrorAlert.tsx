import { TriangleAlert } from "lucide-react";
import { Alert, AlertTitle, AlertDescription } from "./ui/alert";

const ErrorAlert = ({ error }: { error: string }) => {
  return (
    <Alert variant="destructive" className="h-fit">
      <TriangleAlert className="w-4 h-4" />
      <AlertTitle>Location Error</AlertTitle>
      <AlertDescription>{error}</AlertDescription>
    </Alert>
  );
};

export default ErrorAlert;
