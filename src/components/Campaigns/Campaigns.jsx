/* eslint-disable react/prop-types */
import Campaign from "../Campaign/Campaign";


const Campaigns = ({campaigns}) => {
    return (
        <div className="mt-5 md:mt-10 lg:mt-20  grid gap-5 grid-cols-1 md:grid-cols-2  lg:grid-cols-4">
            {
                campaigns?.map(campaign => <Campaign key={campaign.campaign_id} campaign={campaign}></Campaign> )
            }
        </div>
    );
};

export default Campaigns;