import React from "react";
import copy from "../../assets/copy.png";
import shoe1 from "../../assets/shoes/shoe1.png";

const Shoe = () => {
  return (
   <div className="flex space-x-2">
     <div className=" flex w-[300px] flex-col items-start rounded-[8px] shadow-custom1 bg-white">
      <div className="relative">
        <div className="h-[248px] w-full">
          <img src={shoe1} alt="Off-White ODSY-1000 low-top sneakers" />
        </div>

        <div className="absolute top-6 p-2 w-full flex justify-between items-center">
          <button className="bg-gradient-color-3 px-1 py-2 rounded-lg shadow-custom text-white text-sm">New Season</button>
          
          <button className="w-12 h-12 p-1 hover:border-slate-200 hover:border flex justify-center items-center">
            <img className="w-full h-full bg-cover" src={copy} alt="Copy" />
          </button>
        </div>
        
      </div>

      <div className="w-full flex flex-col justify-center items-center space-y-4 p-[24px]">
        <p className="text-[#252B42] text-[16px] font-bold">Off-White</p>
        <p className="text-[#737373] text-[14px] font-normal">ODSY-1000 low-top sneakers</p>

        <div className="flex justify-center space-x-6">
          <p className="text-[#252B42] text-[16px] font-bold">$38.00</p>
          <p className="text-[#737373] text-[16px] font-bold">$38.00</p>
        </div>
      </div>
    </div>
     <div className=" flex w-[300px] flex-col items-start rounded-[8px] shadow-[0px 2px 4px 0px rgba(0, 0, 0, 0.10)] bg-white">
      <div className="relative">
        <div className="h-[248px] w-full">
          <img src={shoe1} alt="Off-White ODSY-1000 low-top sneakers" />
        </div>

        <div className="absolute top-6 p-2 w-full flex justify-between items-center">
          <button className="bg-gradient-color-3 px-1 py-2 rounded-lg shadow-custom text-white text-sm">New Season</button>
          <button className="w-12 h-12 p-1 hover:border-slate-200 hover:border flex justify-center items-center">
            <img className="w-full h-full bg-cover" src={copy} alt="Copy" />
          </button>
        </div>
        
      </div>

      <div className="w-full flex flex-col justify-center items-center space-y-4 p-[24px]">
        <p className="text-[#252B42] text-[16px] font-bold">Off-White</p>
        <p className="text-[#737373] text-[14px] font-normal">ODSY-1000 low-top sneakers</p>

        <div className="flex justify-center space-x-6">
          <p className="text-[#252B42] text-[16px] font-bold">$38.00</p>
          <p className="text-[#737373] text-[16px] font-bold">$38.00</p>
        </div>
      </div>
    </div>
     <div className=" flex w-[300px] flex-col items-start rounded-[8px] shadow-[0px 2px 4px 0px rgba(0, 0, 0, 0.10)] bg-white">
      <div className="relative">
        <div className="h-[248px] w-full">
          <img src={shoe1} alt="Off-White ODSY-1000 low-top sneakers" />
        </div>

        <div className="absolute top-6 p-2 w-full flex justify-between items-center">
          <button className="bg-gradient-color-3 px-1 py-2 rounded-lg shadow-custom text-white text-sm">New Season</button>
          <button className="w-12 h-12 p-1 hover:border-slate-200 hover:border flex justify-center items-center">
            <img className="w-full h-full bg-cover" src={copy} alt="Copy" />
          </button>
        </div>
        
      </div>

      <div className="w-full flex flex-col justify-center items-center space-y-4 p-[24px]">
        <p className="text-[#252B42] text-[16px] font-bold">Off-White</p>
        <p className="text-[#737373] text-[14px] font-normal">ODSY-1000 low-top sneakers</p>

        <div className="flex justify-center space-x-6">
          <p className="text-[#252B42] text-[16px] font-bold">$38.00</p>
          <p className="text-[#737373] text-[16px] font-bold">$38.00</p>
        </div>
      </div>
    </div>
     <div className=" flex w-[300px] flex-col items-start rounded-[8px] shadow-[0px 2px 4px 0px rgba(0, 0, 0, 0.10)] bg-white">
      <div className="relative">
        <div className="h-[248px] w-full">
          <img src={shoe1} alt="Off-White ODSY-1000 low-top sneakers" />
        </div>

        <div className="absolute top-6 p-2 w-full flex justify-between items-center">
          <button className="bg-gradient-color-3 px-1 py-2 rounded-lg shadow-custom text-white text-sm">New Season</button>
          <button className="w-12 h-12 p-1 hover:border-slate-200 hover:border flex justify-center items-center">
            <img className="w-full h-full bg-cover" src={copy} alt="Copy" />
          </button>
        </div>
        
      </div>

      <div className="w-full flex flex-col justify-center items-center space-y-4 p-[24px]">
        <p className="text-[#252B42] text-[16px] font-bold">Off-White</p>
        <p className="text-[#737373] text-[14px] font-normal">ODSY-1000 low-top sneakers</p>

        <div className="flex justify-center space-x-6">
          <p className="text-[#252B42] text-[16px] font-bold">$38.00</p>
          <p className="text-[#737373] text-[16px] font-bold">$38.00</p>
        </div>
      </div>
    </div>
   </div>
  );
};

export default Shoe;
