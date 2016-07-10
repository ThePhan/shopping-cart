import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';

class App extends React.Component {
   render() {
      return (
         <div>
         <ul>
           <li><Link to="/"> Home </Link></li>
           <li><Link to="/additem"> Additem </Link></li>
           <li><Link to="/cart"> Cart </Link></li>
         </ul>
          {this.props.children}
         </div>
      )
   }
}

export default App;
