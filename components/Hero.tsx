import React from 'react'
import CustomButton from './UI/button/CustomButton'

const Hero = () => {
  return (
    <div className="w-full h-[500px] flex justify-center gap-4 pt-10">
    <div className="flex flex-col md:px-4 px-4">
      <h1 className="md:text-[5rem] text-[3.2rem] font-extrabold ">
        A Shop For <span className="inline-block">The —</span> <br/> SMP
      </h1>

      <div className="my-5">
        <a href="#shop">
          <CustomButton title="View Shop" style="light" containerStyles="md:w-[280px] md:h-[80px] w-[160px] h-[44px] text-xl md:text-3xl rounded-3xl"/>
        </a>
      </div>
    </div>
  </div>
  )
}

export default Hero;
