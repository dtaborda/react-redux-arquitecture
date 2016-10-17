import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import Search from './search';
import { getRedditSchema } from 'app/action_creators/reddit_action_creator';

const select = (state) => ({
  gettingRedditSchema: state.reddit.gettingRedditSchema,
  redditSchemaError: state.reddit.redditSchemaError,
  redditSchema: state.reddit.redditSchema
});

@connect(select)
export default class RedditSearchContainer extends Component {
  static get propTypes() {
    return {
      dispatch: PropTypes.func.isRequired,
      redditSchema: PropTypes.object
    };
  }

  componentWillMount() {
    this.handleGetRedditSchema('sports');
  }

  handleGetRedditSchema(nameSchema) {
    const { dispatch } = this.props;
    dispatch(getRedditSchema(nameSchema)).then((result) => {
      if (result.apiResponse.status === 'ERROR') return;
    });
  }


  handleGoToProfile() {
    browserHistory.push('/damian');
  }

  render() {
    console.log('this!!!', this);
    return (
      <Search onGoToProfile={this.handleGoToProfile.bind(this)}/>
    );
  }
}
