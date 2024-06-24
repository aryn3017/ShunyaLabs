import React from "react";
import Hero from "./Hero";
import Carousel from "../Carousel/Carousel";
import Profile from "../Profile/Profile";
import ResearchT from "../ResearchT/ResearchT";

function Home() {
  return (
    <>
      <Hero />
      <div className=" w-full h-16 bg-gradient-to-t from-gray-100 mt-5 to-transparent z-51 text-black text-center font-playwrite text-4xl font-bold">
        ^
      </div>
      <section className="text-white body-font bg-gray-100 pt-10 pb-20">
        <div className=" mb-20 bg-gradient-to-r from-blue-800 ssm:to-60% to-40% to-gray-100 h-10 px-10 text-white flex items-center font-poppins">
          {" "}
          NOTIFICATIONS
        </div>
        <div className="container mx-auto flex  pt-5 pb-20 md:pb-0 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 border-2 border-green-400 bg-green-400 rounded-xl">
            <div className=" text-black text-center bg-green-400 rounded-t-xl font-poppins ">
              Previous IDEEA Workshop gallary
            </div>
            <Carousel />
          </div>
          <div className=" ssm:mx-5 lg:flex-grow md:w-1/2   flex flex-col md:text-left items-center text-center border-4 bg-clip-border bg-green-200 rounded-b-xl  ml-5 mmd:ml-0 mmd:mt-5 rounded-t-xl ">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 text-black bg-green-400 w-full font-poppins font-semibold text-center rounded-t-xl">
              IMPORTANT
            </h1>
            <ul className=" text-black text-left min-h-40">
              <li className=" flex flex-row">
                <a href="https://ideea-registration.vercel.app/">
                  {" "}
                  🌱Workshop on Open source energy system analysis
                </a>
                <span class="relative flex h-3 w-3">
                  <span class=" animate-Ping absolute inline-flex h-full w-full rounded-full bg-red-800 opacity-75"></span>
                  <span class="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                </span>
              </li>
              <li className=" flex flex-row">
                <a href="https://www.sciencedirect.com/science/article/pii/S0301421524001599?dgcid=author">
                  🚗Recent publication on energy efficiency
                </a>
                 {/* <span class="relative flex h-3 w-3">
                  <span class=" animate-Ping absolute inline-flex h-full w-full rounded-full bg-red-800 opacity-75"></span>
                  <span class="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                </span> */}
              </li>
            </ul>
          </div>
        </div>
        <div className=" mt-20 bg-gradient-to-l from-blue-800 to-40% to-gray-100 h-10 px-10 text-white flex items-center font-poppins">
          {" "}
        </div>
      </section>
      <Profile />
      <div className=" -mb-1 bg-gradient-to-r from-blue-800 ssm:to-60% to-40% to-gray-100 h-10 px-10 text-white flex items-center font-poppins">
        {" "}
        Research Themes
      </div>
      <ResearchT />
      <div className="bg-gradient-to-l from-blue-800  via-blue-400 to-blue-800 h-10 px-10 text-white flex items-center font-poppins">
        {" "}
      </div>
    </>
  );
}

export default Home;
