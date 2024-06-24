import React from 'react'

function Contact() {
    return (
        <>
        <div className=' flex flex-col mt-10 mb-10'>
            <div className=' flex justify-center'>
            <p className=' font-extrabold text-3xl font-mono underline border-dotted border-2 rounded-lg p-4'>CONTACT US</p>
            </div>
            <section className="text-gray-600 body-font relative">
                <div className="absolute inset-0 bg-gray-300 mx-20 mt-20">
                    <iframe width="100%" height="100%" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3459.986132236874!2d77.892255011369!3d29.864673774910347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390eb365586f6893%3A0x6937f220b7f16573!2sDepartment%20of%20Management%20Studies%2C%20IIT%20Roorkee!5e0!3m2!1sen!2sin!4v1717243167062!5m2!1sen!2sin" className=' border-2 border-black rounded-lg '></iframe>
                </div>
                <div className="container px-5 py-80 mx-auto flex sm:py-52">
                </div>
            </section>
            <div className='flex flex-row justify-center flex-wrap'>
                <div className="w-1/4 border-2 mmd:w-full flex flex-col leading-relaxed p-5 m-5 shadow-2xl text-white bg-black rounded-lg bg-opacity-30">
                    <div className="w-1/2 font-bold">EMAIL US</div>
                    <div className="w-1/2 sm:text-sm">DoMS@gmail.com</div>
                </div>
                <div className="w-1/4 border-2 mmd:w-full flex flex-col leading-relaxed p-5 m-5 shadow-2xl text-white bg-black rounded-lg bg-opacity-30">
                    <div className="w-1/2 font-bold">CALL US</div>
                    <div className="w-1/2 sm:text-sm">12345456</div>
                </div>
            </div>
        </div></>
    )
}

export default Contact
