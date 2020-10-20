import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component{
  constructor(props) { 
    super(props); 
    this.state = { count:100 }; // initialize 
  }
  handleClick = (inc)=>{
    let {count} = this.state
    count += inc;
    this.setState({count})
  }
  render(){
    return (
      <div className="App">
        <div className="App-display">
          {this.state.count}
        </div>
        <span className="App-controls">
          <button onClick={()=>this.handleClick(1)}>
            +
          </button>
          <button onClick={()=>this.handleClick(-1)}>
            -
          </button>
        </span>
      </div>
    );
  }
}

export default App;
