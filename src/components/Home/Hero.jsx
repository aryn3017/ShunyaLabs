import React from "react";

function Hero() {
  return (
    <div className=" flex flex-row mx-20 ssm:mx-5 justify-between mt-20 -z-10">
      <div className="flex flex-col ml-0 text-center">
        <p className=" gradient-text bg-clip-text text-transparent mb-5 leading-tight ssm:text-4xl umd:text-5xl text-7xl font-poppins font-bold">
          Developing cutting edge workflows for whole Energy
          system optimization.
        </p>
        <div className="flex flex-row ssm:flex-col p-3 rounded-3xl bg-white bg-opacity-20 backdrop-blur-2xl">
          <div className="flex text-3xl items-center font-bold mr-5 bg-gradient-to-tl from-green-500 via-blue-600 to-green-500 bg-clip-text text-transparent text-left ssm:text-center ssm:block ssm:mb-3 ssm:text-2xl">
            OUR MISSION
          </div>
          <div>
            <div className="mb-5 ssm:text-xl text-3xl font-poppins font-light text-black text-left">
              &gt; Maximizing Supply chain efficiency and minimizing
              environmental Impact.
            </div>

            <div className=" text-3xl ssm:text-xl font-poppins font-light text-black text-left">
              &gt; To Leverage strategic management and continious optimization
              to drive resource efficiency across supply chains and minimize
              environmental Impact.
            </div>
          </div>
        </div>
      </div>
      {/* <img src="/logo.png" className=' umd:hidden' alt="" /> */}
    </div>
  );
}

export default Hero;
