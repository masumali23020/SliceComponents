import React from "react";
import { Link } from "react-router-dom";
import iphone from "../../assets/day2/iphone.png";

const Iphone = () => {
  return (
    <div className="max-w-screen-xl mx-auto ">
      <Link to="https://www.figma.com/design/4mdFSaC3LWjsd9frnZoynR/E-commerce-Cards---Figma-Freebie-(Community)?node-id=23-11517&node-type=text&m=dev" className="text-start text-3xl ">I phone card  design </Link>

      <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10 justify-center items-center m-5">
        {[1,2,3].map((item,index) => (
          <div key={index} className=" bg-[#16192C] w-[350px] h-[513px] rounded-2xl ">
          {/* card  */}
  
          <div className="flex flex-col justify-center items-center ">
            <div className="mt-8 mb-5">
              <p className="text-[#FFF] text-lg font-normal leading-[30px]">
                Iphone 12 mini
              </p>
              <h2 className="text-[#FFF] text-4xl font-bold leading-normal ">
                Best offer
              </h2>
            </div>
  
            <div className="flex justify-center items-center">
              <div className="h-[236px] w-[223px] relative">
                <img
                  className="object-cover w-full h-full"
                  src={iphone}
                  alt="iphone"
                />
              </div>
            </div>
            <p className="text-[#F2F2F2] text-[10px] font-normal mt-3 mb-2">
              Time left
            </p>
  
            <div className="flex  flex-col space-y-3">
              <div className="flex space-x-4">
                <button className="bg-[#E4ECF7] w-[34px] h-[26px]  flex-col items-center rounded-md px-[2px] py-1.5 text-[10px]  font-bold ">
                  <span className="text-[#505780]">02</span>
                </button>
                <button className="bg-[#E4ECF7] w-[34px] h-[26px]  flex-col items-center rounded-md px-[2px] py-1.5 text-[10px]  font-bold ">
                  <span className="text-[#505780]">02</span>
                </button>
                <button className="bg-[#E4ECF7] w-[34px] h-[26px]  flex-col items-center rounded-md px-[2px] py-1.5 text-[10px]  font-bold ">
                  <span className="text-[#505780]">02</span>
                </button>
              </div>
              <button className="w-full px-2 py-3  bg-[#4C6FFF] text-[#FFF] text-[14px] font-semibold rounded-lg ">
                Only $399.00
              </button>
            </div>
          </div>
        </div>
        ))}

      </div>

      
    </div>
  );
};

export default Iphone;
