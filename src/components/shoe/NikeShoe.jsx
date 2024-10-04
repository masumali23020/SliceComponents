import React from "react";

const NikeShoe = () => {
  return (
    <div className="bg-gray-900 py-16">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-white mb-8">
        Introducing Our Latest Product
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="bg-white rounded-lg shadow-lg p-8 relative hover:bg-gray-100">
          <div className="relative overflow-hidden">
            <img
              className="object-cover w-full h-48 rounded-md"
              src="https://images.unsplash.com/photo-1542291026-7eec264c27ff"
              alt="Product"
            />
          </div>
          <div className="flex justify-between items-center mt-2 ">
            <h3 className="text-xl font-bold text-gray-900">Product Name</h3>
            <div className="relative group ">
              {/* Button for adding */}
              <button className="opacity-0 group-hover:opacity-100 bg-gray-900 text-white py-2 px-4 rounded-full font-bold transition-opacity">
                +
              </button>
              {/* Button for "Add to" */}
              <button className=" absolute top-0 right-0  opacity-100 group-hover:opacity-0 transition-opacity bg-gray-800 text-white font-bold py-1.5 px-3 rounded-full text-[12px] flex items-center">
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
          <div className="flex flex-col items-start space-y-3 justify-between mt-4 p-4">
            <p className="text-gray-400 font-normal text-sm">Nike</p>
            <span className="text-gray-800 font-medium text-lg">$29.99</span>
          </div>
        </div>
        {/* Repeat for other products */}
        {/* Card 2 */}
        <div className="bg-white rounded-lg shadow-lg p-8 relative hover:bg-gray-100">
          <div className="relative overflow-hidden">
            <img
              className="object-cover w-full h-48 rounded-md"
              src="https://images.unsplash.com/photo-1542291026-7eec264c27ff"
              alt="Product"
            />
          </div>
          <div className="flex justify-between items-center mt-2">
            <h3 className="text-xl font-bold text-gray-900">Product Name</h3>
            <div className="relative">
              <button className="opacity-100 hover:opacity-0 bg-gray-900 text-white py-2 px-4 rounded-full font-bold transition-opacity">
                +
              </button>
              <button className="absolute opacity-0 hover:opacity-100 transition-opacity bg-gray-800 text-white font-bold py-1.5 px-3 rounded-full text-[12px] flex items-center">
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
          <div className="flex flex-col items-start space-y-3 justify-between mt-4 p-4">
            <p className="text-gray-400 font-normal text-sm">Nike</p>
            <span className="text-gray-800 font-medium text-lg">$29.99</span>
          </div>
        </div>
        {/* Card 3 */}
        <div className="bg-white rounded-lg shadow-lg p-8 relative hover:bg-gray-100">
          <div className="relative overflow-hidden">
            <img
              className="object-cover w-full h-48 rounded-md"
              src="https://images.unsplash.com/photo-1542291026-7eec264c27ff"
              alt="Product"
            />
          </div>
          <div className="flex justify-between items-center mt-2">
            <h3 className="text-xl font-bold text-gray-900">Product Name</h3>
            <div className="relative group">
              <button className="opacity-0 group-hover:opacity-100 bg-gray-900 text-white py-2 px-4 rounded-full font-bold transition-opacity">
                +
              </button>
              <button className="absolute opacity-100 group-hover:opacity-0 transition-opacity bg-gray-800 text-white font-bold py-1.5 px-3 rounded-full text-[12px] flex items-center">
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
          <div className="flex flex-col items-start space-y-3 justify-between mt-4 p-4">
            <p className="text-gray-400 font-normal text-sm">Nike</p>
            <span className="text-gray-800 font-medium text-lg">$29.99</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  );
};

export default NikeShoe;
