import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import Nav from './components/nav.js'
import Landing from './components/landing/landing'

import Create from './components/create.js'
import Profile from './components/wardrobe/profile'


const httpLink = createHttpLink({
  uri: process.env.herokuLink || 'http://localhost:3001/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
function App() {
  return (
    <ApolloProvider client={client}>
      <Nav />
      <Routes>

        <Route path="/" element={<Landing />}>
        </Route>
        
        <Route path="/create" element={<Create />}>
        </Route>

        <Route path="/profile" element={<Profile />}>
        </Route>
        
      </Routes>

      </ApolloProvider>
  );
}

export default App;