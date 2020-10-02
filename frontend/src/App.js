import React from 'react';
import './App.css';
import axios from 'axios';

class App extends React.Component {
  constructor(){
      super();
      this.state ={
        meetup:[],
      }
  }

  componentDidMount(){
    console.log('component did mount runs')
    var params = window.location.href.slice(-1)
    var url = "http://localhost:8000/api/meetups/" + params + "/"
    console.log(url, "url here!!!")
    this.refreshList(url);
    console.log("state here!!!", this.state.meetup )
    }

  refreshList = (url) => {
    const runWhenDone = (response) => {
      const data = response.data
      console.log("**************")
      console.log("**************")
      console.log("**************")
      console.log("**************")
      console.log( data );
      this.setState({ destinations: data })
    }
    const whenError = (error) => {
        console.log("eerror", error)
    }
    axios.get(url).then(runWhenDone).catch(whenError)
  };

  clicky(){
    console.log("show button clicked!! ", this.state.meetup)
  }
  
  render(){
      return (<div className="App">
                <h1>This is the react app side</h1>
                <button onClick={this.clicky}>click me</button>
              </div>
          );
  }
}

export default App;
