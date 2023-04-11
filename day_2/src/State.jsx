import { useState } from "react";


function Update() {
    const [data,setData] = useState("amandeep")
  function Apple() {

    setData("updated ")

    // alert("amandeep");
        

        
   
  }
  // const data ="amandeep"
  return (
    <div>
      <h4>{data}</h4>
      <button onClick={Apple}>Update Data</button>
    </div>
  );
}

export default Update;
