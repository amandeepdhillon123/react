import React,{Component} from "react";

class Classprops extends Component {
    render() {
        return(
            <div>
                <h1>I am {this.props.name}</h1>
                <h2>email {this.props.email}</h2>
                <h3> {this.props.other.address} {this.props.other.mobile}</h3>
            </div>
        )
    }
}

export default Classprops;