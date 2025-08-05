
 import React from 'react'
 import { Cn } from '../Cn/Cn'
 
 function Button({children,className}) {
   return (
    <button className={Cn('md:py-[11px] md:px-[25px] py-[6px] px-[20px] rounded-md bg-Orange text-white lg:text-[12px] text-[11px] font-bold text-center hover:bg-orange-600 transition-all duration-300 cursor-pointer ', className)}>{children}</button>
   ) 
 }
 
 export default Button

 





