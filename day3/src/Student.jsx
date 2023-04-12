
function Student(props){
    console.log(props)
    return(
        // style={{background:"green" , color:"white"}}

        <div >
        
        <h1>{props.name}</h1>
        {/* <h3> Hello {props.name}</h3>
        <h3>Email:{props.email}</h3>
        <h3>{props.other.address} :: {props.other.mobile}</h3>
        */}
        </div>
    )
}

export default Student;