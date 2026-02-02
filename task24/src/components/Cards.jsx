import React from 'react'

const Cards = (props) => {
  return (
    <div className='lg:w-[23vw] md:w-[30vw] sm:w-[45vw] py-8 px-8 flex items-center flex-col text-center rounded-xl bg-white text-black'>
            <img className='h-25 w-25 rounded-full object-center object-cover' src={props.elem.imageURl} alt="" />
            <h1 className='text-2xl mt-2 font-bold'>{props.elem.username}</h1>
            <h5 className='text-lg text-blue-500 font-semibold my-2'>{props.elem.userrole}</h5>
            <p className='text-sm font-medium leading-tight'>{props.elem.userDesc}</p>
            <button onClick={function () {
              props.deleteHandler(props.idx)
            }} className='px-4 py-2 text-xs cursor-pointer active:scale-95 rounded bg-red-600 text-white font-semibold mt-3'>Remove</button>
          </div>
  )
}

export default Cards