/* eslint-disable react/prop-types */
import Swal from "sweetalert2";

      
      const CampaignDetail = ({campaignDetails}) => {
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
        const handelDonate = () => {
            const DonationArray = [];
            const donatedItem = JSON.parse(localStorage.getItem("donation"));
            if (!donatedItem) {
            DonationArray.push(campaignDetails);
            localStorage.setItem("donation", JSON.stringify(DonationArray));
            Swal.fire("Congratulations!", `You Have Donated $${price}`);
            } 
            else {
            const isExist = donatedItem.find(item => item.campaign_id === campaign_id);
            if (isExist) {
               return Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "You Have Already Donated on this Campaign!",
                });
            } else {
                DonationArray.push(...donatedItem, campaignDetails);
                localStorage.setItem("donation", JSON.stringify(DonationArray));
                Swal.fire("Congratulations!", `You Have donated $${price}`);
            }
            }
        };
        
  return <div>
    <div className="hero rounded h-[60vh]" style={{backgroundImage: `url(${image_url})`}}>
                <div className="hero-overlay bg-opacity-0"></div>
                <div className="">
                </div>
                </div>
                     <div className=" bottom-[92px] rounded p-5 relative hero-overlay bg-opacity-240">
                        <button onClick={handelDonate} style={{background: text_button_bg_color}} className=" px-6 py-3 text-xl font-semibold rounded-md text-white">Donate ${price}</button>
                     </div>
                <div>
                    <h1 className=" text-4xl font-bold mb-4">{title}</h1>
                    <p className=" text-base text-gray-500">{description}</p>
                </div>
  </div>;
};

export default CampaignDetail;
