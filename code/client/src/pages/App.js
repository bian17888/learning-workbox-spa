import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

import Header from '../components/Header';
import Footer from '../components/Footer';
import Home from '../pages/Home';
import ArticleHome from '../pages/article/ArticleHome';
import ArticleDetail from '../pages/article/ArticleDetail';
import PostHome from '../pages/post/PostHome';
import PostDetail from '../pages/post/PostDetail';
import NotFound from '../pages/404';

import './app.css'


class App extends React.Component {   
 render() {
  return(
    <Router>
      <Header />
      <Switch>
          <Route exact path="/" >
            <Home />
          </Route>
          <Route path="/articles/:id" >
            <ArticleDetail />
          </Route>
          <Route path="/articles" >
            <ArticleHome />
          </Route>
          <Route path="/posts/:id" >
            <PostDetail />
          </Route>
          <Route path="/posts" >
            <PostHome />
          </Route>
          <Route path="*" >
            <NotFound />
          </Route>
      </Switch>
      <Footer />
  </Router>
  );
 }
}
export default App