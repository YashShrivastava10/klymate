import { RouterProvider } from "react-router-dom";
import router from "./routes";
import { ThemeProvider } from "./providers/ThemeProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const client = new QueryClient();

const App = () => {
  return (
    <ThemeProvider>
      <QueryClientProvider client={client}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default App;
