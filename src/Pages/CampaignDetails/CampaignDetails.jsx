import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import CampaignDetail from "../../components/CampaignDetail/CampaignDetail";



const CampaignDetails = () => {
    const { id } = useParams();
    const details = useLoaderData();
    // console.log(details);
    const [campaignDetails, setCampaignDetails] = useState([]);
    useEffect(() => {
      const campaign = details.find((detail) => detail.campaign_id == id);
      setCampaignDetails(campaign);
    }, [details, id]);
    return (
        <div className=" mt-10 mb-5">
            <CampaignDetail campaignDetails={campaignDetails} ></CampaignDetail>
        </div>
    );
};

export default CampaignDetails;