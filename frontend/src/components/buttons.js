import React from 'react';
import axios from 'axios';


class Buttons extends React.Component {
    constructor(){
        super();
        this.state ={
          buttonNames:"",
        }
        // this.clicky = this.clicky.bind(this);
        // this.refreshList = this.refreshList.bind(this);
  }

    componentDidMount(){
    this.state.buttonNames = this.props.names;
    console.log("this is wheer the button components name sare:", this.state.buttonNames)
    this.setState({buttonNames:this.state.buttonNames})
    console.log("this is wheer the button components name sare:", this.state.buttonNames)
    this.refresh();
    }

    refresh(){
        this.setState({buttonNames:this.state.buttonNames})
        console.log("this is wheer the button components name sare:", this.state.buttonNames)
    }

    render(){
        if(this.state.buttonNames){
        console.log("this is inside the buttons componentxzxcsadads", this.props)
        const butts = this.props.names.map((nameButts, index)=>{
            console.log("this is where the mapping occurs!")
            return (<div>
            <button>{nameButts}</button>
            </div>
            )
        })
        return (<div>{butts}</div>)
        }else{
            return <h2>boo</h2>
        }
}
}

export default Buttons;