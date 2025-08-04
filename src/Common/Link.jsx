import React from 'react'
import { Linkdata } from '../td/td'

function Link() {
  return (
    <div className='hidden  lg:flex justify-center items-center text-zine  gap-6 '>
        {Linkdata.map((item,index)=>(
            <a key={index} href={item.link} >
             <li className=' lg:text-sm md:text-[13px] nav'>{item.text}</li>
            
            </a>
        ))}
    </div>
  )
}

export default Link