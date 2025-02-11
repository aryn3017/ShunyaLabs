import React from 'react'

function Publications() {
  return (
    <div className=' flex md:flex-row'>
      {/* <div className=' font-poppins text-center text-xl'>Market instrument for the first fuel and its role in decarbonizing Indian industrial production</div> */}

      <iframe className=' w-full h-screen  bg-white bg-opacity-30' src="https://www.sciencedirect.com/science/article/abs/pii/S0301421524001599?dgcid=author" frameborder="0"/>
      <iframe className=' w-full h-screen bg-white bg-opacity-30' src="https://www.sciencedirect.com/science/article/pii/S0973082624002631" frameborder="0"/>
    </div>
  )
}

export default Publications