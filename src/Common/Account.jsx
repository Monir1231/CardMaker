import React from 'react'
import { AccountData } from '../td/td'

function Account() {
  return (
    <div>
        {AccountData.map((item,index)=>(
            <div key={index} className='flex items-center justify-center md:gap-3 gap-2'>
             <img className='w-[37px] md:w-[40px] ' src={item.img}/>
             <div>
                <h2 className='md:text-base text-sm font-semibold text-[#71717A]'>{item.name}</h2>
                <p className='md:text-sm text-[12px]  text-[#71717A]'>{item.email}</p>
             </div>
            </div>
        ))}
    </div>
  )
}

export default Account