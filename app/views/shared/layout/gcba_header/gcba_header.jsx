import React, { Component } from 'react';
import BacHeader from 'app/assets/bastrap3/bac-header-2.png';

export default class GcbaHeader extends Component {
  
  render() {
    return (
      <header className="navbar navbar-primary navbar-top">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-6">
              <a className="navbar-brand bac-header" href="#"/>
            </div>
            <div className="col-md-6 col-sm-6 text-right oculto">
              <h5 className="sub-brand"><img src={BacHeader}/></h5>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
