import React from 'react';
import superagent from 'superagent';


class Event extends React.Component {
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
      this.getResource('events');
    }

    componentDidUpdate(){
      this.getResource('events');
    }

  render(){
    return (
      <div>
        <h2>Events</h2>
        <ul>
        {this.state.resourceResult.length > 0 ? this.state.resourceResult.map((ele,idx) => <li key={idx}> <a href = "{ele.link}"> {ele.name}</a> <p> Event Date: {ele.event_date} </p><p> {ele.summary}</p></li>) : null}
        </ul>
      </div>
    );
  }
}

export default Event;