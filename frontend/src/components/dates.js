import React from 'react';
import axios from 'axios';


class Dates extends React.Component {
    constructor(){
        super();
        this.state ={
          buttonNames:"",
        }
  }

    componentDidMount(){
    console.log("this is wheer the Date components are:", this.props)
    this.refresh();
    }

    refresh(){
        this.setState({buttonNames:this.state.buttonNames})
        console.log("this is wheer the Date components name sare:", this.state.buttonNames)
    }

    render(){
        return (<div className="dateField">
                    <p>{this.props.dates}</p>
                </div>
            
            )
    }
}

export default Dates;