import React from 'react'
import fiverImg from "../../assets/fiverposter.png"

const Ad = () => {
  return (
    <div className='w-full border border-[#131313] rounded mr-1'>
        <h1 className=' text-center bg-[#131313] text-[#fafafa] font-bold py-2'>WEBDEVELOPMENT PROJECT</h1>
        <div className=' flex justify-center h-48 md:w-72 min-[1310px]:w-96'>
          <img className=' m-2 h-48 md:w-82 min-[1310px]:w-96 opacity-95 object-cover rounded' src={fiverImg} alt="" />
        </div>
        <div className='px-2'>
            <ul className=' md:font-bold px-2 py-4'>
                <li>For Web development related projects</li>
                <li>For Designing a Website</li>
                <li>For Teaching Web development</li>
            </ul>
        </div>
        <div className=' border-t border-stone-600 text-center font-bold py-1'>Contact: 
            <a className='font-medium ml-1' href="mailto:nithishpandiyan75@gmail.com"> nithishpandiyan75@gmail.com</a>
        </div>
    </div>
  )
}

export default Ad