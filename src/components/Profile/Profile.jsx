import React from "react";

function Profile() {
  return (
    <>
      <div className="   flex justify-center bg-gray-100 pb-10">
        <a href="https://www.iitr.ac.in/~DM/Tarun_Sharma" className=" grid-flow-col shadow-sm duration-100 mb-10 flex flex-row ssm:flex-col ssm:rounded-md ssm:mx-5 rounded-l-full rounded-r-full hover:shadow-2xl hover:-translate-y-1 bg-gradient-to-r from-slate-400 to-gray-100 p-3">
          <div className=" justify-center flex">
            <img src="./sir_icon.png" className=" max-w-40 rounded-full" />
          </div>
          <div className=" px-10 ">
            <h1 className=" font-medium font-poppins text-3xl">
              Prof. Tarun Sharma
            </h1>
            <h1 className=" font-poppins text-lg">Founder, Shunya-Lab</h1>
            <h1 className="  font-poppins text-lg">
              Department of Management Studies, IIT Roorkee
            </h1>
            <h1 className="  font-poppins text-lg">
              Center for Sustainable Energy, IIT Roorkee
            </h1>
          </div>
        </a>
      </div>
    </>
  );
}

export default Profile;
