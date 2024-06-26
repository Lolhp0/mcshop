import { CustomButtonProps } from '@/types'
import Image from 'next/image'
import React from 'react'

const CustomButton = ({title, containerStyles, handleClick, style, img}: CustomButtonProps) => {
  return (
    <button className={`w-fit px-2 h-[32px] rounded-lg text-[15px] cursor-pointer duration-200 font-medium border-2 ${style === "dark" ? "bg-[#0a0a0a] text-zinc-100 hover:bg-zinc-950 border-zinc-900 hover:border-zinc-900/80" : "bg-[#ededed] text-zinc-900 hover:bg-zinc-300 border-zinc-500"} ${containerStyles ? containerStyles : ""}`} onClick={handleClick}>
        {title}
        {
            img ? (
                <div className='relative ml-auto'>
                    <Image src={`${img}`} width={20} height={20} className='object-contain' alt={`${title} image`}/>
                </div>
            ) : (
                <></>
            )
        }
    </button>
  )
}

export default CustomButton
