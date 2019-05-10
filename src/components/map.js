import React from 'react';

class Map extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    if(this.props.locationObj){
      var renderedMap = (<img id = 'map' src = {`https://maps.googleapis.com/maps/api/staticmap?center=${this.props.locationObj.latitude}%2c%20${this.props.locationObj.longitude}&zoom=13&size=600x300&maptype=roadmap&key=${this.props.geoApiKey}`}/>);
    }else{
      var renderedMap = (<p></p>);
    }

    return (
      <React.Fragment>
        {renderedMap}
      </React.Fragment>
    );
  }
}

export default Map;