import React from 'react'
 import { Cn } from '../Cn/Cn'

function Sms({children,className}) {
  return (
    <div className={Cn('bg-Zine-black text-[12px] font-bold text-center w-[213px] h-[57px] rounded-md border border-[#F4F4F5] flex  items-center justify-center', className)}>{children}</div>
  )
}

export default Sms