import React from 'react'
import Squares from './Squares'
const Board = ({sanjeet}) => {
  return (
    <div>
    <div>
    
      <Squares value={"gautam"}/>
      <Squares value={"sanjeet"}/>
      <Squares value={2}/>
      
    </div>
     <div>
    
     <Squares value={3}/>
     <Squares value={4}/>
     <Squares value={5}/>
     
   </div>
    <div>
    
    <Squares value={6}/>
    <Squares value={7}/>
    <Squares value={8}/>
    
  </div>
  </div>
  )
}

export default Board