import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import React, { useState } from "react";
import { Col, NavItem } from "react-bootstrap";

export const Cards = ({ element }) => {
  // console.log("element: ", element);

  return (
   
    <>
     
        
          <div>
            <img src={element.image} />
            <p>{element.name}</p>
            <p>{element.gender}</p>
            <p>{element.species}</p>
            <p>{element.status}</p>
          </div>
        );
  
    </>
  );
};

export default Card;