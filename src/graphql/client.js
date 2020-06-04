import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

export const cache = new InMemoryCache();

const API_URL = 'https://pizza-del.herokuapp.com/v1/graphql';

const client = new ApolloClient({
  cache,
  link: new HttpLink({
    uri: API_URL,
  }),
});

export default client;
