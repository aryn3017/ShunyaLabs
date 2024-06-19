import React, { useState } from "react";

function Banner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) {
    return null;
  }

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <div className=" p-4 mb-4 rounded flex items-center justify-between mmd:mx-10 mx-40 mt-5 bg-green-700 bg-opacity-45">
    
        <div className=" mt-5">
          <div className=" flex flex-row mmd:flex-col" role="alert">
            <img
              src="https://ideea-model.github.io/IDEEA/logo.png"
              className=" w-40 h-28"
              alt="Workshop Logo"
              />
            <div className="workshop-details">
              <div className=" font-bold text-xl text-green-600">Workshop Alert</div>
              <div className="workshop-info">
                <p>
                  Workshop on{" "}
                  <strong>OPEN-SOURCE ENERGY SYSTEM ANALYSIS</strong>
                </p>
                <p>
                  To Be Held At{" "}
                  <strong>Dept. of Management Studies, IIT Roorkee</strong>
                </p>
                <p>
                  <strong>2nd - 3rd SEPTEMBER 2024</strong>
                </p>
              </div>
              <a
                href="https://ideea-registration.vercel.app/"
                className=" p-1 rounded-lg text-white font-poppins hover:bg-green-600 hover:shadow-xl text-sm font-semibold mt-10 bg-green-500 transition-all duration-500"
              >
                Register Now
              </a>
              <a
                href="https://ideea-registration.vercel.app/"
                className=" font-poppins ml-3 text-sm font-semibold text-green-700 hover:underline hover:shadow-xl hover:text-black transition-all duration-500"
              >
                Know More
              </a>
            </div>
          </div>
        </div>
      <button
        onClick={handleClose}
        className="ml-4 bg-transparent text-black font-semibold hover:text-gray-700 focus:outline-none"
      >
        &times;
      </button>
    </div>
  );
}

export default Banner;
