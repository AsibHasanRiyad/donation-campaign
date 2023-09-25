import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../Pages/Home";
import Donation from "../Pages/Donation/Donation";
import Statistics from "../Pages/Statistics/Statistics";
import CampaignDetails from "../Pages/CampaignDetails/CampaignDetails";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";


const myCreatedRoute = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element: <Home></Home>,
                loader: () => fetch('/data.json'),
                
            },
            {
                path:'/details/:id',
                element: <CampaignDetails></CampaignDetails>,
                loader: () => fetch('/data.json'),
                
            },
            {
                path:'/donation',
                element: <Donation></Donation>
            },
            {
                path:'/statistics',
                element: <Statistics></Statistics>
            },
        ]
    }
])

export default myCreatedRoute;