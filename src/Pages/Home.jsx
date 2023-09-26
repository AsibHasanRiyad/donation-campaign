import { useLoaderData } from "react-router-dom";
import Campaigns from "../components/Campaigns/Campaigns";
import { useState } from "react";



const Home = () => {
    const campaigns = useLoaderData();
    const [search , setSearch] = useState('');
    const handelSearchBtn = (e) =>{
      e.preventDefault()
      setSearch(e.target.search.value);
    }
    // console.log(search);


    return (
      <div>
        <div
        className="hero h-[55vh] my-4 rounded-md"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/Zh5sbYc/Screenshot-2023-09-25-at-2-45-24-PM-overlay-1.png)",
        }}
      >
        <div className=" hero-overlay rounded-md bg-opacity-5"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="">
            <h1 className="mb-5 text-lg md:text-2xl lg:text-4xl text-black font-bold">I Grow By Helping People In Need</h1>
            <div className=" ">
                {/* <input onChange={(e) => setSearch(e.target.value)} className=" sm:px-1  md:px-4 rounded-s-md text-rose-500" type="text" placeholder="Search Here.........." />
                <button  className=" btn text-white bg-rose-500">Search</button> */}
                <form onSubmit={handelSearchBtn} className=" btn-group btn-group-horizontal border border-gray-400 rounded-lg">
                  <input className=" text-[#FF444A] rounded-l-lg px-0 md:px-2" type="text" name="search" id="" placeholder="Search Here......" />
                  <input className=" btn bg-[#FF444A] text-white" type="submit" value="Search" />
                </form>
            </div>
          </div>
        </div>
      </div>
                <Campaigns search={search} campaigns={campaigns} ></Campaigns>
      </div>


    );
};

export default Home;