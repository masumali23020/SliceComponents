import React from "react";
import { Link } from "react-router-dom";

const CustomColorCard = () => {
  return (
    <div className="mt-5">
      <Link to="https://dribbble.com/shots/3674970/attachments/3674970-Product-Card-Design?mode=media" className="text-start text-3xl text-gray-700 w-full">Watch Card</Link>
      <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-10">
        {[1, 2, 3,4].map((item, ind) => (
          <div
            key={ind}
            className="bg-purple-50 text-center transform duration-500 cursor-pointer rounded-lg shadow-lg "
          >
            <div className="flex justify-center items-center rounded-md mt-5">
              <img
                className="bg-cover w-[200px] h-[170px] "
                src="https://timeaccess-store.com/cdn/shop/files/GA-2100TLS-8ADRF_700x.jpg?v=1727965054"
              />
            </div>

            <div className="flex flex-col space-y-2 py-2">
              <h2 className="font-semibold text-base tracking-widest">
                Genaring
              </h2>
              <h1 className="text-[12px]  text-[#C3C3C3]">
                Soft Plushy Cushion Chair a beautiful {" "}
              </h1>
              <h1 className="text-xl text-emerald-600">$60</h1>
            </div>

            <div className="space-x-1 flex justify-center mb-3">
              {/* Stars for rating */}
              {[...Array(3)].map((_, index) => (
                <svg
                  key={index}
                  className="w-4 h-4 mx-px fill-current text-yellow-500"
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
                  className="w-4 h-4 mx-px fill-current text-gray-300"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 14 14"
                >
                  <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
                </svg>
              ))}
            </div>

            <button className=" w-full  p-2 px-5 bg-[#0995BD] text-white rounded-md transition-opacity duration-300">
              Add To Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomColorCard;
