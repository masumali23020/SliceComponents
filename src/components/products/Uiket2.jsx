import React from "react";
import { Link } from "react-router-dom";
import img from "../../assets/day2/axe.png";

const UiKit2 = () => {
  return (
    <div className="max-w-7xl mx-auto bg-gray-500 overflow-hidden mt-10 p-5 h-[600px]">
      <Link
        to="https://www.figma.com/community/file/817313486715931025"
        className="text-start text-3xl mb-3 text-slate-300"
      >
        I uiKit2 card design{" "}
      </Link>

      <div className="max-w-sm md:max-w-2xl h-[279px] flex flex-col bg-white rounded-md  px-5">
        <div className=" flex justify-between  gap-5  h-[219px] ">
          <div className="h-[215px] w-[262px] rotate[-28.903deg]">
            <img className="w-full h-full bg-cover" src={img} alt="UiKit" />
          </div>
          <div className="w-full py-8">
            <p className="font-medium text-start text-xl mb-2 ">
              Lorem ipsum dolor sit amet consectetur{" "}
            </p>
            <div className="w-full flex flex-row ">
              {[1, 2, 3, 4].map((item, ind) => (
                <div key={ind} className="mt-[6px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                      fill="#FFD100"
                      stroke="#FFD100"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              ))}
              <span className="text-sm font-normal italic ml-4 text-[#808080] mt-2">
                126
              </span>
            </div>
            <div className=" flex justify-between mt-[30px]">
              <p className="text-[#808080] text-sm font-normal">
                Identifier number
              </p>
              <p className="text-lg font-normal">999 ₽</p>
            </div>
            <h1 className="text-[43px] text-end text-[#941B0C] font-medium">
              699 ₽
            </h1>
          </div>
        </div>
        <div className="flex justify-between items-center w-full mt-3">
          <div className="w-1/2 flex space-x-2 justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M16 3H1V16H16V3Z"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16 8H20L23 11V16H16V8Z"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M5.5 21C6.88071 21 8 19.8807 8 18.5C8 17.1193 6.88071 16 5.5 16C4.11929 16 3 17.1193 3 18.5C3 19.8807 4.11929 21 5.5 21Z"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M18.5 21C19.8807 21 21 19.8807 21 18.5C21 17.1193 19.8807 16 18.5 16C17.1193 16 16 17.1193 16 18.5C16 19.8807 17.1193 21 18.5 21Z"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>Order delivery</span>
          </div>
          <div className="w-1/2 flex space-x-2 justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
            >
              <path
                d="M6.5 2L3.5 6V20C3.5 20.5304 3.71071 21.0391 4.08579 21.4142C4.46086 21.7893 4.96957 22 5.5 22H19.5C20.0304 22 20.5391 21.7893 20.9142 21.4142C21.2893 21.0391 21.5 20.5304 21.5 20V6L18.5 2H6.5Z"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3.5 6H21.5"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16.5 10C16.5 11.0609 16.0786 12.0783 15.3284 12.8284C14.5783 13.5786 13.5609 14 12.5 14C11.4391 14 10.4217 13.5786 9.67157 12.8284C8.92143 12.0783 8.5 11.0609 8.5 10"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>Order delivery</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UiKit2;
