import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import User from './components/User';
import { useEffect } from 'react';

const App = () => {

  const [allData, setAllData] = useState([])
  async function getData(){

    const response = await axios.get('https://jsonplaceholder.typicode.com/users')
    setAllData(response.data)
    
  }
  useEffect(function(){
    getData()
  },[])
  return (
    <div>
      <div className='all-cards'>
         {allData.map(function(elem,idx){
        return <div key={idx}><User elem={elem}/></div>
      })}
      </div>
    </div>
  )
}

export default App