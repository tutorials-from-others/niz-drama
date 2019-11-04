import React, {Component} from 'react';
// import "bootstrap/dist/css/bootstrap.min.css";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Drama from './components/body/drama';

class App extends Component {
  render (){
    return (
      <div className="card">
        <div className="card-body">
          <h1><center>Drama List</center></h1>
          <Drama />
        </div>
      </div>
      )
  }

  

}

export default App;
