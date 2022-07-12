import React, { useEffect, useState } from 'react'
import { Cards } from '../Card';

function Charachters() {

    const [data,setData]=useState([]);
  
    const fetchData = async () =>{
    try {
      const response = await fetch("https://rickandmortyapi.com/api/character/")
      const data = await response.json()
      //console.log(data)
      console.log(data.results)
      setData(data.results)
    } catch (error) {
      console.log(error)
    }
    }
    
    
    
    useEffect(() => {
      fetchData();
      }, []);
    
  return (
    <div>

        {data.map((element,i)=> {
            return (
                <div key={i}>
                <Cards element={element}/>
                </div>
            )
        })}
    </div>
  )
}

export default Charachters