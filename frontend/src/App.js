import React from 'react';
import './App.css';
import axios from 'axios';
import Buttons from './components/buttons';


class App extends React.Component {
    constructor(props){
        super(props);
        this.state ={
          meetup:{
            meetup:"",
            description:"",
            attendees:[],
            id:""
          }
        }
        // this.clicky = this.clicky.bind(this);
        // this.refreshList = this.refreshList.bind(this);
  }

  async componentDidMount(){
    var params = window.location.href.slice(-1)
    var url = "http://localhost:8000/api/meetups/" + params + "/"
    const runWhenDone = (response) => {
      const data = response.data
      console.log("**************")
      console.log("**************")
      console.log("**************")
      console.log("**************")
      console.log( data );
      this.setState({ meetup: data })
    }
    const whenError = (error) => {
        console.log("eerror", error)
    }
    await (axios.get(url).then(runWhenDone).catch(whenError))

    console.log('component did mount runs')
    }
  
    x = () =>{
      const xyz = this.state.meetup.attendees.map((name, index)=>{
        console.log("inside x functions", name)
      })
    }
  render(){
    console.log("this is where the this.state is", this.state)
      return (<div className="App">
                <h2>{this.state.meetup.meetup}</h2>
                <h3>{this.state.meetup.description}</h3>
                {this.state.meetup.attendees.map((name) => {
                  return <button key="name.id"> {name.name} </button>;
                })}
              </div>
          );
  }
}

export default App;
