import React from "react";
import img from "../../assets/shoes/Shoe2.png";
import copy1 from "/assets/copy1.png";
const ShoeOverLay = () => {
  return (
    <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
        <h2 className="text-3xl flex justify-start mb-2 text-slate-400" >Shoe overlay card </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">
        <div className="rounded overflow-hidden shadow-lg">
          <a href="#"></a>
          <div className="relative">
            <a href="#">
              <img className="w-full" src={img} alt="shoe2" />
              <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
            </a>

            <div className="w-full absolute bottom-0 left-0 px-4   flex flex-col justify-center items-center space-y-3 py-4">
              <p className="text-white text-[16px] font-bold">Off-White</p>
              <p className="text-[#E3E3E3] text-[14px] font-normal">
                ODSY-1000 low-top sneakers
              </p>

              <div className="flex justify-center space-x-6">
                <p className="text-white text-[16px] font-bold">$38.00</p>
                <del className="text-[#E3E3E3] text-[16px] font-bold">$38.00</del>
              </div>
            </div>

        
                <div className="absolute top-6 p-2 w-full flex justify-between items-center">
                  <button className="bg-slate-700 px-2  py-2 rounded-lg shadow-custom text-white text-sm hover:text-gray-100">
                    New Season
                  </button>
                  <button className="w-12 h-12 p-1 hover:border-slate-200 hover:border flex justify-center items-center">
                    <img
                      className="w-full h-full bg-cover"
                      src={copy1}
                      alt="Copy"
                    />
                  </button>
                </div>
        
          </div>
        </div>
        <div className="rounded overflow-hidden shadow-lg">
          <a href="#"></a>
          <div className="relative">
            <a href="#">
              <img className="w-full" src={img} alt="shoe2" />
              <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
            </a>

            <div className="w-full absolute bottom-0 left-0 px-4   flex flex-col justify-center items-center space-y-3 py-4">
              <p className="text-white text-[16px] font-bold">Off-White</p>
              <p className="text-[#E3E3E3] text-[14px] font-normal">
                ODSY-1000 low-top sneakers
              </p>

              <div className="flex justify-center space-x-6">
                <p className="text-white text-[16px] font-bold">$38.00</p>
                <del className="text-[#E3E3E3] text-[16px] font-bold">$38.00</del>
              </div>
            </div>

        
                <div className="absolute top-6 p-2 w-full flex justify-between items-center">
                  <button className="bg-gradient-color-3 px-2 hover:text-gray-100 py-2 rounded-lg shadow-custom text-white text-sm">
                    New Season
                  </button>
                  <button className="w-12 h-12 p-1 hover:border-slate-200 hover:border flex justify-center items-center">
                    <img
                      className="w-full h-full bg-cover"
                      src={copy1}
                      alt="Copy"
                    />
                  </button>
                </div>
        
          </div>
        </div>
        <div className="rounded overflow-hidden shadow-lg">
          <a href="#"></a>
          <div className="relative">
            <a href="#">
              <img className="w-full" src={img} alt="shoe2" />
              <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
            </a>

            <div className="w-full absolute bottom-0 left-0 px-4   flex flex-col justify-center items-center space-y-3 py-4">
              <p className="text-white text-[16px] font-bold">Off-White</p>
              <p className="text-[#E3E3E3] text-[14px] font-normal">
                ODSY-1000 low-top sneakers
              </p>

              <div className="flex justify-center space-x-6">
                <p className="text-white text-[16px] font-bold">$38.00</p>
                <del className="text-[#E3E3E3] text-[16px] font-bold">$38.00</del>
              </div>
            </div>

        
                <div className="absolute top-6 p-2 w-full flex justify-between items-center">
                  <button className="bg-gradient-color-3 px-2 hover:text-gray-100 py-2 rounded-lg shadow-custom text-white text-sm">
                    New Season
                  </button>
                  <button className="w-12 h-12 p-1 hover:border-slate-200 hover:border flex justify-center items-center">
                    <img
                      className="w-full h-full bg-cover"
                      src={copy1}
                      alt="Copy"
                    />
                  </button>
                </div>
        
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoeOverLay;
