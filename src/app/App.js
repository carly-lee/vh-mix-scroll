'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { requestConfig } from 'actions/ConfigActions';

import styles from './App.css';

export class App extends Component {
  componentWillMount(){
    this.props.requestConfig();
  }

  _getHorizontalScroll(cities){
    return cities.map((city, idx, array)=>{
      return <div key={idx}>{city.name}</div>;
    });
  }

  render() {
    const { config } = this.props;
    return (
      <div className={styles.App}>
        <h2>My travel photos</h2>
        { config ? this._getHorizontalScroll(config.cities) : <div>Loading...</div>}
      </div>
    );
  }
}

App.propTypes = {
  config: React.PropTypes.object,
  requestConfig: React.PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    config: state.config.data
  }
};

function mapDispatchToProps(dispatch) {
  return {
    requestConfig: () => dispatch(requestConfig())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);