import React from "react";

const TeamCard = () => {
  return (
    <div className="mt-5">
      <p className="text-red-400 text-3xl text-start">Teams card design</p>

      <div className="w-full  border border-border rounded ">
        <div className="p-8 mb-4 grid grid-cols-2 md:grid-cols-3 gap-4 w-full">
          {[1, 2, 3].map((item, ind) => (
            <div key={ind} className="w-full  rounded shadow-lg p-4">
              <div className="w-full flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    className="text-[2rem] p-2 rounded-full bg-[#3b9df828] text-[#3B9DF8] cursor-pointer"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 10C14.2091 10 16 8.20914 16 6 16 3.79086 14.2091 2 12 2 9.79086 2 8 3.79086 8 6 8 8.20914 9.79086 10 12 10ZM5.5 13C6.88071 13 8 11.8807 8 10.5 8 9.11929 6.88071 8 5.5 8 4.11929 8 3 9.11929 3 10.5 3 11.8807 4.11929 13 5.5 13ZM21 10.5C21 11.8807 19.8807 13 18.5 13 17.1193 13 16 11.8807 16 10.5 16 9.11929 17.1193 8 18.5 8 19.8807 8 21 9.11929 21 10.5ZM12 11C14.7614 11 17 13.2386 17 16V22H7V16C7 13.2386 9.23858 11 12 11ZM5 15.9999C5 15.307 5.10067 14.6376 5.28818 14.0056L5.11864 14.0204C3.36503 14.2104 2 15.6958 2 17.4999V21.9999H5V15.9999ZM22 21.9999V17.4999C22 15.6378 20.5459 14.1153 18.7118 14.0056 18.8993 14.6376 19 15.307 19 15.9999V21.9999H22Z"></path>
                  </svg>
                  <h3>Teams</h3>
                </div>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 16 16"
                  className="text-[2rem] p-2 rounded-full bg-[#3b9df828] text-[#3B9DF8] cursor-pointer"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"></path>
                </svg>
              </div>
              <img
                src="https://img.freepik.com/free-psd/3d-interface-website-presentation-mockup-isolated_359791-208.jpg"
                alt=""
                className="rounded-lg"
              />
              <h2 className="font-[600] text-[1.3rem] py-4">Simple Design</h2>
              <div className="w-full flex items-center justify-between relative">
                <button className="py-1 px-4 bg-[#3b9df828] text-[#2367a7] rounded">
                  Design
                </button>
                <div className="w-[50%] h-full">
                  <div className="flex items-center">
                    {[
                      "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg",
                      "https://img.freepik.com/free-photo/confident-attractive-caucasian-guy-beige-pullon-smiling-broadly-while-standing-against-gray_176420-44508.jpg",
                      "https://img.freepik.com/free-photo/indoor-picture-cheerful-handsome-young-man-having-folded-hands-looking-directly-smiling-sincerely-wearing-casual-clothes_176532-10257.jpg",
                      "https://img.freepik.com/free-photo/handsome-confident-smiling-man-with-hands-crossed-chest_176420-18743.jpg",
                      "https://img.freepik.com/free-photo/portrait-hacker_23-2148165910.jpg",
                    ].map((src, index) => (
                      <img
                        key={index}
                        src={src}
                        alt=""
                        className={`w-[30px] h-[30px] object-cover rounded-full border border-secondary absolute right-[${
                          (index + 1) * 5
                        }%] top-0`}
                      />
                    ))}
                    <div className="w-[30px] h-[30px] object-cover rounded-full border border-secondary bg-[#e5eaf2] text-[#424242] absolute top-0 right-[0%] flex items-center justify-center">
                      <p className="text-[0.7rem] cursor-pointer">18+</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
