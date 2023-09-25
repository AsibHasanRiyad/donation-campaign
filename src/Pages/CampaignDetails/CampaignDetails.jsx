import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";


const CampaignDetails = () => {
    const {id} = useParams()
    const details = useLoaderData();
    // console.log(details);
    const [campaignDetails, setCampaignDetails] = useState([]);
    useEffect(()=>{
        const campaign = details.find(detail => detail.campaign_id == id)
        setCampaignDetails(campaign)
    },[details, id])
    const {
        campaign_id,
        category,
        title,
        category_bg_color,
        card_bg_color,
        text_button_bg_color,
        description,
        price,
        image_url,
      } = campaignDetails;
    return (
        <div className=" mt-10 mb-5">

                <div className="hero rounded h-[60vh]" style={{backgroundImage: `url(${image_url})`}}>
                <div className="hero-overlay bg-opacity-0"></div>
                <div className="">
                </div>
                </div>
                     <div className=" bottom-[92px] rounded p-5 relative hero-overlay bg-opacity-240">
                        <button style={{background: text_button_bg_color}} className=" px-6 py-3 text-xl font-semibold rounded-md text-white">Donate ${price}</button>
                     </div>
                <div>
                    <h1 className=" text-4xl font-bold mb-4">{title}</h1>
                    <p className=" text-base text-[#0B0B0B]">{description}</p>
                </div>
        </div>
    );
};

export default CampaignDetails;