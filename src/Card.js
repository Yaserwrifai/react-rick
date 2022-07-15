
//import Button from 'react-bootstrap/Button';
//import Modal from 'react-bootstrap/Modal';
//import { Col, NavItem } from "react-bootstrap";
import React, { useState } from 'react';
import Card from "react-bootstrap/Card";

import "./components/cardStyle.css";
import CharModal from "./views/CharModal";



export const Cards = ({ element }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  
  const handleShow = () => setShow(true);
  
  return (
 
    <>
    <div className='col'>
     <div className="flip-card" >
  <div className="flip-card-inner">
    <div className="flip-card-front">
      <img src={element.image} alt="Avatar" style={{width:"200px", height:"200px"}}  />
    </div>
    <div className="flip-card-back">
      <h4>{element.name}</h4>
      <p>{element.gender}</p>
      <p>{element.species}</p>
      <p>{element.status}</p>
      <button onClick={handleShow}>more</button>
    </div>
  </div>
</div>
</div>
<CharModal show={show} handleClose={handleClose} element={element}/>
</>
    
  );
};

export default Card;