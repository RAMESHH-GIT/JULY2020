
import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
//import { Link } from 'react-router-dom';
import Reactjsfeatures from './Reactjsfeatures';
//import Propsend from './Propsend';


import {
  Link,withRouter
} from "react-router-dom";

class Home extends React.Component {
  state = {
    data: [{name: 'Ramesh', role: 'software', id: 1},
      {name: 'abcd', role: 'it', id: 2}]
  };
  render() {
    const {data} = this.state;
    return(
    <div>
        <nav class="navbar navbar-default">
<div class="container-fluid">
  <div class="navbar-header">
    <a class="navbar-brand" href="#">WebSiteName</a>
  </div>
  <ul class="nav navbar-nav">
    <li class="active"><a href="#">Home</a></li>
    <li> <NavLink 
            to="/Reactjsfeatures">Reactjsfeatures</NavLink></li>
   
    
  
    
  </ul>
</div>
</nav>
      {data.map(emp => {
        return <div>
          <Link
            to={{
              pathname: "/Tableresult",
              data: emp
            }}
          >{emp.name}</Link>
        </div>
      })}
    </div>)
  }
}
export default withRouter(Home);