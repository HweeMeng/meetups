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
            attendees:[{ 
              dates:[]
            }],
            id:""
          },
          commonDates:[],
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
    
    attendeesDates = () =>{
      console.log("this is attendeesDates", this.state.meetup.attendees[0]);
      console.log("this is where the ttendees.length is", this.state.meetup.attendees.length)
      this.state.meetup.attendees.map((attendees)=>{
        console.log("map function runs", attendees.dates)
        return (<div>
                  <h2>{attendees.name}</h2>
                  <p>{attendees.dates}
                  </p>
                </div>)
        })
    }

    commonDates = () => {
      var comDates = [];
      console.log("logging the commondates state: ", this.state.commonDates)
      console.log("logging the comdates state: ", comDates)
    }

  render(){
    console.log("this is where the this.state is", this.state)
      return (<div className="App">
                <h2>{this.state.meetup.meetup}</h2>
                <h3>{this.state.meetup.description}</h3>
                {this.state.meetup.attendees.map((name) => {
                  return <div className="peopleBox">
                          <button className={name.name} key="name.id"> {name.name} </button>
                              {name.dates.map((date)=>{
                              return <ul>{date}</ul>
                            })}
                        </div>;
                })}
                {this.attendeesDates()}
                {this.commonDates()}
              </div>
          );
  }
}

export default App;
