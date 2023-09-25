import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";


const MainLayout = () => {
    return (
        <div className=" mx-2 my-4 md:mx-8 md:my-6 lg:mx-32 lg:my-10">
            <Nav></Nav>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;