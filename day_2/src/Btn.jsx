
function Btn(){

    // changing data 
let data ="amandeep"
    function Apple()
    {
        // alert("amandeep");
         data="peter"
        alert(data)
    }
    return(
        <div>
        <h1>
         {data}
        </h1>

        {/* automaytic  */}
            {/* <button onClick={Apple()}>click me</button> */}
           
           {/* it will display when you click  */}
           <button onClick={Apple}>click me</button> 
            
            {/* automatic  dispaly arraw  */}
            {/* <button onClick={alert("hello gys")}>click me</button>  */}

                {/* it will display when you click  */}
             {/* <button onClick={() => alert("i am arraow function")}>click me</button>  */}
            
            <button></button>
       
        </div>
    )

}

export default Btn;