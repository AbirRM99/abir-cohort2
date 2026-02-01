import React, { useState } from 'react'
import Navbar from "./components/Navbar";
import Men from './components/Men';
import Women from './components/Women';

// const App = () => {

//   const user1 = {
//     name: 'Abir',
//     age: 21,
//     gender: 'male',
//   }
//   const user2 = {
//     name: 'Aayushi',
//     age: 20,
//     gender: 'female',
//   }
//   const user3 = {
//     name: 'Aadi',
//     age: 8,
//     gender: 'male',
//   }
//   return (
//     <div className='h-screen bg-black text-white'>
//       {user1.gender == 'male' ? user1.age > 10 ? <Men /> : <Women /> : <Women />}
//     </div>
//   )
// }

const App = () => {
  const [num, setNum] = useState(0)
  // function btnClicked(){
  //   console.log('Button is clicked');
  //   setNum('Leo Messi')
  // }

  const [marks, setMarks] = useState([88, 69, 70, 54, 28])

  
  function graceStudent() {
    let newMarks = marks.map(function (elem) {
      if(elem < 33){
        return elem + 5
      }else if(elem > 33){
        return elem
      }
    })
    setMarks(newMarks)
  }

  return (
    <div>
      {/* <h1>{num}</h1>
    <button onClick={function(){
      setNum(num+1)
    }}
    className='active:scale-95 bg-emerald-600 text-white px-6 py-3 rounded font-bold m-2'>Increase</button>
    <button onClick={function(){
      setNum(num-1)
    }}
    className='active:scale-95 bg-emerald-600 text-white px-6 py-3 rounded font-bold m-2'>Decrease</button>
    <button onClick={function(){
      setNum(num+5)
    }}
    className='active:scale-95 bg-emerald-600 text-white px-6 py-3 rounded font-bold m-2'>Jump by 5</button> */}

      {/* <div className='h-100 w-100 bg-red-600 font-bond text-6xl '>{num}</div>
    <button onClick={function(){
      const rdm = Math.floor(Math.random()*100)
      setNum(rdm)
    }} className='active:scale-95 bg-emerald-600 text-white px-6 py-3 rounded font-bold'>click kro</button> */}

      {marks.map(function (elem, idx) {
        return <h1 key={idx}>Student {idx + 1} marks is {elem} ({elem>=33?'PASS':'FAIL'})</h1>
      })}

      <button onClick={graceStudent} className='active:scale-95 bg-emerald-600 text-white px-6 py-3 rounded font-bold'>Give them grace</button>


    </div>
  )
}

export default App