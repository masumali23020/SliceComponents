import React from "react";

const CustomColorCard = () => {
  return (
    <div className="mt-5">
    <h1 className="text-start text-3xl text-gray-700">Watch Card </h1>
<div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10 items-start">
    <section className="bg-purple-50 text-center transform duration-500 cursor-pointer rounded-lg overflow-hidden shadow-lg">
      <div className="h-auto max-w-full">
        <img
          className="object-cover h-48 w-full" // Adjust the height and width as needed
          src="https://images.othoba.com/images/thumbs/0580732_sport-silicon-belt-colourfull-desing-analog-watch.jpeg"
          alt="Soft Plushy Cushion Chair"
        />
      </div>

      <div className="flex flex-col space-y-2 p-4">
        <h2 className="font-semibold">Genaring</h2>
        <h1 className="text-lg">Soft Plushy Cushion Chair</h1>
        <h1 className="text-xl text-emerald-600">$60</h1>
      </div>

      <div className="space-x-1 flex justify-center mt-5">
        {/* Stars for rating */}
        {[...Array(3)].map((_, index) => (
          <svg
            key={index}
            className="w-4 h-4 mx-px fill-current text-orange-600"
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

      <button className="w-full mt-5 p-2 px-6 bg-purple-500 text-white rounded-md transition-opacity duration-300">
        Add To Cart
      </button>
    </section>
  </div>
 </div>
  );
};

export default CustomColorCard;
