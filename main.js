
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import Home from './Flux/components/Home.jsx';
import Admin from './Flux/components/Admin.jsx';
import Cart from './Flux/components/Cart.jsx';
import Details from './Flux/components/Details.jsx';
import { Router, Route, Link, browserHistory, IndexRoute, IndexRedirect } from 'react-router'

ReactDOM.render((
   <Router history = {browserHistory}>
      <Route path = "/" component = {App}>
         <IndexRoute component = {Home} />
         <Route path = "home" component = {Home} />
         <Route path = "additem" component = {Admin} />
         <Route path = "cart" component = {Cart} />
         <Route path = "details/:product.id" component = {Details} />
      </Route>
   </Router>

), document.getElementById('app'));
// <A context = "dad" >
