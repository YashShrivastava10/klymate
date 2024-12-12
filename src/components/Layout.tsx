import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="bg-gradient-to-br from-background to-muted">
      <Header />
      <main className="container h-screen px-4 py-8 mx-auto">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
