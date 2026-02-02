import React, { useState } from 'react'

const App = () => {

  const [username, setUsername] = useState('')
  const [userrole, setUserrole] = useState('')
  const [imageURl, setImageURl] = useState('')
  const [userDesc, setUserDesc] = useState('')

  const [allUsers, setAllUsers] = useState([])

  function submitHandler(e) {
    e.preventDefault()
    setAllUsers([...allUsers, { username, userrole, imageURl, userDesc }])


    setImageURl('')
    setUserDesc('')
    setUsername('')
    setUserrole('')

  }

  function deleteHandler(idx) {
    const copyUsers = [...allUsers]
    copyUsers.splice(idx, 1)

    setAllUsers(copyUsers)
  }
  return (
    <div className='h-screen bg-black text-white'>
      <form onSubmit={function (e) {
        submitHandler(e)
      }} className='p-2 flex flex-wrap'>
        <input value={username}
          onChange={function (e) {
            setUsername(e.target.value)
          }}
          className='border-2 text-xl font-semibold px-5 py-2 rounded m-2 lg:w-[48%]'
          type="text"
          placeholder='Enter Your Name' />

        <input value={imageURl}
          onChange={function (e) {
            setImageURl(e.target.value)
          }}
          className='border-2 text-xl font-semibold px-5 py-2 rounded m-2 lg:w-[48%]'
          type="text"
          placeholder='Image URL' />

        <input value={userrole}
          onChange={function (e) {
            setUserrole(e.target.value)
          }}
          className='border-2 text-xl font-semibold px-5 py-2 rounded m-2 lg:w-[48%]'
          type="text"
          placeholder='Enter Role' />

        <input value={userDesc}
          onChange={function (e) {
            setUserDesc(e.target.value)
          }}
          className='border-2 text-xl font-semibold px-5 py-2 rounded m-2 lg:w-[48%]'
          type="text"
          placeholder='Enter Description' />

        <button className=' bg-emerald-700 active:scale-95 cursor-pointer text-xl font-semibold px-5 py-2 rounded m-2 w-[97%]'>Create User</button>
      </form>
      <div className='px-4 py-10 gap-4 flex flex-wrap'>
        {allUsers.map(function (elem, idx) {
          return <div key={idx} className='lg:w-[23vw] md:w-[30vw] sm:w-[45vw] py-8 px-8 flex items-center flex-col text-center rounded-xl bg-white text-black'>
            <img className='h-25 w-25 rounded-full object-center object-cover' src={elem.imageURl} alt="" />
            <h1 className='text-2xl mt-2 font-bold'>{elem.username}</h1>
            <h5 className='text-lg text-blue-500 font-semibold my-2'>{elem.userrole}</h5>
            <p className='text-sm font-medium leading-tight'>{elem.userDesc}</p>
            <button onClick={function () {
              deleteHandler(idx)
            }} className='px-4 py-2 text-xs cursor-pointer active:scale-95 rounded bg-red-600 text-white font-semibold mt-3'>Remove</button>
          </div>
        })}
      </div>
    </div>
  )
}

export default App