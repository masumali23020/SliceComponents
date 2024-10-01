import React from "react";

const NikeShoe = () => {
  return (
    <div className="bg-gray-900 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-8">
          Introducing Our Latest Product
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* card  */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="relative overflow-hidden">
              <img
                className="object-cover w-full h-full rounded-md"
                src="https://images.unsplash.com/photo-1542291026-7eec264c27ff"
                alt="Product"
              />
            </div>
            <div className="flex justify-between items-center p-4">
              <h3 className="text-xl font-bold text-gray-900">Product Name</h3>
              <button className="bg-gray-900 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 ">
                +
              </button>
            </div>

            <div className="flex flex-col items-start space-y-3 justify-between mt-4 p-4">
                <p className="text-gray-400 font-normal text-sm">Nike</p>
              <span className="text-gray-800 font-medium text-lg">$29.99</span>
            </div>
          </div>
            {/* card  */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="relative overflow-hidden">
              <img
                className="object-cover w-full h-full rounded-md"
                src="https://images.unsplash.com/photo-1542291026-7eec264c27ff"
                alt="Product"
              />
            </div>
            <div className="flex justify-between items-center p-4">
              <h3 className="text-xl font-bold text-gray-800">Product Name</h3>
              <button className="bg-gray-900 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800">
                +
              </button>
            </div>

            <div className="flex flex-col items-start space-y-3 justify-between mt-4 p-4">
                <p className="text-gray-400 font-normal text-sm">Nike</p>
              <span className="text-gray-800 font-medium text-lg">$29.99</span>
            </div>
          </div>
            {/* card  */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="relative overflow-hidden">
              <img
                className="object-cover w-full h-full rounded-md"
                src="https://images.unsplash.com/photo-1542291026-7eec264c27ff"
                alt="Product"
              />
            </div>
            <div className="flex justify-between items-center p-4">
              <h3 className="text-xl font-bold text-gray-900">Product Name</h3>
              <button className="bg-gray-900 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800">
                +
              </button>
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
