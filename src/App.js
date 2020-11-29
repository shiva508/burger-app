
import React, { Component } from 'react';
import Layout from './components/hoc/Layout/Layout';
import BurgerBuilder from './components/Containers/BurgerBuilder/BurgerBuilder';
import Blog  from './components/Containers/Blog/Blog';

class App extends Component {
  render(){
    return (
      <div >
        <Layout>
        {/* <BurgerBuilder/> */}
        <Blog/>
        </Layout>
      </div>
    );
  }
  }


export default App;
