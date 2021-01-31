
import React, { Component } from 'react';
import Layout from './components/hoc/Layout/Layout';
import BurgerBuilder from './components/Containers/BurgerBuilder/BurgerBuilder';
import Blog  from './components/Containers/Blog/Blog';
import { Route,BrowserRouter as Router, Switch } from 'react-router-dom';
import axios from 'axios';

class App extends Component {
  render(){
    return (
      <div >
        <Router>
          <Layout>
            <Switch>
              <Route exact path="/" component={BurgerBuilder}></Route>
              <Route path="/posts" component={Blog}></Route>
              </Switch>
          </Layout>
            
        </Router>
      </div>
    );
  }
  }


export default App;
