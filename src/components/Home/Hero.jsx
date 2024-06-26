import React from "react";
// gradient-text bg-clip-text text-transparent  font-bold -m-5 umd:text-5xl ssm:text-2xl :: DEV CUTTING EDGE
// 
function Hero() {
  return (
    <>
    <div className=" flex flex-row mx-20 ssm:mx-5 justify-between mt-10 -z-10">
      <div className="flex flex-col ml-0 text-center">
      <div className=" ssm:flex-col flex flex-row mb-5 -z-10 bg-white bg-opacity-20 rounded-3xl p-4 backdrop-blur-2xl "><p className=" mr-5 ssm:mb-3 text-center font-semibold font-playwrite text-xl bg-gradient-to-tl from-green-500 via-blue-600 to-green-500 bg-clip-text text-transparent">Our Vision</p>
        <p className=" font-light  mb-5 ssm:text-xl text-3xl font-poppins">
          Developing cutting edge workflows for whole Energy
          system optimization.
        </p></div>
        <div className="flex flex-row ssm:flex-col p-3 rounded-3xl bg-white bg-opacity-20 backdrop-blur-2xl">
          <div className="flex text-xl items-center font-playwrite font-bold mr-5 bg-gradient-to-tl from-green-500 via-blue-600 to-green-500 bg-clip-text text-transparent text-left ssm:text-center ssm:block ssm:mb-3 ssm:text-2xl">
            Our mission
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
    </div></>
  );
}

export default Hero;
