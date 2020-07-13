
import React, { Component } from 'react';

class Reactjsfeatures extends React.Component { 
    constructor(props) 
    { 
        super(props); 
        this.state = 
        { 
        hello : "Reactjs!"
     }; 
    } 
  
    componentWillMount() 
    { 
        console.log("componentWillMount()"); 
    } 
  
    componentDidMount() 
    { 
        console.log("componentDidMount()"); 
    } 
  
    changeState() 
    { 
        this.setState({ hello : "Birlasoft!" }); 
    } 
  
    render() 
    { 
        return ( 
            <div> 
                 
                 
            <h1>Synchrony Hello{ this.state.hello }</h1> 
            <h2> 
             <a onClick={this.changeState.bind(this)}>click here</a> 
            </h2> 
            </div>); 
    } 
  
    shouldComponentUpdate(nextProps, nextState) 
    { 
        console.log("shouldComponentUpdate()"); 
        return true; 
    } 
  
    componentWillUpdate() 
    { 
        console.log("componentWillUpdate()"); 
    } 
  
    componentDidUpdate() 
    { 
        console.log("componentDidUpdate()"); 
    } 
} 
  
export default Reactjsfeatures;