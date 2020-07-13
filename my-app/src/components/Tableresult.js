import React from 'react';
import {
  withRouter
} from "react-router-dom";

class Tableresult extends  React.Component {
  render() {
    const {
        location: 
        {data: {name = '',  role = ''} = {} } ={}} = this.props;
    return(
      <div>
        Name: {name}
        role: {role}
      </div>
    )
  }
}
export default withRouter(Tableresult);