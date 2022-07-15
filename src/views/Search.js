import React from "react";
import "../index.css"


function Search({ inputWord }) {
  // console.log("props :>> ", props);
  // const inputWord = props.inputWord
  //capture the word we type

  return (
    <div>
      <input  className="in"
        type="text"
        id="header-search.."
        placeholder="Please Search Here"
        name="s"
        onChange={inputWord}
        style={{backgroundColor:"red",border:"1px solid black"}}
      />
    </div>
  );
}
export default Search;