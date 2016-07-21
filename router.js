
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import Home from './Flux/components/Home/Home.jsx';
import Admin from './Flux/components/Admin/Admin.jsx';
import Cart from './Flux/components/Cart/Cart.jsx';
import Details from './Flux/components/Cart/Details.jsx';
import PageNotFound from './Flux/components/NotFound/notFound.jsx';
import { Router, Route, Link, browserHistory, IndexRoute, IndexRedirect } from 'react-router'

ReactDOM.render((
   <Router history = {browserHistory}>
      <Route path = "/" component = {App}>
         <IndexRoute component = {Home} />
         <Route path = "home" component = {Home} />
         <Route path = "additem" component = {Admin} />
         <Route path = "cart" component = {Cart} />
         <Route path = "details/:id" component = {Details} />
         <Route path = "*" component = {PageNotFound} />
      </Route>
   </Router>

), document.getElementById('app'));
// <A context = "dad" >
