 import React from 'react'
import { Cn } from '../Cn/Cn'



 
  function Button({childern,className}) {
  return  (
   <button className={Cn('lg:py-[8px] lg:px-[25px] py-[6px] px-[20px] rounded-md bg-Orange text-white lg:text-[12px] text-[11px] font-bold text-center hover:bg-orange-600 transition-all duration-300 cursor-pointer', className)}>{childern}</button>
  )
 }
  
export default Button
 
