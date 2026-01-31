import React from 'react'

const Nav = (lol) => {
  console.log(lol);
  
  return (
    <div className='bg-white border-2 border-red-500 m-2 rounded px-10 py-3 w-fit h-20 text-[40px] font-bold'>
        {/* This is Nav {a+b} */}
        {lol.user}
    </div>
  )
}

export default Nav