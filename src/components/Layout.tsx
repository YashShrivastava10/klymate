import { Outlet } from "react-router-dom";
import Header from "./Header";

const Layout = () => {
  return (
    <div className="bg-gradient-to-br from-background to-muted">
      <Header />
      <main className="container h-full px-4 py-8 mx-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
