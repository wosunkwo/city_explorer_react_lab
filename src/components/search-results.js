import React from 'react';
import Weather from './weather';
import Event from './event';
import Movie from './movie';
import Yelp from './yelp';


class Search_Result extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <div id='div'>
        {this.props.locationObj ? 
          <Weather
            locationObj = {this.props.locationObj}
          />
        : null}
     
     {this.props.locationObj ? 
          <Event
            locationObj = {this.props.locationObj}
          />
        : null}

{this.props.locationObj ? 
          <Movie
            locationObj = {this.props.locationObj}
          />
        : null}
       {this.props.locationObj ? 
          <Yelp
            locationObj = {this.props.locationObj}
          />
        : null}
      </div>  
    );
  }
}

export default Search_Result;