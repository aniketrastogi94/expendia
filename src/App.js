import React from "react";
import "./styles.css";
import { BrowserRouter,Route,Switch } from 'react-router-dom';
import Navbar from '../src/components/layout/navbar';
import DashBoard from '../src/components/dashboard/dashBoard';
import SignUp from './components/auth/signUp';
import SignIn from './components/auth/signIn';
import aboutus from './components/layout/about';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Switch>
          <Route exact path='/' component={DashBoard} />
          <Route exact path='/signin' component={SignIn} />
          <Route exact path='/signup' component={SignUp} />
          <Route exact path='/aboutus' component={aboutus}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
