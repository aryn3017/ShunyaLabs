import React from "react";
import Hero from "./Hero";
import Carousel from "../Carousel/Carousel";
import Profile from "../Profile/Profile";

function Home() {
  return (
    <>
      <Hero />
      <section className="text-white body-font bg-gray-100 mt-10 pt-10 pb-10 h-screen">
        <div className=" mb-20 bg-gradient-to-r from-blue-800 ssm:to-60% to-40% to-gray-100 h-10 px-10 text-white flex items-center font-poppins">
          {" "}
          NOTIFICATIONS
        </div>
        <div className="container mx-auto flex  pt-5 pb-20 md:pb-0 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0">
            <Carousel />
          </div>
          <div className="lg:flex-grow md:w-1/2   flex flex-col md:text-left items-center text-center border-4 bg-clip-border bg-green-200 rounded-b-xl  ml-5 mmd:ml-0 mmd:mt-5 rounded-t-xl ">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 text-black bg-green-400 w-full font-semibold text-center rounded-t-xl">
              IMPORTANT
            </h1>
            <ul className=" text-black text-left min-h-40">
              <li>
                <a href="http://">
                  {" "}
                  🌱Workshop on Open source energy system analysis
                </a>
              </li>
              <li>
                <a href="http://">🚗Recent publication on energy efficiency</a>
              </li>
            </ul>
          </div>
        </div>
        <div className=' mt-20 bg-gradient-to-l from-blue-800 to-40% to-gray-100 h-10 px-10 text-white flex items-center font-poppins'> </div>
      
      </section>
      <Profile/>
    </>
  );
}

export default Home;
