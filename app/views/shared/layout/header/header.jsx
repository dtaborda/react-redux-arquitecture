import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import styles from './header.scss';

export default class Header extends Component {
  static get propTypes() {
    return {
      showSearch: PropTypes.bool,
      onGoToProfile: PropTypes.func,
      className: PropTypes.string
    };
  }

  static defaultProps = {
    showSearch: true
  }

  handleGoToProfile(e) {
    e.preventDefault();
    this.props.onGoToProfile();
  }

  renderSearchInput() {
    if (this.props.showSearch) {
      return (
        <div className={styles.searchContainer}>
          <input type="text" className={styles.search} placeholder="Search ..."/>
        </div>
      );
    }
  }

  render() {
    return (
      <div className={classNames(styles.content, this.props.className)}>
        <a
          className={styles.brand}
          onClick={this.handleGoToProfile.bind(this)}
        >
          <span>Reddit</span>
        </a>
        {this.renderSearchInput()}
      </div>
    );
  }
}
