import { useEffect, useState } from "react";
import EachDonation from "../../components/EachDonation/EachDonation";


const Donation = () => {
    const [donations, setDonations] = useState([]);
    const [noData, setNoData] = useState('')
    const [showAll, setShowALl] = useState(false)
    useEffect(() =>{
        const donation = JSON.parse(localStorage.getItem('donation') );
        if (donation) {
            setDonations(donation)
        }
        else{
            setNoData('No Data Found ')
        }
    },[])

    return (
        <div>
            {
                noData? <p className="flex h-[80vh] text-4xl font-bold justify-center items-center">{noData}</p> : 
               <div className=" grid grid-cols-1 lg:grid-cols-2 gap-7 mt-20" >
                     {
                        showAll? donations.map(don => <EachDonation don={don} key={don.campaign_id}></EachDonation>) :
                        donations.slice(0,4).map(don => <EachDonation don={don} key={don.campaign_id}></EachDonation>)
                     }
               </div>
            }
            <div className=" flex justify-center py-5">
            {
                donations.length > 4 && <button onClick={() => setShowALl(!showAll)} className=" btn px-4 py-2 text-white bg-[#009444]">
                    {
                        showAll? 'Show Less' : 'Show ALl'
                    }
                </button>
            }
            </div>
        </div>
    );
};

export default Donation;