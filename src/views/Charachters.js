import React, {useEffect, useState} from 'react'

import {Cards} from '../Card';
// import CharModal from './CharModal';
import Search from "./Search";



export default function Charachters() {
    const [data, setData] = useState([]);

    const [filterResult, setFilterResult] = useState("");
    //state variable to SAVE the URL adress everytime we click a next/prev button
    const [url, setUrl] = useState("https://rickandmortyapi.com/api/character/?page=1")
    // create a state variable to store the result of myData.info
    const [infoUrl, setInfoUrl] = useState(null)

//     const fetchData = async () => {
//         try {
//             const response = await fetch("https://rickandmortyapi.com/api/character/")
//             const myData = await response.json()

//             setData(myData.results)
// console.log(myData.info.next)

//         } catch (error) {
//             console.log(error)
//         }
//     };

    const fetchData = async () => {
      
      try {
          const response = await fetch(url)
          const myData = await response.json()

          setData(myData.results)
          setInfoUrl(myData.info)
          
console.log(myData.info.next)

      } catch (error) {
          console.log(error)
      }
  };

    const inputWord = (event) => { 
      // here you can get the value you are typing
      // console.log(event.target.value);
        setFilterResult(event.target.value);
     
    }


const filterCharacters = !filterResult ? data : data.filter((item) => {
    return item.name.toLowerCase().includes(filterResult.toLocaleLowerCase())
})
 console.log('filterCharacters', filterCharacters)

const goNext = ()=> {
   infoUrl.next=!null?setUrl(infoUrl.next):true;
  // setUrl(infoUrl.next)
}
// create the goPrev function
const goPrev = ()=> {
    infoUrl.prev=!null?setUrl(infoUrl.prev):true;
    //setUrl(infoUrl.prev)
  }


//think about a way o preventing the problem when you are on the 1st page, and the value info.prev:null

   

useEffect(() => {
  fetchData()
}, [url])


    return (
        <>
            <Search inputWord={inputWord}/>
            <button onClick={goNext}> Next</button>
            <button onClick={goPrev}> Prev</button>

            <div className="row">
                {
                filterCharacters.map((element, i) => {
                    return (

                        <Cards element={element}
                            key={i}/>
                    )
                })
            } </div>
        </>
    );

}
