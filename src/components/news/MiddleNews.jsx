import React from 'react'
import { Link } from 'react-router-dom'
import newsImg from "../../assets/newsImg.webp"

const MiddleNews = ({title, description, image, url}) => {
  return (
    <div className=' flex px-5 my-5 gap-x-3 items-center justify-center'>
        <img src={image?image:newsImg} className=' h-64 w-96 opacity-95 object-cover rounded hover:grayscale duration-300' alt="News Image" />
        <div className='flex flex-col justify-start'>
            <Link to={url} className=' text-[#0c0c0c] hover:text-[#3b3a3a] duration-300 font-extrabold text-2xl mb-1.5'>{title.slice(0,90)}</Link>
            <p className=' text-sm text-stone-500 leading-[18px]'>{description?description:title}..</p>
        </div>
    </div>
  )
}

export default MiddleNews