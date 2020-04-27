import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import fetch from 'isomorphic-unfetch';

export default function createApolloClient(initialState, ctx) {
    // The `ctx` (NextPageContext) will only be present on the server.
    // use it to extract auth headers (ctx.req) or similar.
    let url = null; 
    console.log(process.env.IS_REMOTE, process.env.REMOTE_GRAPHQL);
    if(process.env.IS_REMOTE) url = process.env.REMOTE_GRAPHQL;
    else url = process.env.GRAPHQL
    return new ApolloClient({
        ssrMode: Boolean(ctx),
        link: new HttpLink({
            uri: url || 'https://still-tor-53786.herokuapp.com/graphql', // Server URL (must be absolute)
            credentials: 'same-origin', // Additional fetch() options like `credentials` or `headers`
            fetch,
        }),
        cache: new InMemoryCache().restore(initialState),
    });
}