import React, { useState } from 'react'
import { TiArrowRight, TiArrowLeft } from "react-icons/ti";
import ResCard from './ResCard';

const Restaurantcard = () => {
    
    
    const[slide,setSlide] = useState(0);

    const nextSlide = () => {
        setSlide(slide + 3)
      }
    
      const prevSlide = () => {
        setSlide(slide - 3)
      }

    
  return (
    <div className='max-w-[1200px] mx-auto'>
    <div className='flex my-5 items-center justify-between mt-3'>
      <div className='text-[#282c3f] text-[24px] overflow-hidden font-bold'>Top restaurant chains in Vizag</div>
      <div className='flex w-[100px]'>
        <div className='w-[30px] h-[30px] cursor-pointer flex items-center justify-center bg-[#e2e2e7] rounded-full mx-2' onClick={prevSlide}>
          <TiArrowLeft />
        </div>
        <div className='w-[30px] h-[30px] cursor-pointer flex items-center justify-center bg-[#e2e2e7] rounded-full mx-2' onClick={nextSlide}>
          <TiArrowRight  />
        </div>
      </div>
    </div>
  <div className='flex border gap-5'>
    <ResCard/>
  </div>
    </div>
  )
}

export default Restaurantcard;