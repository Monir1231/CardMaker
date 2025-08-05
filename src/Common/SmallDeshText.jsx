 
 import React from 'react'
 import { Cn } from '../Cn/Cn'
 
 function SmallDeshText({children,className}) {
   return (
     <p className={Cn('text-[12px]',className)}>{children}</p>
   )
 }
 
 export default SmallDeshText