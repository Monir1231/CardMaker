
 import React from 'react'
import Account from './Account'
import { Linkdata } from '../td/td'


function MobileMenu({ToggleMenu}) {
  return (
    <div className='lg:hidden absolute top-0 left-0 w-full h-screen bg-white z-50 p-6 overflow-y-hidden'>
        <div className='flex items-center justify-between pb-6'>
         <Account/>
        <button className='text-red-500 text-3xl self-end' aria-label='close-meun' onClick={ToggleMenu}>&times;  </button>
        </div>
        <div className='space-y-4'>
            {Linkdata.map((item,index)=>(
                <a href={item.link} key={index} className='block text-[12px] text-accent hover:text-primary transition-all duration-300 cursor-pointer'>{item.text} </a>
            ))}
        </div>
    </div>
  )
}

export default MobileMenu