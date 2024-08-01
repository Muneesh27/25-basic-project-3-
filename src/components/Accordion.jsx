
//single selection
//multiple selection

import { useState } from "react";
import data from "./data";
import "./styles.css";

export default function Accordian() {
      const [selected,setSelected] = useState(null)



      function handleCurrentItem (getCurrentId) {
        setSelected(getCurrentId)
      }
  return (
   <div className="wrapper">
    <div className="accordion">
        {
             data && data.length > 0 ? 
             data.map(dataItem => <div className="item">
                
                <div onClick={() =>handleCurrentItem(dataItem.id)} className="title">

                    <h1>{dataItem.question}</h1>
                    <span>+</span>
                </div>{
                    selected === dataItem.id ? 
                    
                    <div>{dataItem.answer}</div>
                    : null

                }
                    
                 </div>)
             
             
             
             
             : <div> no data found</div>        }
       
        
        </div> 
    
   </div>
  );
}
