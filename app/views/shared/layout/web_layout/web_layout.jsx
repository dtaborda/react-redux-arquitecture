import React, { Component, PropTypes } from 'react';
import image from 'app/assets/bastrap3/bac-header-2.png';
import Footer from '../footer';

export default class WebLayout extends Component {
  static get propTypes() {
    return {
      children: PropTypes.element.isRequired
    };
  }

  render() {
    return (
      <div>
        <header className="navbar navbar-primary navbar-top">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-sm-6">
                <a className="navbar-brand bac-header" href="#"/>
              </div>
              <div className="col-md-6 col-sm-6 text-right oculto">
                <h5 className="sub-brand"><img src={image}/></h5>
              </div>
            </div>
          </div>
        </header>
        <div>
          {this.props.children}
        </div>
        <Footer/>
      </div>
    );
  }
}
