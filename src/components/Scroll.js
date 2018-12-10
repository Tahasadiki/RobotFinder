import React, {Component} from 'react';
import './Scroll.css';

class Scroll extends Component {

  render() {
    return(
      <div className='scrollContainer pa2 bb bt bw1 b--dark-green '>
        {this.props.children}
      </div>
    );

  };

}

export default Scroll;
