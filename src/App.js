
import {
  BrowserRouter as Router,
  Switch,
  Route,
   Link } from "react-router-dom";
import React from "react";
import './App.css';
import Sidebar from './sidebar';
import Dashboard from './dashboard';
import Topbar from './topbar';
import User from "./user";
import CreateUser from './createuser';
import EditUser from './edituser';
import Profile from './profile';
import { UserProvider } from "./usercontext";


function App() {
  return (
    <>
      <Router>
        <div id="wrapper">
          <Sidebar></Sidebar>
          <UserProvider>
          <div id="content-wrapper" class="d-flex flex-column">
            <div id="content">
              <Topbar></Topbar>
              <div class="container-fluid">
                <Switch>
                  
                  <Route path="/dashboard" exact="true">
          <Dashboard></Dashboard>
          </Route>
          <Route path="/user" exact="true">
          <User></User>
          </Route>
          <Route path="/createuser" exact="true">
            <CreateUser></CreateUser>
          </Route>
          <Route path="/edituser/:id"  component= {EditUser} exact={true}/>
          <Route path="/profile/:id"  component= {Profile} exact={true}/>
            
                </Switch>
              </div>
            </div>
          </div>
          </UserProvider>
        </div>
      </Router>
    </>
  );
}

export default App;