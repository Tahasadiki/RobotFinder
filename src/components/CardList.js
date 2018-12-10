import React, {Component} from 'react';
import Card from './Card';

class CardList extends Component{

  render() {
    const robots = this.props.robots;
    return (
      <div>
        {
        robots.map((user,i)=> {
        return (
          <Card
           key={robots[i].id}
           name={robots[i].name}
           email={robots[i].email}
           id={robots[i].id}
           />
         );
       })
     }
    </div>
     );
   }
}

export default CardList;
