import React from 'react'

function Profile() {
  return (
    <div className='   flex justify-center bg-gray-100 '>
        <div className=' grid-flow-col border-2 flex flex-row'>
            <div>
                <img src="./sir_icon.png" className=' max-w-40 rounded-full' />
            </div>
            <div className=' px-10 '>
                <h1 className=' font-medium font-poppins text-3xl'>Prof. Tarun Sharma</h1>
                <h1 className=' font-poppins text-lg'>Founder, Shunya-Labs</h1>
                <h1 className='  font-poppins text-lg'>Department of Management Studies, IIT Roorkee</h1>
                <h1 className='  font-poppins text-lg'>Center for Sustainable Energy, IIT Roorkee

</h1>
            </div>
        </div>
    </div>
  )
}

export default Profile