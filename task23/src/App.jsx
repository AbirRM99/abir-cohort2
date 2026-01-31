import React from 'react'
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

  function btnClicked(){
    console.log('Button is clicked');
  }
  
  return(
  <div>
    <button onClick={btnClicked}
    className='active:scale-95 bg-emerald-600 text-white px-6 py-3 rounded font-bold m-2'>Click to Download</button>
  </div>
  )
}

export default App