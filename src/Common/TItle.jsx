import React from 'react'
import { Cn } from '../Cn/Cn'

function Title({children,className}) {
  return (
    <p className={Cn("xl:text-base md:text-sm text-[12px] xl:max-w-[468px] max-w-sm ",className)}>{children}</p>
  )
}

export default Title