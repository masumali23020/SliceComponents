import React from 'react';

const Gemini = () => {
  return (
   <div>
    <h1>
    Gemini use this card 
        </h1> 
        <div className="flex flex-col items-center justify-center w-full max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md">
      <div className="relative">
      <img
           src="https://firebasestorage.googleapis.com/v0/b/realtor-clone-practice-4b8d0.appspot.com/o/images%2Fv4LobB5N9JRACk1Jlm0iixjiDJg1-out21.png-798bccc8-761e-4545-94b8-927faffeda36?alt=media&amp;token=bde690b5-5ea7-4f6a-86e2-a4ef3eb845fa"
           alt="A rare mixed zoned complex in East Perth" className="h-full w-full  overflow-hidden" />
       <button className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 flex items-center justify-center">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6   
 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-.656-1.12-1.25-2.5-1.25L16 6.75c-1.375 0-2.5.6-2.5 1.25v5.5c0 .656 1.125 1.25 2.5 1.25l4.5 2.25c1.375 0 2.5-.6 2.5-1.25V8.25z" />
  </svg>
</button>
      </div>
      <h2 className="text-center mt-4">Apple iPhone 12 Pro, 128GB, Silver - Fully Unlocked</h2>
      <p className="text-center text-gray-500 text-sm">Sold by: Xciclopedia Store</p>
      <div className="flex justify-between mt-2">
        <p className="text-green-500 font-bold">$99.50</p>
        <p className="text-gray-400 line-through">$1128.00</p>
      </div>
    </div>

    <div className="flex flex-col items-center justify-center w-full max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md">
      <div className="relative">
        <img src="path/to/your/airpods-pro.jpg" alt="Apple AirPods Pro" className="h-60 w-60 rounded-full overflow-hidden" />
      </div>
      <h2 className="text-center mt-4">Apple AirPods Pro</h2>
      <p className="text-center text-gray-500 text-sm">Wireless Noise-Canceling Earbuds</p>
      <div className="flex justify-between mt-2">
        <p className="text-green-500 font-bold">$249.00</p>
        <p className="text-gray-400 line-through">$299.00</p>
      </div>
    </div>
   </div>

  );
};

export default Gemini;