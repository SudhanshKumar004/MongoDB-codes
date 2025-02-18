import { Outlet } from "react-router-dom";
import TopMenu from "./components/topNav";
import Footer from "./components/Footer";

const Layout=()=>{
    return(
        <>
          <TopMenu />
           
             <Outlet />

          <Footer />
        
        </>
    )
}

export default Layout;