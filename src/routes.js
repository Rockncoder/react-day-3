import React from 'react';
import {Route} from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Credit from './pages/Credit/Credit';
import Vehicles from './pages/Vehicles/Vehicles';
import Login from './pages/Login/Login';
import {withLayout} from './HOC/withLayout';
import {withRouter} from './HOC/withRouter';


export const Routes = props => (
  <div>
    <Route exact path='/' component={Home} />
    <Route path='/about' component={About} />
    <Route path='/credit' component={Credit} />
    <Route path='/vehicles' component={Vehicles} />
    <Route path='/login' component={Login} />
  </div>
);

export default withRouter(withLayout(Routes));