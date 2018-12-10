import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';


class App extends Component {

  constructor(){
    super();
    this.state = {
      robots: [],
      searchField: ''
    }
  };

  onSearchChange = (event) => {
    this.setState({searchField: event.target.value})

  };

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({robots: users}));
  }

  render() {
    const {robots,searchField} = this.state;

    const filterdRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });

    return !robots.length ?
       <h2 className='tc washed-green'> Loading... </h2> :
       (
       <div className ='tc'>
          <h1 className='f1'> RobotsFinder </h1>
          <SearchBox searchChange={this.onSearchChange}/>
          <Scroll>
            <CardList robots={filterdRobots} />
          </Scroll>
       </div>
     )
  }

}

export default App;
