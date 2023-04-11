import { useState } from "react";

function Increment(){

    const[data,setData]=useState(0)

    function Incre(){
         setData(data+1)
    }

    function Decre(){
        setData(data-1)
   }

    return(
        <div>
            <h1>{data}</h1>
            <button onClick={Incre}> Increase</button>
            <button onClick={Decre}> Increase</button>
          
        </div>
    )
}





export default Increment;


