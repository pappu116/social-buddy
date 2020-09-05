import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NotFound from './Component/NotFound/NotFound';
import PostDetails from './Component/PostDetails/PostDetails';
import Devloper from './Component/Devloper/Devloper';
import Others from './Component/Others/Others';
function App() {
  return (
    <div >
      <Header></Header>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/post">
            <Home></Home>
          </Route>
          <Route path ="/pst/:pstId">
            <PostDetails></PostDetails>
          </Route>
          <Route path ="/devloper">
          <Devloper></Devloper>
          </Route>
          <Route path ="/others">
            <Others></Others>
          </Route>
          <Route  path="*">
           <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
