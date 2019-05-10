import React from 'react';
import superagent from 'superagent';


class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      resourceResult: [],
      renderResult: null,
    };
  }

  getResource = resource  => {
    superagent.get(`https://stark-tor-84880.herokuapp.com/${resource}`)
      .query({data: this.props.locationObj})
      .then (response => {
        this.setState({resourceResult: response.body});
      })
    }

    componentDidMount(){
      this.getResource('weather');
    }

    componentDidUpdate(){
      this.getResource('weather');
    }


  render(){
    return (
      <div>
        <h2>Weather </h2>
        <ul>
        {this.state.resourceResult.length > 0 ? this.state.resourceResult.map((ele,idx) => <li key={idx}> {ele.forecast + ' ' + ele.time } </li>) : null}
        </ul>
      </div>
    );
  }
}

export default Weather;