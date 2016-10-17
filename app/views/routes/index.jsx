import React from 'react';
import {
  Router,
  Route,
  browserHistory,
  IndexRoute
} from 'react-router';
import ApplicationContainer from 'app/views/application/application_container';
import RedditSearchContainer from 'app/views/reddit/search_container';
import DamianContainer from 'app/views/damian';
import HomeContainer from 'app/views/home';


export default function renderRoutes(store) {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={ApplicationContainer}>
        <IndexRoute component={HomeContainer} />
        <Route path="/reddit" component={RedditSearchContainer} />
        <Route path="/damian" component={DamianContainer} />
      </Route>
    </Router>
  );
}
