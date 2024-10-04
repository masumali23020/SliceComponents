import React from "react";
import img from "../../assets/day2/axe.png";

const UiKit = () => {
  return (
    <div className="max-w-screen-xl mx-auto bg-black overflow-hidden mt-10 p-5 h-[600px]">
      <h1 className="text-start text-3xl mb-3 text-slate-300">
        I uiKit card design{" "}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10 justify-center items-center ">
        {/* card  */}
       {[1,2,3].map((item, ind) =>(
         <div key={ind} className="relative w-[350px] h-[434px]">
         <svg
           xmlns="http://www.w3.org/2000/svg"
           width="381"
           height="484"
           viewBox="0 0 381 484"
           fill="none"
         >
           <g filter="url(#filter0_d_1_18)">
             <path
               d="M0 25C0 19.4771 4.47715 15 10 15L340 15C345.523 15 350 19.4772 350 25L350 439C350 444.523 345.523 449 340 449L104 449C98.4771 449 94 444.523 94 439L94 370.5C94 364.977 89.5229 360.5 84 360.5H10C4.47715 360.5 0 356.023 0 350.5L0 25Z"
               fill="white"
             />
           </g>
           <defs>
             <filter
               id="filter0_d_1_18"
               x="-19"
               y="0"
               width="400"
               height="484"
               filterUnits="userSpaceOnUse"
               colorInterpolationFilters="sRGB"
             >
               <feFlood floodOpacity="0" result="BackgroundImageFix" />
               <feColorMatrix
                 in="SourceAlpha"
                 type="matrix"
                 values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                 result="hardAlpha"
               />
               <feOffset dx="4" dy="8" />
               <feGaussianBlur stdDeviation="10" />
               <feColorMatrix
                 type="matrix"
                 values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
               />
               <feBlend
                 mode="normal"
                 in2="BackgroundImageFix"
                 result="effect1_dropShadow_1_18"
               />
               <feBlend
                 mode="normal"
                 in="SourceGraphic"
                 in2="effect1_dropShadow_1_18"
                 result="shape"
               />
             </filter>
           </defs>
         </svg>

         {/* card  */}
         <div className="flex p-5 flex-col justify-center items-center absolute top-0 left-0 ">
           <div className="h-[200px] w-[170px] -rotate-30">
             <img className="w-full h-full bg-cover" src={img} alt="UiKit" />
           </div>

           <h2 className="text-[#000] text-2xl uppercase font-medium mt-3 mb-2 text-left">
             Lorem ipsum dolor sit amet consectetur
           </h2>
           <p className="text-[#808080] text-[14px] font-normal self-start">
             Identifier number
           </p>

           <div className=" flex flex-col self-end items-center p-2">
               <del className="text-[#808080] text-lg font-medium"> 999 ₽</del>
               <h2 className="text-[#941B0C] text-[43px] font-medium">699 ₽</h2>
           </div>
         </div>

         {/* icon  */}
         <div className=" absolute bottom-0 left-0 z-30 flex gap-2 justify-center items-center p-3">
           <svg
             xmlns="http://www.w3.org/2000/svg"
             width="28"
             height="31"
             viewBox="0 0 28 31"
             fill="none"
           >
             <path
               d="M6 2L2 7.33333V26C2 26.7072 2.28095 27.3855 2.78105 27.8856C3.28115 28.3857 3.95942 28.6667 4.66667 28.6667H23.3333C24.0406 28.6667 24.7189 28.3857 25.219 27.8856C25.719 27.3855 26 26.7072 26 26V7.33333L22 2H6Z"
               stroke="white"
               strokeWidth="2.5"
               strokeLinecap="round"
               strokeLinejoin="round"
             />
             <path
               d="M2 7.33337H26"
               stroke="white"
               strokeWidth="2.5"
               strokeLinecap="round"
               strokeLinejoin="round"
             />
             <path
               d="M19.3333 12.6666C19.3333 14.0811 18.7714 15.4377 17.7712 16.4379C16.771 17.4381 15.4145 18 14 18C12.5855 18 11.2289 17.4381 10.2288 16.4379C9.22856 15.4377 8.66666 14.0811 8.66666 12.6666"
               stroke="white"
               strokeWidth="2.5"
               strokeLinecap="round"
               strokeLinejoin="round"
             />
           </svg>

           {/* plus  */}
           <svg
             xmlns="http://www.w3.org/2000/svg"
             width="14"
             height="13"
             viewBox="0 0 14 13"
             fill="none"
           >
             <path
               d="M7 1.66675V11.0001"
               stroke="white"
               strokeWidth="2.5"
               strokeLinecap="round"
               strokeLinejoin="round"
             />
             <path
               d="M2.33334 6.33337H11.6667"
               stroke="white"
               strokeWidth="2.5"
               strokeLinecap="round"
               strokeLinejoin="round"
             />
           </svg>
         </div>
       </div>
       ))}
      </div>
    </div>
  );
};

export default UiKit;
