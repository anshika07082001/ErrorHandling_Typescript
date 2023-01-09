import React from 'react'

type NumberProps = {
  btnHandler:()=>void;
  num:number;
}

const NumGeneratorFunc = (props:NumberProps) => {

  // condition checks whether number is less than 5 or not

  if(props.num<5){
    throw new Error('Number less than 5!!')
  }
 
  return (
    <>
    <h3>{props.num}</h3>
    <button className='button' onClick={props.btnHandler}>Get Number</button>
    </>
  )
}

export default NumGeneratorFunc