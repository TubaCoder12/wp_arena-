// client.js
import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

// Apollo Client setup
const client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://stg-wparena-staging.kinsta.cloud/graphql', 
  }),
  cache: new InMemoryCache(), 
});

export default client;
