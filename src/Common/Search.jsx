 import React from 'react'
 
 function Search() {
   return (
     <>
        <div className='py-[8px] px-[6px] md:py-[12px] md:px-[10px] rounded-[6px] bg-white flex items-center justify-center gap-1.5 w-fit'>
            <img className=' size-[14px] md:size-[18px]' src='Search.png'/>
            <input type='text' placeholder='Search incident' className=' text-[10px] md:text-[12px] text-mygray border-none outline-none'/>
        </div>
     </>
   )
 }
 
 export default Search