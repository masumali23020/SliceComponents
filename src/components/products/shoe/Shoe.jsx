import React from "react";
// import shoe1 from "../../assets/shoes/shoe1.png";
import shoe1 from "/assets/shoes/sho.png";

const Shoe = () => {
  return (

    <div className="mt-5">
    <h1 className="text-start text-3xl text-gray-700">Overlay Card </h1>
    <div className="flex space-x-2 mt-5 ">
      {[1,2,3,4].map((item, ind) => (
        <div key={ind} className=" flex w-[300px] flex-col items-start rounded-[8px] shadow-custom1 bg-white relative overflow-hidden">
        <div className="relative">
          <div className="h-[248px] w-full">
            <img src={shoe1} alt="Off-White ODSY-1000 low-top sneakers" />
          </div>

          <div className="w-full absolute top-6 p-2  flex justify-between items-center">
            <button className="bg-[linear-gradient(90deg,#8A5AE2_0%,#C24BE7_100%)] rounded-md px-1 py-2  shadow-custom text-white text-sm">
              New Season
            </button>

            <button className=" hover:border-slate-200 hover:border flex justify-center items-center">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="Interface / Bookmark">
                  <path
                    id="Vector"
                    d="M6 7.2002V16.6854C6 18.0464 6 18.7268 6.20412 19.1433C6.58245 19.9151 7.41157 20.3588 8.26367 20.2454C8.7234 20.1842 9.28964 19.8067 10.4221 19.0518L10.4248 19.0499C10.8737 18.7507 11.0981 18.6011 11.333 18.5181C11.7642 18.3656 12.2348 18.3656 12.666 18.5181C12.9013 18.6012 13.1266 18.7515 13.5773 19.0519C14.7098 19.8069 15.2767 20.1841 15.7364 20.2452C16.5885 20.3586 17.4176 19.9151 17.7959 19.1433C18 18.7269 18 18.0462 18 16.6854V7.19691C18 6.07899 18 5.5192 17.7822 5.0918C17.5905 4.71547 17.2837 4.40973 16.9074 4.21799C16.4796 4 15.9203 4 14.8002 4H9.2002C8.08009 4 7.51962 4 7.0918 4.21799C6.71547 4.40973 6.40973 4.71547 6.21799 5.0918C6 5.51962 6 6.08009 6 7.2002Z"
                    stroke="#252B42"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                   
                  />
                </g>
              </svg>
            </button>
          </div>

        </div>
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)23.96%,rgba(0,0,0,0.60)71.87%)]"></div>

        <div className="relative z-50 w-full flex flex-col justify-center items-center space-y-4 p-[24px]">
          <p className="text-white text-[16px] font-bold">Off-White</p>
          <p className="text-[#E3E3E3] text-[14px] font-normal">
            ODSY-1000 low-top sneakers
          </p>

          <div className="flex justify-center space-x-3">
            <p className="text-[#FFF] text-[16px] font-bold">$38.00</p>
            <del className="text-[#E3E3E3] text-[14px] font-medium">$38.00</del>
          </div>
        </div>
      </div>
      ))}
    </div>
   </div>
  );
};

export default Shoe;
