import React from "react";

export default function Body(props){  
    return (
      <p className="App-intro">
        Body1, <br/>
        {props.myObj.a} <br/>
        {props.myObj.b} <br/>
        Number {props.number(12,10)}
      </p>
    );
  };

export function Body2(props){
    return (
      <p>{props}</p>
    );
};
