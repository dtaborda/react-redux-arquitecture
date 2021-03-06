import React, { Component, PropTypes } from 'react';
import WebLayout from 'app/views/shared/layout/web_layout';

export default class ApplicationContainer extends Component {
  static get propTypes() {
    return {
      children: PropTypes.node.isRequired
    };
  }

  render() {
    return (
      <WebLayout children={this.props.children} />
    );
  }
}
