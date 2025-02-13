import { ApolloClient, InMemoryCache } from '@apollo/client';
import { apiConfig } from './apiConfig';

export const apolloClient = new ApolloClient({
  uri: apiConfig.GRAPHQL_SERVER_URL,
  cache: new InMemoryCache(),
});