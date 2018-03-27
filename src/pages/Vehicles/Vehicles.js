import React, {Component} from 'react';
import {connect} from 'react-redux';
import {createVehiclesRequest, nextPage, previousPage} from '../../actions/vehicles';

class Vehicles extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: this.props.query
    }
  }

  componentDidMount() {
    this.props.getVehicles();
  }

  componentWillReceiveProps(props) {
    this.setState({
      query: {
        ...this.state.query,
        vehicles: props.query.vehicles
      }
    })
  }

  render() {
    return (
      <div>
        <h1>Vehicles</h1>
        <button onClick={this.props.previousPage} type="button">previous</button>
        <button onClick={this.props.nextPage} type="button">next</button>
        <ul>
          {
            this.state.query.vehicles.map(vehicle => (
              <li key={(vehicle.id)}>
                {vehicle.year} {vehicle.make} {vehicle.model}
              </li>
            ))
          }
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    vehicles: state.vehicles,
    query: state.query
  };
};

export default connect(
  mapStateToProps,
  {
    getVehicles: createVehiclesRequest,
    previousPage: previousPage,
    nextPage: nextPage,
  }
)(Vehicles);
