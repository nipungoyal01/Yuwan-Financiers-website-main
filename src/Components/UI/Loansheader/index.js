import React from 'react'
import './Loansheader.css'
/**
* @author
* @function Loansheader
**/

const Loansheader = (props) => {
  return(
    <>
    <div className="Header-section">
    <div className="Header_img">  
   <img src={props.Headerimg} alt={props.Headeralt} /> 
    <div className="Header_content">
    
     </div>
    </div> 
    </div> 
    </>
   )
  }


export default Loansheader