import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import Campaigns from "../components/Campaigns/Campaigns";


const Home = () => {
    const campaigns = useLoaderData();
    // console.log(campaigns);
    return (
        <div>
           <Banner></Banner>
           <Campaigns campaigns={campaigns} ></Campaigns>
        </div>
    );
};

export default Home;