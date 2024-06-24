import React, { useState } from 'react'

function Banner() {
  let [No,setNo] = useState('visible animate-floatIn  ')
  const handleNo = () => {
    setNo('animate-floatOut')
    setTimeout(() => {
      setNo('hidden')
    }, 1000);
  }
  return (
    <div className={`${No} fixed ssm:right-1 bottom-5 right-5 rounded-2xl bg-ban-img bg-no-repeat bg-cover border-2 border-black z-50 shadow-2xl ssm:text-sm`}>
      <div className=' backdrop-blur-sm rounded-2xl bg-white bg-opacity-20'>
        <p className=' text-center border-b-2 font-poppins  border-black font-medium animate-gradient'>WORKSHOP ALERT</p>
      <div className=' flex flex-row border-b-2 py-4 pr-4  border-black font-poppins font-medium'>
        {/* <img src="./ban_logo.png" className=' w-10 mt-8 h-8 ssm:hidden'/> */}
        <div className=' text-sm pl-3'>
          <p className='font-bold'>Workshop on</p>
          <p>OPEN-SOURCE ENERGY SYSTEM ANALYSIS</p>
          <p className=' font-bold'>To Be Held At</p>
          <p>Dept. of Management Studies, IIT Roorkee</p>
          <p className=' font-bold'>2nd - 3rd SEPTEMBER 2024</p>
        </div>
      </div>
      <div className=' flex flex-row w-full justify-center '>
        <a className='px-3 border-r-2 text-center pl-20 pr-8 duration-700 border-black hover:text-green-500 rounded-bl-xl hover:bg-black' href="https://ideea-registration.vercel.app"><div>Register Now</div></a>
        <a onClick={handleNo} className=' cursor-pointer px-3 flex justify-center pr-20 duration-700 border-black rounded-br-xl hover:text-white hover:bg-black' ><div className=' w-full'>No, Thanks</div></a>
      </div></div>
    </div>
  )
}

export default Banner