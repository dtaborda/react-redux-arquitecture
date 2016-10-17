import Types from 'app/action_types/reddit';

import apiCalls from 'app/api/api_calls';


export function getRedditSchema(name) {
  return {
    type: Types.GET_REDDIT_SCHEMA,
    callAPI: () => apiCalls.getRedditSchema(name)
  };
}
