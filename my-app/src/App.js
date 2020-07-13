import React from 'react';
import Home from './components/Home';
import Reactjsfeatures from './components/Reactjsfeatures';
import Tableresult from './components/Tableresult';
import {BrowserRouter,Route,Switch} from 'react-router-dom';

import './App.css';

function App() {
  return (
     
    <BrowserRouter>
    <div className="container">
    
  
    <Switch>
      <Route path='/' component={Home} exact />
      <Route path='/Reactjsfeatures' component={Reactjsfeatures} exact />
      <Route path='/Tableresult' component={Tableresult} exact />
     
      
    </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
