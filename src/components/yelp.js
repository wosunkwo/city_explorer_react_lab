import React from 'react';
import superagent from 'superagent';


class Yelp extends React.Component {
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
        console.log(response.body); 
        this.setState({resourceResult: response.body});
      })
    }

    componentDidMount(){
      this.getResource('yelp');
    }

    componentDidUpdate(){
      this.getResource('yelp');
    }

  render(){
    return (
      <div>
        <h2>Yelp</h2>
        <ul>
        {this.state.resourceResult.length > 0 ? this.state.resourceResult.map((ele,idx) => <li key={idx}>
        <a href= { ele.url }>{ ele.name }</a>
        <p>The average rating is { ele.rating } out of 5 and the average cost is { ele.price } out of 4</p>
      <img src= { ele.image_url } width='200px'/>
        </li>) : null}
        </ul>
      </div>
    );
  }
}

export default Yelp;