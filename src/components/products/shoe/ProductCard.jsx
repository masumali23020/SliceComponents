import React from "react";
import { Link } from "react-router-dom";

const ProductCard = () => {
  return (
    <div className="bg-white  mx-auto p-10 md:py-12 px-0 md:p-8 md:px-0">
      <div className="text-3xl flex justify-start mb-2 text-slate-400">
        <Link to="https://www.uidux.com/funita-shopify-store-design-for-furniture-products-for-figma-and-adobe-xd">
          Card item 2{" "}
        </Link>
      </div>
      <div className="w-full p-5 md:p-0 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-10 items-start bg-gray-50 ">
        {[1, 2, 3, 4].map((item, ind) => (
          <div
            key={ind}
            className="p-5  transform duration-500 cursor-pointer group"
          >
            <div className="relative flex justify-center ">
              <div className="w-full flex justify-center items-center mb-6">
                <img
                  className="bg-cover h-[170px] w-[200px]"
                  src="https://www.dropbox.com/s/mlor33hzk73rh0c/x14423.png?dl=1"
                  alt=""
                />
              </div>

              {/* Button is initially hidden, becomes visible on hover of parent */}
              <button className="absolute -bottom-2  p-2 px-6 bg-blue-700 text-white rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Add To Cart
              </button>
            </div>
            <div className="mt-5 space-y-2">
              <h2 className="font-semibold text-green-400 text-sm">
                $29.99{" "}
                <span className="ml-2 font-normal text-gray-500 text-sm">
                  <del>$305</del>
                </span>
              </h2>
              <h1 className="text-base font-normal text-[#3B3B3B]">Soft Plushy Cushion Chair</h1>
              <div className="space-x-1 flex justify-center ">
                {/* Stars for rating */}
               {[1,2,3,4].map((item, ind) => (
                  <div key={ind}>
                  <svg
               className="w-4 h-4 mx-px fill-current text-yellow-500"
               xmlns="http://www.w3.org/2000/svg"
               viewBox="0 0 14 14"
             >
               <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
             </svg>
               </div>
               ))}
               
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
