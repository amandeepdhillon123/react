

import React,{Component} from "react";
 
class Staclass extends Component {
  constructor()
  {
    super();
    this.state={
        // data:"anil"
        data:0
    }
  }

  incre(){

    //   this.setState({data:"dhillon"})
      this.setState({ data: this.state.data +1})
  }

  decre(){

    //   this.setState({data:"dhillon"})
      this.setState({ data: this.state.data -1})
  }
    render(){
        return(
            <div>
                <h1>{this.state.data}</h1>
                <button onClick={ () => this.incre()}>increase</button>

                <button onClick={ () => this.decre()}>decrease</button>
            </div>
        )
    }
}

export default Staclass;