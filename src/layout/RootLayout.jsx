import { Outlet, } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const RootLayout = ({ children }) => {
 

  return (
    <div>
      <Navbar />
       <main>{children}</main>
        <Outlet/>
      
      <Footer />
    </div>
  );
};

export default RootLayout;