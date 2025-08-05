import React from 'react'
 import { Cn } from '../Cn/Cn'

function Sms({children,className}) {
  return (
    <div className={Cn('bg-Zine-black text-[8px] md:text-[12px] font-bold text-center w-[150px] h-[40px] md:w-[213px] md:h-[57px] rounded-md border border-[#F4F4F5] flex  items-center justify-center', className)}>{children}</div>
  )
}

export default Sms