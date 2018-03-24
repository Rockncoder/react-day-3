import React, {Component} from 'react';
import {connect} from 'react-redux';
import {createVehiclesRequest} from '../../actions/vehicles';

class Vehicles extends Component {
  componentDidMount() {
    this.props.getVehicles({page: 1, limit: 20});
  }

  render() {
    return (
      <div>
        <h1>Vehicles page!</h1>
      </div>
    );
  }
}

export default connect(
  null,
  {getVehicles: createVehiclesRequest}
)(Vehicles);
