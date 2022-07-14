import React, { Component } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import jwtDecode from "jwt-decode";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.css";

import './App.css';
import Movie from './components/movie';
import Home from './components/home';
import CheckoutPage from './components/checkoutPage';
import Navbar from './components/navbar';
import NotFound from './components/notFound';
import MovieDetails from './components/movieDetails';
import Login from './components/login';
import SignUp from './components/signUp';
import Logout from './components/logout';

class App extends Component {
  state = {
    user: null
  }

  componentDidMount() {
    try{
      const token = localStorage.getItem('authToken');
      const user = jwtDecode(token);
      this.setState({ user });
    }
    catch(e){}
  }

  render() { 
    return (
      <div className="App">
        <ToastContainer />
        <Navbar user={this.state.user}/>
        <div className="content">
          <Switch>
            <Route path="/movies" component={Movie}/>
            <Route 
              path="/movie/:id" 
              render={props => this.state.user ? <MovieDetails {...props}/> : <Redirect to={{
                pathname: '/login',
                state: { from: props.location }
              }}/>}
            />
            <Route path="/movie/new" component={MovieDetails}/>
            <Route path="/checkout" component={CheckoutPage}/>
            <Route path="/not-found" component={NotFound}/>
            <Route path="/login" component={Login}/>
            <Route path="/logout" component={Logout}/>
            <Route path="/signup" component={SignUp}/>
            <Route path="/" exact component={Home}/>
            <Redirect to="/not-found"/>
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
