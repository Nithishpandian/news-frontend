import React from 'react'
import ColorDots from './ColorDots'

const BottomLine = () => {
  return (
    <div className=' mt-5'>
        <div className=' bg-stone-600 h-1.5 w-full rounded-3xl'></div>
        <div className='flex justify-around items-center mt-2'>
            <div className=' hidden md:flex'>
                <ColorDots/>
            </div>
            <div>
                <ColorDots/>
            </div>
            <div>
                <ColorDots/>
            </div>
            <div>
                <ColorDots/>
            </div>
        </div>
    </div>
  )
}

export default BottomLine