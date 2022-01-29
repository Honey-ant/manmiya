import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import { Provider } from 'react-redux';
import store from './utils/store';
import ScrollButton from './components/ScrollButton';
import { Content, Heading } from './components/Styles';

import Home from './pages/Home';
import Cover from './components/Cover';
import Detail from './pages/Detail';
import Checkout from './pages/Checkout';

import NoMatch from './pages/NoMatch';
import Login from './pages/Login';
import Signup from './pages/Signup';

import About from './pages/About.js';
import ArtBio from './pages/ArtBio';
import Contact from './components/Contact/index.js';

import Nav from './components/Nav';
import Success from './pages/Success';
import OrderHistory from './pages/OrderHistory';
import Footer from './components/footer.js';


const httpLink = createHttpLink({
  uri: '/graphql',
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
      <Router>
        <div>
          <Provider store={store}>
            {/* <Banner /> */}
            <Nav />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/about" component={About} />
              <Route exact path="/artbio" component={ArtBio} />
              <Route exact path="/checkout" component={Checkout} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/success" component={Success} />
              <Route exact path="/orderHistory" component={OrderHistory} />
              <Route exact path="/products/:id" component={Detail} />
              <Route component={NoMatch} />
              <ScrollButton />
            </Switch>
            <Footer/>
          </Provider>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
