 import React from 'react'
 
 function Search() {
   return (
     <>
        <div className='py-[12px] px-[10px] rounded-[6px] bg-white flex items-center justify-center gap-1.5 w-fit'>
            <img className='w-[18px] h-[18px]' src='Search.png'/>
            <input type='text' placeholder='Search incident' className=' text-[12px] text-mygray border-none outline-none'/>
        </div>
     </>
   )
 }
 
 export default Search