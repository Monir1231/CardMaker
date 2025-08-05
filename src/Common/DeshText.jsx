import React from 'react'
import { Cn } from '../Cn/Cn'

function DeshText({children,className}) {
  return (
    <div>
        
        <h2 className={Cn('xl:text-[26px] lg:text-[24px] md:text-[22px] text-[20px] text-Zine-black font-bold',className)}>{children}</h2>
    </div>
  )
}

export default DeshText