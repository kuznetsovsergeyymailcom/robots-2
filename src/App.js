import React, {Component} from 'react';
import CardList from './cardList';
import {robots} from './robots';
import SearchBox from './searchbox.js';
import ScrollArea from './scrollArea';
import ErrorBoundary from './ErrorBoundry';

class App extends Component {

  constructor(){
    super();

    this.state = {
      robots: [],
      searchfield: ''
    }
  }

onSearchChange = (event)=>{
  this.setState({searchfield: event.target.value});
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => this.setState({robots: users}));
}


componentDidMount(){
  this.setState({robots: robots});
}

  render(){
    const filteredRobots = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    });

    if(this.state.robots.length === 0){
      return <h1>Loading</h1>
    } else {
      return (
        <div className="tc">
          <h2>Robots collection</h2>
          <SearchBox searchChange={this.onSearchChange}/>
          <ScrollArea>
            <ErrorBoundary>
                  <CardList robots={filteredRobots}/>
            </ErrorBoundary>
            
          </ScrollArea>
        </div>
        
      );
    }
    
  }
  
}

export default App;
