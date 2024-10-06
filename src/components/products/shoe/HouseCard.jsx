import React from "react";
import { Link } from "react-router-dom";

const HouseCard = () => {
  return (
   <div>
    <div className=" text-start text-3xl m-5">
        <Link to="https://realtor-v2.vercel.app/">House Card </Link>
    </div>

    <ul className="max-w-7xl mx-auto sm:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
   {[1,2,3].map((item, ind) => (
       <li key={ind} className="max-w-sm relative flex flex-col justify-between m-[10px] items-center bg-[#fff]  shadow-md hover:shadow-xl rounded-md overflow-hidden transition-shadow">
       <a className="contents" href="/category/rent/5jJRxroFmj4Z8Tge09EP">
         <img
           src="https://firebasestorage.googleapis.com/v0/b/realtor-clone-practice-4b8d0.appspot.com/o/images%2Fv4LobB5N9JRACk1Jlm0iixjiDJg1-out21.png-798bccc8-761e-4545-94b8-927faffeda36?alt=media&amp;token=bde690b5-5ea7-4f6a-86e2-a4ef3eb845fa"
           alt="A rare mixed zoned complex in East Perth"
           className="h-[170px] w-full object-cover hover:scale-105 transition-transform duration-200 ease-in"
           loading="lazy"
         />
         <time
           dateTime="1657668174001"
           className="absolute top-2 left-2 bg-[#3377cc] uppercase text-xs font-semibold rounded-md text-white px-2 py-1 shadow-lg"
         >
           2 years ago
         </time>
         <div className="p-[10px] w-full">
           <div className="flex items-center space-x-1">
             <div>
               <svg
                 xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 20 20"
                 fill="currentColor"
                 aria-hidden="true"
                 className="h-4 w-4 text-green-600"
               >
                 <path
                   fillRule="evenodd"
                   d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                   clipRule="evenodd"
                 ></path>
               </svg>
             </div>
             <p className="text-sm truncate font-normal opacity-70">
               19/190 Hay Street, East Perth, WA 6004
             </p>
           </div>
           <div className="flex flex-col justify-start items-start space-y-2 mt-3">
             <p className="text-[#1d3557] font-semibold text-lg truncate">
               A Rare Mixed Zoned Complex
             </p>
             <p className="text-[#457b9d] text-base font-medium">
               $1,500 / Month
             </p>
           </div>
           <div className="flex  justify-start items-start  space-x-3 mt-2">
             <p className="text-[#1d3557] text-sm font-bold">2 Beds</p>
             <p className="text-[#1d3557] text-sm font-bold">2 Baths</p>
           </div>
         </div>
       </a>
     </li>
   ))}
    </ul>
   </div>
  );
};

export default HouseCard;
