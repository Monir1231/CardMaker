 
import React from 'react'
 import { Cn } from '../Cn/Cn'

function Container({children,className}) {
  return (
    <div className={Cn('max-w-[90%] mx-auto',className)}>{children}</div>
  )
}

export default Container