import React from "react";
import { Link } from "react-router-dom";

const ProductCard = () => {
  return (
    <div className="mt-5 mb-10 bg-slate-500 p-5">
      {/* title  */}
      <div className="flex justify-between items-center">
        <h1 className="text-start text-3xl text-gray-700">Products Card </h1>

        <Link
          to="https://www.uidux.com/funita-shopify-store-design-for-furniture-products-for-figma-and-adobe-xd"
          target="_blank"
        >
          <span className="text-gray-900 text-lg underline hover:text-blue-400">
            link
          </span>{" "}
        </Link>
      </div>

      <div className="max-w-3xl mx-auto  grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 xl:grid-cols-5 2xl:grid-cols-6 gap-1 items-start bg-white">
        {[1, 2, 3, 4, 5].map((item, ind) => (
          <div key={ind} className="p-1 bg-[#FFFFFF] w-[145px] h-[222px]">
            <div className="flex justify-center items-center ">
              <div className=" flex justify-center items-center mb-6 relative w-[122px] h-[140px] px-2 py-3 transform duration-500 cursor-pointer group ">
                <img
                  className="bg-cover h-[100px] w-[120px] z-50"
                  src="https://www.dropbox.com/s/mlor33hzk73rh0c/x14423.png?dl=1"
                  alt=""
                />
                <div className=" bg-slate-100 w-full h-full absolute top-0 left-0 z-0 rounded-md "></div>

                <button className="absolute bottom-0 left-4 text-[11px]   bg-blue-700 text-white rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-2 py-1 self-center">
                  <span className="text-white font-bold">+</span> Add To Cart
                </button>
              </div>

              {/* Button is initially hidden, becomes visible on hover of parent */}
            </div>
            <div className=" space-y-1">
              <h2 className="font-semibold text-green-400 text-[8px]">
                $29.99{" "}
                <span className="ml-2 font-normal text-gray-500 text-[8px]">
                  <del>$305</del>
                </span>
              </h2>
              <h1 className="text-[10px] font-bold text-[#252424]">
                Soft Plushy Cushion Chair
              </h1>
              <div className="space-x-1 flex justify-center ">
                {/* Stars for rating */}
                {[1, 2, 3, 4].map((item, ind) => (
                  <div key={ind}>
                    <svg
                      className="w-2 h-2 mx-px fill-current text-yellow-500"
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
