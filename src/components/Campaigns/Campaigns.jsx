/* eslint-disable react/prop-types */

import Campaign from "../Campaign/Campaign";


const Campaigns = ({campaigns, search}) => {
    
    console.log(search);

    return (
        <div className="mt-5 md:mt-10 lg:mt-20  grid gap-5 grid-cols-1 md:grid-cols-2  lg:grid-cols-4">
            {
                
                campaigns?.filter(item =>{
                    return search.toLowerCase() === '' ? item : 
                    item.category.toLowerCase().includes(search);
                }).map(campaign => <Campaign key={campaign.campaign_id} search={search}  campaign={campaign}></Campaign> )
            }

        </div>
    );
};

export default Campaigns;