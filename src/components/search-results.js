import React from 'react';
import Result from './result';


class Search_Form extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    console.log(this.props.locationObj);
    return (
      <React.Fragment>
        <Result/>
        <Result/>
        <Result/>
        <Result/>
        <Result/>
      </React.Fragment>  
    );
  }
}

export default Search_Form;