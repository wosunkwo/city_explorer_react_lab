import React from 'react';
import superagent from 'superagent';
import Header from './header';
import SearchForm from './search-form';
import Map from './map';
import SearchResult from './search-results';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
    };
  }

  render(){
    return (
      <React.Fragment>
        <Header/>
        <Main/>
      </React.Fragment>
     );
  }
}

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      apiDestination: ['weather', 'movies', 'yelp', 'trails', 'events'],
      geoApiKey: process.env.REACT_APP_GEOCODE_API_KEY
  };
  }

    getLocation = () => {
    let locationObj = superagent.get('https://stark-tor-84880.herokuapp.com/location')
    .query({data: this.state.city})
    .then (response => {
      this.state.locationObj = response.body;
      this.setState({locationObjData: locationObj});
      this.getResource('weather');
    })
    .catch(error =>{
      console.log(error);
    })
  };

  getResource = (resource) => {
    superagent.get(`https://stark-tor-84880.herokuapp.com/${resource}`)
    .query({data: this.state.locationObj})
    .then(response => {
      console.log(response.body);
    })
    .catch(error =>{
      console.log(error);
    })
  };

  handleChange = e => {
    this.setState({city: e.target.value});
  };

  handleSubmit = e => {
    e.preventDefault();
    this.getLocation();
  };

  render(){
    return (
      <React.Fragment>
        <SearchForm 
        stateValue = {this.state.city}
        handleChange ={this.handleChange}
        handleSubmit = {this.handleSubmit}
        />
        <Map
        locationObj = {this.state.locationObj}
        geoApiKey = {this.state.geoApiKey}
        />
        <SearchResult 
        locationObj = {this.state.locationObj}
        />
      </React.Fragment>
    );
  }
}


export default App;

