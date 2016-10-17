import React, { Component, PropTypes } from 'react';
import WebLayout from 'app/views/shared/layout/web_layout/';

import styles from './search.scss';

export default class Search extends Component {
  static get propTypes() {
    return {
      onGoToProfile: PropTypes.func
    };
  }

  render() {
    return (
      <WebLayout onGoToProfile={this.props.onGoToProfile}>
        <h1 className={styles.title}>Reddit</h1>
      </WebLayout>
    );
  }
}
