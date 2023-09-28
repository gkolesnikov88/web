import React from "react";
import ReactDOM from "react-dom";
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

// import global styles
import GlobalStyle from "./components/GlobalStyle";
// import routes
import Pages from './pages';

// configure our API URI & cache
const uri = process.env.API_URI;
const cache = new InMemoryCache();

const client = new ApolloClient({
    uri,
    cache,
    connectToDevTools: true
});

const App = () => {
    return (
        <ApolloProvider client={client}>
            <GlobalStyle/>
            <Pages />
        </ApolloProvider>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));