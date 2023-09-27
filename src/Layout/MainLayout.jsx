import { Outlet, useLocation } from "react-router-dom";
import Nav from "../components/Nav";
import { useEffect } from "react";


const MainLayout = () => {
    const loc = useLocation();
    // console.log(loc);
    useEffect(() =>{
        // console.log(loc.pathname);
        if (loc.pathname === '/') {
            document.title = 'Home'
        }else{
            document.title = ` ${loc.pathname.toUpperCase().replace('/', ' ')}`
        }
        if (loc.state) {
            document.title = ` ${loc.state.toUpperCase().replace('/', ' ')}`
        }
    },[loc.pathname, loc.state])
    return (
        <div className=" mx-2 my-4 md:mx-8 md:my-6 lg:mx-14 xl:mx-32 lg:my-10">
            <Nav></Nav>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;