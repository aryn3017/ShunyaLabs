

import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

// Handler hook for when Outside click dropdown close
let useClickOutside = (handler) => {
  let domNode = useRef();

  useEffect(() => {
    let maybeHandler = (event) => {
      if (!domNode.current.contains(event.target)) {
        handler();
      }
    };

    document.addEventListener("mousedown", maybeHandler);

    return () => {
      document.removeEventListener("mousedown", maybeHandler);
    };
  });

  return domNode;
};
// Handler hook for when Outside click dropdown close End Code====>>

const Dropdown4 = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  let domNode = useClickOutside(() => {
    setDropdownOpen(false);
  });

  return (
    <>
      {/* <!-- ====== Dropdowns Section Start --> */}
      <section className="dark:bg-dark md:hidden mr-3">
        <div className='container'>
          <div className='flex flex-wrap -mx-4 md:mx-0'>

            <div ref={domNode} className='w-full px-4 ssm:px-0 sm:w-1/2 lg:w-1/4'>
              <div className=' text-center'>
                <div className='relative inline-block mb-8 text-left'>
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className={`bg-secondary flex items-center rounded-[5px] px-5 py-[13px] text-base font-medium text-white`}
                  >
                    <svg className="h-8 w-8 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                    </svg>

                    <span className="pl-7">
                    </span>
                  </button>
                  <div
                    className={`shadow-xl absolute left-0 z-40 mt-2 w-full rounded-md bg-black bg-opacity-80  py-[10px] transition-all ${dropdownOpen
                      ? 'top-full opacity-100 visible'
                      : 'top-[60%] invisible opacity-0'
                      }`}
                  >
                    <DropdownItem label='HOME' to='/' />
                    <DropdownItem label='PUBLICATIONS' to='/publications' />
                    <DropdownItem label='TEAM' to='/team' />
                    {/* <DropdownItem label='SPEAKERS' to='/speakers' /> */}
                    <DropdownItem label='CONTACTS' to='/contact' />
                    {/* <DropdownItem label='IMP INFO.' to='/Impinfo' /> */}
                  </div>
                </div>
              </div>
            </div>
            {/* End */}
          </div>
        </div>
      </section>
      {/* <!-- ====== Dropdowns Section End -->    */}
    </>
  )
};

export default Dropdown4;

const DropdownItem = ({ label, to }) => {
  return (
    <NavLink
      to={to}
      className={({isActive})=>`${isActive ? " text-green-600":"text-white"} font-poppins hover:text-green-600 block text-center py-2 text-sm`}
    >
      {label}
    </NavLink>
  )
};
