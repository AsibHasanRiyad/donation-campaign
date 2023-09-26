// /* eslint-disable react/prop-types */
//           import { useState } from "react";

//           const Banner = ({setSearchResults}) => {
//             const [input, setInput] = useState("");
//   const donationCards = (value) => {
//     fetch("data.json")
//       .then((res) => res.json())
//       .then((data) => {
//         const results = data.filter((card) =>
//           card?.category?.toLowerCase().includes(value?.toLowerCase())
//         );
//         setSearchResults(results);
//             });
//         };
//         const handleSearchText = (value) => {
//           setInput(value);
//         };
//         const handleSearch = (e) => {
//           donationCards(input);
//           e.preventDefault();
//         };
//             return (
//               <div>
//                 <div
//                   className="hero h-[55vh] my-4 rounded-md"
//                   style={{
//                     backgroundImage:
//                       "url(https://i.ibb.co/Zh5sbYc/Screenshot-2023-09-25-at-2-45-24-PM-overlay-1.png)",
//                   }}
//                 >
//                   <div className=" hero-overlay rounded-md bg-opacity-0"></div>
//                   <div className="hero-content text-center text-neutral-content">
//                     <div className="">
//                       <h1 className="mb-5 text-lg md:text-2xl lg:text-4xl text-black font-bold">I Grow By Helping People In Need</h1>
//                       <div className=" btn-group btn-group-horizontal border border-gray-400 rounded-lg">
//                           <input onChange={(e) => handleSearchText(e.target.value)} className=" sm:px-1  md:px-4 rounded-s-md text-rose-500" type="text" placeholder="Search Here.........." />
//                           <button onClick={handleSearch}   className=" btn text-white bg-rose-500">Search</button>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             );
//           };

//           export default Banner;
