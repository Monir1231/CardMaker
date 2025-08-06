import React from 'react'
import { Cn } from '../Cn/Cn'

function Head({children,className}) {
  return (
    <h1 className={Cn("xl:text-[32px] md:text-2xl text-xl text-[#09090B] font-bold",className)}>{children}</h1>
  )
}

export default Head