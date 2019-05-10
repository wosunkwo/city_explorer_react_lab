import React from 'react';
import superagent from 'superagent';


class Movie extends React.Component {
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
      this.getResource('movies');
    }

    componentDidUpdate(){
      this.getResource('movies');
    }

  render(){
    return (
      <section class = 'movie'>
        <h2>Movies</h2>
        <ul>
        {this.state.resourceResult.length > 0 ? this.state.resourceResult.map((ele,idx) => <li key={idx}>
        <p><span>{ ele.title }</span> was relased on { ele.released_on }. Out of { ele.total_votes } total votes, {ele.title} has an average vote of { ele.average_votes } and a popularity score of { ele.popularity }.</p>
        <img src={ ele.image_url }/>
        <p>{ ele.overview }</p>
         </li>) : null}
        </ul>
      </section>
    );
  }
}

export default Movie;