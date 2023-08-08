import React from 'react'
import nithish from "../../assets/nithish.jpg"

const Contact = () => {
  return (
    <div className='flex flex-col items-center border-4 border-[#1f1f1f] w-[40rem] mt-4 m-3 rounded'>
      <h1 className=' py-2 font-bold text-5xl text-center font-lilita bg-[#242424] text-[#f7f7f7] w-full'>WANTED</h1>
      <div className='flex items-center gap-x-4 px-5'>
        <img className=' mt-3 rounded h-60 hover:grayscale duration-300' src={nithish} alt="" />
        <div className='flex flex-col gap-y-2 py-4'>
          <h1 className='font-bold text-2xl'>Name: <a href='https://www.nithishdev.me' target='_blank' className=' duration-300 hover:text-stone-600 font-medium text-xl'>Nithish</a></h1>
          <h3 className='font-bold text-2xl leading-5'>Description: <span className=' font-medium text-xl'>FullStack Web developer who is looking for a job.</span></h3>
          <h3 className=' font-bold text-2xl leading-5'>Skills: <span className=' font-medium text-xl'>ReactJS, NodeJS, ExpressJS, MongoDB</span></h3>
          <h3 className='font-bold text-2xl leading-5'>Projects: 
            <span className=' font-medium text-xl'>
              <a href="https://www.nithishdev.me" target='_blank' className='hover:text-stone-600 duration-300'> Portfolio, </a>
              <span><a href='https://calcolo.netlify.app' target='_blank' className=' duration-300 hover:text-stone-600'>E-commerce websites</a> etc</span>
            </span>
          </h3>
        </div>
      </div>
      <div className=' mt-4 border-t-2 border-[#0a0a0a] w-full text-center font-bold text-xl py-1'>Contact: <a href='mailto:nithishpandiyan75@gmail.com' className=' hover:text-stone-800 duration-300'>nithishpandiyan75@gmail.com</a></div>
    </div>
  )
}

export default Contact