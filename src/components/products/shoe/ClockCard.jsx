import React from "react";
import { Link } from "react-router-dom";

const ClockCard = () => {
  return (
    <div className="mt-5 mb-10">
      {/* title  */}
      <div className="flex justify-between items-center">
        <h1 className="text-start text-3xl text-gray-700">Clock </h1>

        <Link
          to="https://dribbble.com/shots/3674970/attachments/3674970-Product-Card-Design?mode=media"
          target="_blank"
        >
          <span className="text-gray-900 text-lg underline hover:text-blue-400">
            link
          </span>{" "}
        </Link>
      </div>

      <div className=" grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-10">
        {[1,2].map((item, ind) => (
          <div
            key={ind}
            className="w-[205px] h-[310px] bg-[#FFFFFF] text-center transform duration-500 cursor-pointer shadow-lg relative p-1"
          >
            <div className=" w-[170px] h-[135px] flex justify-center items-center">
              <img
                className="bg-cover w-full h-full"
                src="https://timeaccess-store.com/cdn/shop/files/GA-2100TLS-8ADRF_700x.jpg?v=1727965054"
              />
            </div>

            <div className="flex flex-col justify-center items-center space-y-[6px] p-6 ">
              <h2 className="font-medium text-sm tracking-[2px] uppercase">
                Genaring
              </h2>
              <p className="text-[10px] text-center  text-[#8b8989] leading-3 tracking-tighter">
                Soft Plushy Cushion Chair a beautiful watch in {" "}
              </p>
              <h1 className="text-base text-emerald-600">$60</h1>

              <div className="space-x-1 flex justify-center mb-3">
                {/* Stars for rating */}
                {[...Array(3)].map((_, index) => (
                  <svg
                    key={index}
                    className="w-2 h-2 mx-px fill-current text-yellow-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 14 14"
                  >
                    <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
                  </svg>
                ))}
                {/* Empty stars for rating */}
                {[...Array(2)].map((_, index) => (
                  <svg
                    key={index}
                    className="w-2 h-2 mx-px fill-current text-gray-300"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 14 14"
                  >
                    <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
                  </svg>
                ))}
              </div>
            </div>

            <button className=" absolute bottom-0 left-0 w-full bg-[#0995BD] text-white  transition-opacity duration-300 px-4 py-3 uppercase text-[10px]">
              Add To Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClockCard;
