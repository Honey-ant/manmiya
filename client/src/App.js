import React from 'react';
import { StripeProvider } from 'react-stripe-elements';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';

import { StoreProvider } from './utils/GlobalState';
import { setContext } from '@apollo/client/link/context';
import ScrollButton from './components/ScrollButton';
import { Content, Heading } from './components/Styles';

import Home from './pages/Home';
import Detail from './pages/Detail';
import ProductList from './components/ProductList/index.js';
import Checkout from './pages/Checkout';

import NoMatch from './pages/NoMatch';
import Login from './pages/Login';
import Signup from './pages/Signup';

import About from './pages/About.js';
import ArtBio from './pages/ArtBio';
import Exhibtions from './pages/Exhibtions';
import Contact from './components/Contact/index.js';
import BlakFacts from './pages/BlakFacts';

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
          <StoreProvider>
            <Nav />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/about" component={About} />
              <Route exact path="/artbio" component={ArtBio} />
              <Route exact path="/productList" component={ProductList} />
              <Route exact path="/exhibtions" component={Exhibtions} />
              <Route exact path="/blakfacts" component={BlakFacts} />
              <Route exact path="/checkout" component={Checkout} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/success" component={Success} />
              <Route exact path="/orderHistory" component={OrderHistory} />
              <Route exact path="/products/:id" component={Detail} />
              <Route component={NoMatch} />
              <ScrollButton />
            </Switch>
            <Footer/>
          </StoreProvider>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
