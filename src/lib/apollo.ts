import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.graphcms.com/v2/cl4rhcklu12rf01z5dqow7eij/master",
  cache: new InMemoryCache(),
});
