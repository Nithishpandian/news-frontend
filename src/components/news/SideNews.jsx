import React from 'react'
import { Link } from 'react-router-dom'
import newsImg from "../../assets/newsImg.webp"

const SideNews = ({title, description, image,url}) => {
  return (
    <div className=' group flex flex-col px-4 my-3'>
        <img src={image?image:newsImg} className=' h-48 w-82 opacity-95 object-cover rounded hover:grayscale duration-300' alt="News Image" />
        <Link to={url} className=' mt-1.5 mb-0.5 leading-5 text-[#0c0c0c] hover:text-[#424141] duration-300 font-semibold'>{title?title:description}</Link>
        <p className=' text-sm text-stone-500 leading-[18px]'>{description?description:title}..</p>
        <div className=' mt-4 h-0.5 bg-[#c9c9c9] '></div>
    </div>
  )
}

export default SideNews