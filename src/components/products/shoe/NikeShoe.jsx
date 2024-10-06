import React from "react";
import { Link } from "react-router-dom";

const NikeShoe = () => {
  return (
    <div className="bg-gray-900 py-16">
      <div className="container mx-auto px-4">
        <div className="text-3xl font-bold text-white mb-8">

        <Link to="https://www.figma.com/design/qaPknthBVRM93en1jn2VkY/Figma-Interactive-Product-Card-UI-Design-(Community)?node-id=6-90&node-type=frame&m=dev" >
          Introducing Our Latest Product
        </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          {[1, 2, 3].map((item, ind) => (
            <div
              key={ind}
              className="bg-white rounded-lg shadow-lg p-8 relative hover:bg-gray-100"
            >
              <div className="relative overflow-hidden">
                <img
                  className="object-cover w-full h-48 rounded-md"
                  src="https://images.unsplash.com/photo-1542291026-7eec264c27ff"
                  alt="Product"
                />
              </div>
              <div className=" flex justify-between items-center mt-3 ">
                <h3 className="text-lg font-bold text-gray-900 w-full text-start">
                  Product Name
                </h3>
                <div className="relative group w-full">
                  {/* Button for adding */}
                  <button className="opacity-100 group-hover:opacity-0 bg-gray-900 text-white py-2 px-4 rounded-full font-bold transition-opacity absolute -top-3 right-0 transform duration-150">
                    +
                  </button>
                  {/* Button for "Add to" */}
                  <button className=" absolute -top-3 right-0  opacity-0 group-hover:opacity-100 transition-opacity bg-gray-800 text-white font-medium leading-7 py-2 px-3 rounded-full text-[17px] flex items-center transition-transform  duration-150  ease-in ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="white"
                      className="mr-2"
                      width={12}
                      height={12}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                    Add to
                  </button>
                </div>
              </div>
              <div className="flex flex-col items-start space-y-2 justify-between mt-4">
                <p className="text-gray-400 font-normal text-sm t">Nike</p>
                <span className="text-gray-800 font-medium text-lg ">
                  $29.99
                </span>
              </div>

              <div className="flex space-x-2 mt-7">
                <div className=" h-8 w-8 rounded-full bg-[#F9A2BA]"></div>
                <div className=" h-8 w-8 rounded-full bg-[#A8F3E6]"></div>
                <div className=" h-8 w-8 rounded-full bg-[#63CEA7;]"></div>
                <div className=" h-8 w-8 rounded-full bg-[#18C2F8]"></div>
              </div>

             
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NikeShoe;
